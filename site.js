"use strict";



function LoadMore() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  var t = (window.__i18n && window.__i18n[window.__lang]) ? window.__i18n[window.__lang] : null;

  if (!moreText || !btnText) {
    return;
  }

  var expanded = btnText.getAttribute("aria-expanded") === "true";
  if (expanded) {
    btnText.innerHTML = t ? t.show_more : "Show more";
    moreText.style.display = "none";
    btnText.setAttribute("aria-expanded", "false");
  } else {
    btnText.innerHTML = t ? t.hide : "Hide";
    moreText.style.display = "block";
    btnText.setAttribute("aria-expanded", "true");
  }
}

window.__i18n = {
  en: {
    real_time_vision: "Real-time Vision",
    edge_vision: "Edge Vision",
    safety_ai: "Safety AI",
    lab_clock: "Lab clock",
    hero_kicker: "Reliable Vision AI for the Real World",
    hero_role: "Co-founder & Chief Scientist · <a href=\"https://www.intellindust.com/\">Intellindust</a> · Shenzhen, China",
    email_label: "Email:",
    bio_1: "At <a href=\"https://intellindust-ai-lab.github.io/\">Intellindust AI Lab</a>, our team builds reliable and efficient computer vision systems for real-time applications on edge devices with limited NPU compute.",
    bio_2: "I completed my Ph.D. in the <a href=\"http://imagine.enpc.fr/\">IMAGINE team</a> at <a href=\"http://www.enpc.fr/\">Ecole des Ponts ParisTech</a>, and I lived in lovely Paris, France for 10 years. Previously, I worked as a Senior Researcher at Tencent AI Lab.",
    bio_3: "If you are interested in internships focused on AI safety and efficient training for real-time vision, feel free to reach out.",
    last_update: "(Last update: 2026-07-10)",
    now_title: "Now Building",
    now_body: "Robust and efficient open-world vision models for real-time edge deployment, currently focused on next-generation edge cv models.",
    heading_news: "News",
    heading_awards: "Awards & Honors",
    heading_research: "Research",
    heading_misc: "Beyond Research",
    nav_news: "News",
    nav_research: "Research",
    nav_awards: "Awards",
    nav_misc: "About",
    research_note: "* Equal contribution · + Corresponding author · Featured work is highlighted.",
    community_label: "Community",
    motion_label: "Motion",
    services_title: "Academic service",
    sports_title: "Outside the lab",
    services_body: "Reviewer for ICML, CVPR, ECCV, NeurIPS, ICLR, BMVC, WACV, TPAMI, PR, IJCV, and ICCV.",
    sports_body: "I’m an amateur football player with a personal best of 11.30 seconds in the 100 meters. I also enjoy jogging, hiking, camping, and skiing.",
    show_more: "Show more",
    hide: "Hide"
  },
  zh: {
    real_time_vision: "实时视觉",
    edge_vision: "边缘视觉",
    safety_ai: "安全人工智能",
    lab_clock: "实验室时钟",
    hero_kicker: "面向真实世界的可靠视觉人工智能",
    hero_role: "联合创始人兼首席科学家 · <a href=\"https://www.intellindust.com/\">Intellindust</a> · 中国深圳",
    email_label: "邮箱：",
    bio_1: "在 <a href=\"https://intellindust-ai-lab.github.io/\">Intellindust AI Lab</a>，我们的团队专注于在有限 NPU 算力的边缘设备上构建可靠、高效的实时计算机视觉系统。",
    bio_2: "我在 <a href=\"http://www.enpc.fr/\">巴黎高科国立桥路学院</a> 的 <a href=\"http://imagine.enpc.fr/\">IMAGINE</a> 团队完成博士学位，并在法国美丽的巴黎生活了 10 年。此前我曾在腾讯 AI Lab 担任高级研究员。",
    bio_3: "如果你对安全人工智能或实时视觉高效训练相关实习感兴趣，欢迎邮件联系我。",
    last_update: "（最后更新：2026-07-10）",
    now_title: "当前在做",
    now_body: "面向实时边缘部署的鲁棒高效开放世界视觉模型，当前重点是新一代边缘视觉模型。",
    heading_news: "最新动态",
    heading_awards: "奖项与荣誉",
    heading_research: "研究成果",
    heading_misc: "研究之外",
    nav_news: "动态",
    nav_research: "研究",
    nav_awards: "荣誉",
    nav_misc: "关于",
    research_note: "* 表示共同贡献 · + 表示通讯作者 · 代表性工作以高亮显示。",
    community_label: "学术共同体",
    motion_label: "运动",
    services_title: "学术服务",
    sports_title: "研究之外",
    services_body: "担任 ICML、CVPR、ECCV、NeurIPS、ICLR、BMVC、WACV、TPAMI、PR、IJCV 和 ICCV 审稿人。",
    sports_body: "我是一名业余足球运动员，100 米个人最好成绩为 11.30 秒。我也喜欢慢跑、徒步、露营和滑雪。",
    show_more: "显示更多",
    hide: "收起"
  },
  fr: {
    real_time_vision: "Vision en temps réel",
    edge_vision: "Vision embarquée",
    safety_ai: "IA sûre",
    lab_clock: "Horloge du labo",
    hero_kicker: "Une IA visuelle fiable pour le monde réel",
    hero_role: "Cofondateur et directeur scientifique · <a href=\"https://www.intellindust.com/\">Intellindust</a> · Shenzhen, Chine",
    email_label: "E-mail :",
    bio_1: "Au sein d'<a href=\"https://intellindust-ai-lab.github.io/\">Intellindust AI Lab</a>, notre équipe développe des systèmes de vision par ordinateur fiables et efficaces pour des applications en temps réel sur des appareils embarqués disposant d'une puissance NPU limitée.",
    bio_2: "J'ai effectué mon doctorat au sein de l'équipe <a href=\"http://imagine.enpc.fr/\">IMAGINE</a> à <a href=\"http://www.enpc.fr/\">l'Ecole des Ponts ParisTech</a>, et j'ai vécu dix ans dans la belle ville de Paris, en France. J'ai ensuite travaillé comme Senior Researcher chez Tencent AI Lab.",
    bio_3: "Si vous êtes intéressé par un stage autour de la sûreté de l'IA et de l'entraînement efficace pour la vision en temps réel, n'hésitez pas à me contacter par e-mail.",
    last_update: "(Dernière mise à jour : 2026-07-10)",
    now_title: "En cours",
    now_body: "Des modèles de vision open-world robustes et efficaces pour un déploiement embarqué en temps réel, avec un accent actuel sur la prochaine génération de modèles de vision embarquée.",
    heading_news: "Actualités",
    heading_awards: "Prix et distinctions",
    heading_research: "Travaux de recherche",
    heading_misc: "Au-delà de la recherche",
    nav_news: "Actualités",
    nav_research: "Recherche",
    nav_awards: "Distinctions",
    nav_misc: "À propos",
    research_note: "* Contribution égale · + Auteur correspondant · Les travaux représentatifs sont mis en évidence.",
    community_label: "Communauté",
    motion_label: "Sport",
    services_title: "Services à la communauté scientifique",
    sports_title: "En dehors du laboratoire",
    services_body: "Évaluateur pour ICML, CVPR, ECCV, NeurIPS, ICLR, BMVC, WACV, TPAMI, PR, IJCV et ICCV.",
    sports_body: "Je pratique le football en amateur et mon meilleur temps sur 100 mètres est de 11,30 secondes. J’aime également courir, faire de la randonnée, camper et skier.",
    show_more: "Afficher plus",
    hide: "Masquer"
  }
};

window.__sectionI18n = {
  zh: {
    news: [
      `<a href="https://pokerman8.github.io/SKEL-CF/">SKEL-CF: Coarse-to-Fine Biomechanical Skeleton and Surface Mesh Recovery</a> 已被 ECCV 2026 接收。`,
      `<a href="https://intellindust-ai-lab.github.io/projects/EdgeCrafter/">EdgeCrafter: Compact ViTs for Edge Dense Prediction via Task-Specialized Distillation</a> 现已发布于 arXiv。`,
      `两篇论文（<a href="https://intellindust-ai-lab.github.io/projects/FT-FSOD/">HED</a> 和 <a href="https://walker1126.github.io/MoVie-project/">MoVie</a>）已被 CVPR 2026 接收；<a href="https://arxiv.org/abs/2603.28182">HED</a> 与 <a href="https://intellindust-ai-lab.github.io/projects/SUREPlus/">SURE+</a> 现已发布于 arXiv。`,
      `<a href="https://intellindust-ai-lab.github.io/projects/FSOD-VFM/">FSOD-VFM</a> 已被 ICLR 2026 接收。`,
      `<a href="https://pokerman8.github.io/SKEL-CF/">SKEL-CF</a> 现已发布于 arXiv。`,
      `<a href="https://ocean146.github.io/SimROD2025/">SimROD: A Simple Baseline for Raw Object Detection with Global and Local Enhancements</a> 已被 AAAI 2026 接收。`,
      `<a href="https://nifangbaage.github.io/Explicit-Visual-Prompt/">Explicit visual prompting for universal foreground segmentations</a> 已被 TPAMI 接收。`,
      `<a href="https://intellindust-ai-lab.github.io/projects/DEIMv2/">DEIMv2: Real-Time Object Detection Meets DINOv3</a> 现已发布于 arXiv。`,
      `我们在 <a href="https://intellindust-ai-lab.github.io/#:~:text=Track%201%20Joint-,Denoising,-and%20Demosaicing%20challenge">NTIRE 联合去噪与去马赛克挑战赛</a>和 <a href="https://intellindust-ai-lab.github.io/#:~:text=Ball%20Action%20Spotting-,challenge,-CVsports%20Workshop%2C%20CVPR">SoccerNet 足球动作定位挑战赛</a>中均获第二名，并在 <a href="https://intellindust-ai-lab.github.io/#:~:text=Honorable%20Mention%20in-,Foundational,-Few%2DShot%20Object">CVPR 2025 基础少样本目标检测挑战赛</a>中获得荣誉提名。`,
      `<a href="https://www.shihuahuang.cn/DEIM/">DEIM: DETR with Improved Matching for Fast Convergence</a> 已被 CVPR 2025 接收。`,
      `<a href="https://www.nature.com/articles/s41565-024-01753-8">Designing nanotheranostics with machine learning</a> 已发表于 Nature Nanotechnology 2024。`,
      `基于我们的 CVPR 工作 <a href="https://yutingli0606.github.io/SURE/">SURE</a>，我们在 <a href="https://www.ood-cv.org/challenge.html">ECCV 2024 计算机视觉域外泛化研讨会</a>的开集识别挑战赛中获得第一名。`,
      `我们发布了 <a href="https://arxiv.org/abs/2409.07907">COCO-FP</a>，用于评估 COCO 目标检测器误检问题的数据集。`,
      `我们在 <a href="https://pbdl-ws.github.io/pbdl2024/">CVPR 2024 第四届物理视觉与深度学习研讨会</a>中获得低照度目标检测第一名和实例分割第三名。`,
      `两篇投稿全部被 CVPR 2024 接收，感谢所有合作者！`,
      `<a href="https://www.m-psi.fr/Papers/TokenCut2022/">TokenCut</a> 已被 TPAMI 接收。`,
      `三篇投稿全部被 CVPR 2023 接收，感谢所有合作者！`,
      `论文 <a href="https://sadtalker.github.io/">SadTalker: Learning Realistic 3D Motion Coefficients for Stylized Audio-Driven Single Image Talking Face Animation</a> 已发布于 arXiv。`,
      `<a href="https://www.m-psi.fr/Papers/TokenCut2022/">TokenCut</a> 已被 CVPR 2022 接收，并提供了 <a href="https://huggingface.co/spaces/akhaliq/TokenCut">Gradio 演示</a>。`,
      `论文 <a href="http://imagine.enpc.fr/~shenx/RANSAC-Flow/">RANSAC-Flow: generic two-stage image alignment</a> 已被 <a href="https://eccv2020.eu/">ECCV 2020</a> 接收。`
    ],
    awards: [
      `<b>🥇 第一名</b> — 开集识别挑战赛，<br><a href="https://www.ood-cv.org/challenge.html">ECCV 2024 计算机视觉域外泛化研讨会</a><br><small>（基于我们的 CVPR 工作 <a href="https://yutingli0606.github.io/SURE/">SURE</a>。）</small>`,
      `<b>🥇 第一名</b> — 低照度目标检测，<br><a href="https://pbdl-ws.github.io/pbdl2024/">CVPR 2024 第四届物理视觉与深度学习研讨会</a>`,
      `<b>🥉 第三名</b> — 低照度实例分割，<br><a href="https://pbdl-ws.github.io/pbdl2024/">CVPR 2024 第四届物理视觉与深度学习研讨会</a>`,
      `<b>🥈 第二名</b> — 联合去噪与去马赛克，<br><a href="https://cvlai.net/ntire/2025/">CVPR 2025 NTIRE 研讨会</a>`,
      `<b>🥈 第二名</b> — SoccerNet 足球动作定位，<br><a href="https://www.soccer-net.org/challenges/2025">CVPR 2025 SoccerNet 挑战赛</a>`,
      `<b>🎖️ 荣誉提名</b> — 基础少样本目标检测，<br><a href="https://www.soccer-net.org/challenges/2025">CVPR 2025 开放世界视觉感知研讨会</a>`,
      `<b>🌟 杰出审稿人</b>，<a href="https://icml.cc/">ICML 2022</a>`
    ]
  },
  fr: {
    news: [
      `<a href="https://pokerman8.github.io/SKEL-CF/">SKEL-CF: Coarse-to-Fine Biomechanical Skeleton and Surface Mesh Recovery</a> a été accepté à ECCV 2026.`,
      `<a href="https://intellindust-ai-lab.github.io/projects/EdgeCrafter/">EdgeCrafter: Compact ViTs for Edge Dense Prediction via Task-Specialized Distillation</a> est désormais disponible sur arXiv.`,
      `Deux articles, <a href="https://intellindust-ai-lab.github.io/projects/FT-FSOD/">HED</a> et <a href="https://walker1126.github.io/MoVie-project/">MoVie</a>, ont été acceptés à CVPR 2026 ; <a href="https://arxiv.org/abs/2603.28182">HED</a> et <a href="https://intellindust-ai-lab.github.io/projects/SUREPlus/">SURE+</a> sont désormais disponibles sur arXiv.`,
      `<a href="https://intellindust-ai-lab.github.io/projects/FSOD-VFM/">FSOD-VFM</a> a été accepté à ICLR 2026.`,
      `<a href="https://pokerman8.github.io/SKEL-CF/">SKEL-CF</a> est désormais disponible sur arXiv.`,
      `<a href="https://ocean146.github.io/SimROD2025/">SimROD: A Simple Baseline for Raw Object Detection with Global and Local Enhancements</a> a été accepté à AAAI 2026.`,
      `<a href="https://nifangbaage.github.io/Explicit-Visual-Prompt/">Explicit visual prompting for universal foreground segmentations</a> a été accepté dans TPAMI.`,
      `<a href="https://intellindust-ai-lab.github.io/projects/DEIMv2/">DEIMv2: Real-Time Object Detection Meets DINOv3</a> est désormais disponible sur arXiv.`,
      `Nous avons obtenu la <a href="https://intellindust-ai-lab.github.io/#:~:text=Track%201%20Joint-,Denoising,-and%20Demosaicing%20challenge">2e place au challenge NTIRE de débruitage et dématriçage conjoints</a>, la <a href="https://intellindust-ai-lab.github.io/#:~:text=Ball%20Action%20Spotting-,challenge,-CVsports%20Workshop%2C%20CVPR">2e place au challenge SoccerNet de détection d'actions de jeu</a>, ainsi qu'une <a href="https://intellindust-ai-lab.github.io/#:~:text=Honorable%20Mention%20in-,Foundational,-Few%2DShot%20Object">mention honorable au challenge CVPR 2025 de détection d'objets en régime few-shot</a>.`,
      `<a href="https://www.shihuahuang.cn/DEIM/">DEIM: DETR with Improved Matching for Fast Convergence</a> a été accepté à CVPR 2025.`,
      `<a href="https://www.nature.com/articles/s41565-024-01753-8">Designing nanotheranostics with machine learning</a> a été publié dans Nature Nanotechnology en 2024.`,
      `À partir de notre travail CVPR <a href="https://yutingli0606.github.io/SURE/">SURE</a>, nous avons remporté le challenge de reconnaissance en monde ouvert de l'<a href="https://www.ood-cv.org/challenge.html">atelier Out-of-Distribution Generalization in Computer Vision, ECCV 2024</a>.`,
      `Nous publions <a href="https://arxiv.org/abs/2409.07907">COCO-FP</a>, un jeu de données conçu pour évaluer les fausses détections des détecteurs entraînés sur COCO.`,
      `Nous avons obtenu la 1re place en détection d'objets en faible luminosité et la 3e place en segmentation d'instances lors du <a href="https://pbdl-ws.github.io/pbdl2024/">4e atelier Physics-Based Vision Meets Deep Learning, CVPR 2024</a>.`,
      `Nos deux articles soumis ont été acceptés à CVPR 2024. Merci à tous nos coauteurs !`,
      `<a href="https://www.m-psi.fr/Papers/TokenCut2022/">TokenCut</a> a été accepté dans TPAMI.`,
      `Nos trois articles soumis ont été acceptés à CVPR 2023. Merci à tous nos coauteurs !`,
      `L'article <a href="https://sadtalker.github.io/">SadTalker: Learning Realistic 3D Motion Coefficients for Stylized Audio-Driven Single Image Talking Face Animation</a> est disponible sur arXiv.`,
      `<a href="https://www.m-psi.fr/Papers/TokenCut2022/">TokenCut</a> a été accepté à CVPR 2022 ; une <a href="https://huggingface.co/spaces/akhaliq/TokenCut">démonstration Gradio</a> est également disponible.`,
      `L'article <a href="http://imagine.enpc.fr/~shenx/RANSAC-Flow/">RANSAC-Flow: generic two-stage image alignment</a> a été accepté à <a href="https://eccv2020.eu/">ECCV 2020</a>.`
    ],
    awards: [
      `<b>🥇 1re place</b> — Challenge de reconnaissance en monde ouvert,<br><a href="https://www.ood-cv.org/challenge.html">atelier Out-of-Distribution Generalization in Computer Vision, ECCV 2024</a><br><small>(À partir de notre travail CVPR <a href="https://yutingli0606.github.io/SURE/">SURE</a>.)</small>`,
      `<b>🥇 1re place</b> — Détection d'objets en faible luminosité,<br><a href="https://pbdl-ws.github.io/pbdl2024/">4e atelier Physics-Based Vision Meets Deep Learning, CVPR 2024</a>`,
      `<b>🥉 3e place</b> — Segmentation d'instances en faible luminosité,<br><a href="https://pbdl-ws.github.io/pbdl2024/">4e atelier Physics-Based Vision Meets Deep Learning, CVPR 2024</a>`,
      `<b>🥈 2e place</b> — Débruitage et dématriçage conjoints,<br><a href="https://cvlai.net/ntire/2025/">atelier NTIRE, CVPR 2025</a>`,
      `<b>🥈 2e place</b> — Détection d'actions de jeu SoccerNet,<br><a href="https://www.soccer-net.org/challenges/2025">Challenges SoccerNet, CVPR 2025</a>`,
      `<b>🎖️ Mention honorable</b> — Détection d'objets en régime few-shot,<br><a href="https://www.soccer-net.org/challenges/2025">Visual Perception via Learning in an Open World, CVPR 2025</a>`,
      `<b>🌟 Évaluateur remarquable</b>, <a href="https://icml.cc/">ICML 2022</a>`
    ]
  }
};

var originalSectionHtml = {
  news: null,
  awards: null
};

function applySectionLanguage(lang) {
  var newsItems = Array.prototype.slice.call(document.querySelectorAll("#news .news-list li"));
  var awardItems = Array.prototype.slice.call(document.querySelectorAll("#awards .awards-list li"));
  if (!originalSectionHtml.news) {
    originalSectionHtml.news = newsItems.map(function (item) { return item.innerHTML; });
  }
  if (!originalSectionHtml.awards) {
    originalSectionHtml.awards = awardItems.map(function (item) { return item.innerHTML; });
  }

  var translated = window.__sectionI18n[lang];
  newsItems.forEach(function (item, index) {
    if (!translated || !translated.news[index]) {
      item.innerHTML = originalSectionHtml.news[index];
      return;
    }
    var date = item.querySelector("b");
    item.innerHTML = (date ? date.outerHTML + "&emsp;" : "") + translated.news[index];
  });
  awardItems.forEach(function (item, index) {
    item.innerHTML = translated && translated.awards[index]
      ? translated.awards[index]
      : originalSectionHtml.awards[index];
  });
}

window.__lang = "en";

function applyLanguage(lang, persist) {
  var t = window.__i18n[lang] || window.__i18n.en;
  window.__lang = lang;
  document.documentElement.lang = (lang === "zh") ? "zh" : ((lang === "fr") ? "fr" : "en");
  if (persist !== false) {
    localStorage.setItem("site_lang", window.__lang);
  }

  var map = {
    "chip-rtv": "real_time_vision",
    "chip-edge": "edge_vision",
    "chip-safety": "safety_ai",
    "label-clock": "lab_clock",
    "hero-kicker-text": "hero_kicker",
    "hero-role-text": "hero_role",
    "email-label": "email_label",
    "bio-1": "bio_1",
    "bio-2": "bio_2",
    "bio-3": "bio_3",
    "last-update-text": "last_update",
    "now-title-text": "now_title",
    "now-body-text": "now_body",
    "heading-news": "heading_news",
    "heading-awards": "heading_awards",
    "heading-research": "heading_research",
    "heading-misc": "heading_misc",
    "nav-news-label": "nav_news",
    "nav-research-label": "nav_research",
    "nav-awards-label": "nav_awards",
    "nav-misc-label": "nav_misc",
    "research-note": "research_note",
    "community-label": "community_label",
    "motion-label": "motion_label",
    "services-title": "services_title",
    "sports-title": "sports_title",
    "services-body": "services_body",
    "sports-body": "sports_body"
  };

  Object.keys(map).forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) {
      return;
    }
    var value = t[map[id]];
    if (typeof value === "string") {
      el.innerHTML = value;
    }
  });

  applySectionLanguage(lang);

  var btn = document.getElementById("myBtn");
  var more = document.getElementById("more");
  if (btn && more) {
    btn.innerHTML = (btn.getAttribute("aria-expanded") === "true") ? t.hide : t.show_more;
  }

  ["lang-en", "lang-zh", "lang-fr"].forEach(function (id) {
    var b = document.getElementById(id);
    if (b) {
      var active = id === ("lang-" + lang);
      b.classList.toggle("active", active);
      b.setAttribute("aria-pressed", String(active));
    }
  });
}

async function detectLangByIp() {
  var controller = ("AbortController" in window) ? new AbortController() : null;
  var timeout = controller ? setTimeout(function () { controller.abort(); }, 1600) : null;
  try {
    var response = await fetch("https://ipapi.co/json/", {
      cache: "no-store",
      signal: controller ? controller.signal : undefined
    });
    if (!response.ok) {
      return "en";
    }
    var data = await response.json();
    var cc = (data && data.country_code) ? String(data.country_code).toUpperCase() : "";
    if (cc === "CN") {
      return "zh";
    }
    var frenchCountries = new Set([
      "FR", "BE", "CH", "LU", "MC", "CA", "SN", "CI", "CM", "CD", "CG", "BJ", "BF",
      "BI", "CF", "TD", "DJ", "GA", "GN", "HT", "KM", "MG", "ML", "NE", "RW", "TG",
      "VU", "GQ"
    ]);
    if (frenchCountries.has(cc)) {
      return "fr";
    }
  } catch (error) {
    return "en";
  } finally {
    if (timeout) {
      clearTimeout(timeout);
    }
  }
  return "en";
}

function extractGitHubRepo(url) {
  if (!url) {
    return null;
  }
  var m = String(url).match(/^https?:\/\/github\.com\/([^\/]+\/[^\/?#]+)/i);
  if (!m || !m[1]) {
    return null;
  }
  return m[1].replace(/\.git$/i, "");
}

function hydrateGitHubStars() {
  var links = Array.prototype.slice.call(document.querySelectorAll("a.github-button[data-show-count=\"true\"]"));
  if (!links.length) {
    return;
  }

  function formatCompactStar(count) {
    if (typeof count !== "number" || !isFinite(count) || count < 0) {
      return null;
    }
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (count >= 1000) {
      return (count / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return String(count);
  }

  function setStarDisplay(link, value, rawCount) {
    link.innerHTML = "<span class=\"star-label\">Star</span><span class=\"star-value\">" + value + "</span>";
    link.dataset.stars = String(rawCount);
    link.setAttribute("aria-label", rawCount + " GitHub stars");
  }

  links.forEach(function (link) {
    var embeddedCount = Number(link.dataset.stars);
    if (link.querySelector(".star-value") && isFinite(embeddedCount)) {
      link.setAttribute("aria-label", embeddedCount + " GitHub stars");
    } else {
      link.innerHTML = "<span class=\"star-label\">GitHub</span>";
    }
  });

  fetch("data/github-stats.json", { cache: "no-cache" })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("GitHub statistics are unavailable");
      }
      return response.json();
    })
    .then(function (stats) {
      var repos = stats && stats.repos ? stats.repos : {};
      links.forEach(function (link) {
        var repo = extractGitHubRepo(link.getAttribute("href"));
        var entry = repo ? repos[repo.toLowerCase()] : null;
        var value = entry ? formatCompactStar(entry.stars) : null;
        if (value !== null) {
          setStarDisplay(link, value, entry.stars);
        }
      });
    })
    .catch(function () {
      // The repository link remains useful when a count is unavailable.
    });
}
function activatePageMotion() {
  var animatedItems = document.querySelectorAll(".hero-section, .content-section, #publication-list tr");
  if (!("IntersectionObserver" in window)) {
    animatedItems.forEach(function (item) { item.classList.add("in-view"); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06, rootMargin: "0px 0px -24px 0px" });

  animatedItems.forEach(function (item) {
    item.classList.add("fade-reveal");
    observer.observe(item);
  });
}

function preparePublications() {
  var table = document.getElementById("publication-list");
  if (!table) {
    return;
  }
  var rows = Array.prototype.slice.call(table.querySelectorAll(":scope > tbody > tr"));
  rows.forEach(function (row) {
    row.classList.add("publication-card");
    var title = row.querySelector(".paper-title");
    var image = row.querySelector("img");
    if (title && title.parentElement && title.parentElement.tagName === "A") {
      title.parentElement.classList.add("publication-title-link");
    }
    row.querySelectorAll("a").forEach(function (link) {
      var label = link.textContent.trim();
      if (/^\[.+\]$/.test(label)) {
        link.classList.add("publication-action");
        link.textContent = label.slice(1, -1);
      }
    });
    if (image) {
      image.loading = "lazy";
      image.decoding = "async";
      if (!image.alt || image.alt === "Research publication preview") {
        image.alt = title ? title.textContent.trim() + " preview" : "Research project preview";
      }
    }
  });
}

function activateSectionNavigation() {
  var links = Array.prototype.slice.call(document.querySelectorAll(".site-nav a[href^=\"#\"]"));
  var sections = Array.prototype.slice.call(document.querySelectorAll("[data-nav-section]"));
  if (!("IntersectionObserver" in window) || !links.length || !sections.length) {
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        return;
      }
      links.forEach(function (link) {
        link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
      });
    });
  }, { rootMargin: "-25% 0px -65% 0px" });
  sections.forEach(function (section) { observer.observe(section); });
}

function activatePointerEffects() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  var framePending = false;
  var pointerX = 0;
  var pointerY = 0;
  window.addEventListener("pointermove", function (event) {
    pointerX = event.clientX;
    pointerY = event.clientY;
    document.body.classList.add("pointer-active");
    var card = event.target && event.target.closest
      ? event.target.closest("#publication-list > tbody > tr")
      : null;
    if (card) {
      var rect = card.getBoundingClientRect();
      card.style.setProperty("--card-x", event.clientX - rect.left + "px");
      card.style.setProperty("--card-y", event.clientY - rect.top + "px");
    }
    if (framePending) {
      return;
    }
    framePending = true;
    requestAnimationFrame(function () {
      document.body.style.setProperty("--pointer-x", pointerX + "px");
      document.body.style.setProperty("--pointer-y", pointerY + "px");
      framePending = false;
    });
  }, { passive: true });

  document.documentElement.addEventListener("mouseleave", function () {
    document.body.classList.remove("pointer-active");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var savedLang = localStorage.getItem("site_lang");
  if (savedLang && window.__i18n[savedLang]) {
    applyLanguage(savedLang, true);
  } else {
    var browserLang = String((navigator.languages && navigator.languages[0]) || navigator.language || "en").toLowerCase();
    if (browserLang.indexOf("zh") === 0) {
      applyLanguage("zh", false);
    } else if (browserLang.indexOf("fr") === 0) {
      applyLanguage("fr", false);
    } else {
      applyLanguage("en", false);
      detectLangByIp().then(function (lang) {
        if (lang !== "en") {
          applyLanguage(lang, false);
        }
      });
    }
  }
  var enBtn = document.getElementById("lang-en");
  var zhBtn = document.getElementById("lang-zh");
  var frBtn = document.getElementById("lang-fr");
  if (enBtn) enBtn.addEventListener("click", function () { applyLanguage("en", true); });
  if (zhBtn) zhBtn.addEventListener("click", function () { applyLanguage("zh", true); });
  if (frBtn) frBtn.addEventListener("click", function () { applyLanguage("fr", true); });

  activatePageMotion();
  preparePublications();
  activateSectionNavigation();
  activatePointerEffects();
  hydrateGitHubStars();
});
