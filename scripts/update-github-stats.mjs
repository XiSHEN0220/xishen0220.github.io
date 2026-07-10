import { readFile, writeFile } from "node:fs/promises";

const rootUrl = new URL("../", import.meta.url);
const indexUrl = new URL("index.html", rootUrl);
const outputUrl = new URL("data/github-stats.json", rootUrl);
let html = await readFile(indexUrl, "utf8");
const repositoryPattern = /href=["']https:\/\/github\.com\/([^\/"']+\/[^\/"'?#]+)["'][^>]*data-show-count=["']true["']/gi;
const repositories = new Set();

for (const match of html.matchAll(repositoryPattern)) {
  repositories.add(match[1].replace(/\.git$/i, ""));
}

let previous = { generated_at: null, repos: {} };
try {
  previous = JSON.parse(await readFile(outputUrl, "utf8"));
} catch {
  // The first run starts from an empty data file.
}

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "xishen0220-github-pages",
  "X-GitHub-Api-Version": "2022-11-28"
};

if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

async function fetchRepository(repository) {
  const response = await fetch(`https://api.github.com/repos/${repository}`, { headers });
  if (!response.ok) {
    throw new Error(`${repository}: GitHub returned ${response.status}`);
  }
  const data = await response.json();
  return {
    stars: data.stargazers_count,
    forks: data.forks_count,
    url: data.html_url
  };
}

const repos = {};
const queue = Array.from(repositories);
for (let index = 0; index < queue.length; index += 6) {
  const batch = queue.slice(index, index + 6);
  const results = await Promise.allSettled(batch.map(fetchRepository));
  results.forEach((result, resultIndex) => {
    const repository = batch[resultIndex];
    const key = repository.toLowerCase();
    if (result.status === "fulfilled") {
      repos[key] = result.value;
      return;
    }
    if (previous.repos && previous.repos[key]) {
      repos[key] = previous.repos[key];
    }
    console.warn(result.reason.message);
  });
}

const output = {
  generated_at: new Date().toISOString(),
  repos
};

await writeFile(outputUrl, `${JSON.stringify(output, null, 2)}\n`);

const badgePattern = /<a\b(?=[^>]*class=["'][^"']*\bgithub-button\b[^"']*["'])(?=[^>]*data-show-count=["']true["'])[^>]*>[\s\S]*?<\/a>/gi;
let embeddedCounts = 0;
html = html.replace(badgePattern, function (badge) {
  const href = badge.match(/href=["']https:\/\/github\.com\/([^\/"']+\/[^\/"'?#]+)["']/i);
  const repository = href ? href[1].replace(/\.git$/i, "").toLowerCase() : null;
  const entry = repository ? repos[repository] : null;
  if (!entry || typeof entry.stars !== "number") {
    return badge;
  }

  let openingTag = badge.match(/^<a\b[^>]*>/i)[0];
  if (/\sdata-stars=["'][^"']*["']/i.test(openingTag)) {
    openingTag = openingTag.replace(/\sdata-stars=["'][^"']*["']/i, ` data-stars="${entry.stars}"`);
  } else {
    openingTag = openingTag.replace(/>$/, ` data-stars="${entry.stars}">`);
  }
  embeddedCounts += 1;
  return `${openingTag}<span class="star-label">Star</span><span class="star-value">${entry.stars}</span></a>`;
});

await writeFile(indexUrl, html);
console.log(`Updated ${Object.keys(repos).length} GitHub repositories and embedded ${embeddedCounts} star counts.`);
