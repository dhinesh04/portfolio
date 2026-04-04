export const NAV_ITEMS = ["Experience", "Research", "Projects", "Skills", "Contact"];

export const EDUCATION = [
  {
    school: "The Ohio State University",
    degree: "M.S. Computer Science & Engineering",
    period: "Aug 2024 – May 2026",
    gpa: "3.62 / 4.0",
  },
  {
    school: "Coimbatore Institute of Technology",
    degree: "M.Sc. Decision & Computing Sciences (5-yr)",
    period: "Jul 2019 – May 2024",
    gpa: "3.55 / 4.0",
  },
];

export const EXPERIENCE = [
  {
    company: "EverWorker",
    location: "Greenwich, CT (Remote)",
    role: "AI Automation Engineer — Summer Intern",
    period: "May – Aug 2025",
    bullets: [
      "Automated employee onboarding with AI agents, cutting cycle time from 2 hours to ~10 minutes (90% faster), saving several hours/week.",
      "Integrated Microsoft Graph API to automate enterprise provisioning with OAuth2 auth and structured logging for production reliability.",
    ],
    tags: ["AI Agents", "Microsoft Graph API", "OAuth2", "Python"],
  },
  {
    company: "Nference Inc",
    location: "Coimbatore, India",
    role: "Software Engineer Intern (Co-op)",
    period: "Jul 2022 – Jun 2024",
    bullets: [
      "Improved reliability of a medical knowledge graph by implementing 7+ automated failure statistics across medical DBs.",
      "Primary engineer for Kubernetes crawling infrastructure — delivered ingestion pipeline for cellxgene (~250 studies) in the NferX platform.",
      "Automated PHI de-identification for NSights via GCP-based execution across academic medical centres.",
    ],
    tags: ["Kubernetes", "GCP", "Python", "Knowledge Graphs"],
  },
];

export const RESEARCH = [
  {
    org: "The Ohio State University",
    dept: "Dept. of Computer Science & Engineering",
    role: "M.S. Project Researcher",
    period: "Feb 2025 – Present",
    bullets: [
      "Developing a dual-head Graph Convolutional Network integrating four multi-omics modalities (CNA, mRNA, DNA methylation, clinical) via mRMR feature selection and survival-aware Similarity Network Fusion.",
      "Achieved AUC = 0.83 and C-index = 0.74 for glioblastoma survival prediction, outperforming all baselines — with direct implications for personalised treatment planning in oncology.",
    ],
    tags: ["GCN", "Multi-omics", "PyTorch", "Survival Analysis", "Healthcare AI"],
    link: "https://github.com/dhinesh04/gbm-survival-prediction"
  },
];

// status: "completed" | "in-progress"
// category: "Full-Stack" | "AI/ML"
export const PROJECTS = [
  {
    name: "Portfolio Website",
    period: "Mar 2026",
    desc: "Designed and built a personal portfolio website using React, featuring scroll-reveal animations, a contact form with EmailJS, and automated GitHub Pages deployment.",
    tags: ["React", "EmailJS", "GitHub Actions"],
    link: "https://github.com/dhinesh04/portfolio",
    status: "completed",
    category: "Full-Stack",
  },
  {
    name: "OSU Accessible Parking Tracker",
    period: "Oct 2025",
    desc: "Full-stack accessible-parking tracker built under a 24-hour hackathon sprint. React + Google Maps UI with live backend polling every 10 seconds. FastAPI + Supabase backend with an OpenCV/OCR pipeline to detect parking indicators from images.",
    tags: ["React", "FastAPI", "Supabase", "OpenCV", "Google Maps API"],
    link: "https://github.com/dhinesh04/accessiblity-parking-availability",
    status: "completed",
    category: "Full-Stack",
  },
  {
    name: "Early Detection of Depression via Reddit Posts",
    period: "Apr 2025",
    desc: "Linguistic feature analysis for eRisk 2025 Task 2 using TF-IDF & log-odds ratios. Benchmarked BERT, DeBERTa, PubMedBERT, and Longformer — Longformer achieved ~95.08% recall for depressed users.",
    tags: ["PyTorch", "Transformers", "NLP", "Longformer", "eRisk 2025"],
    link: "https://github.com/dhinesh04/early-depression-detection",
    status: "completed",
    category: "AI/ML",
  },
  // Add more projects here:
  // {
  //   name: "Your Project",
  //   period: "2025",
  //   desc: "Description.",
  //   tags: ["Tag1", "Tag2"],
  //   link: "#",
  //   status: "completed",     // or "in-progress"
  //   category: "Full-Stack",  // or "AI/ML"
  // },
];

export const SKILLS = [
  { group: "Languages",        items: ["Python", "C++", "JavaScript", "Go", "SQL", "Bash"] },
  { group: "Web & Frameworks", items: ["React", "TypeScript", "FastAPI", "Node.js", "Flask", "Django"] },
  { group: "ML / AI",          items: ["PyTorch", "Transformers", "scikit-learn", "NumPy", "Pandas", "OpenCV"] },
  { group: "Databases",        items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "ArangoDB"] },
  { group: "DevOps & Cloud",   items: ["Docker", "Kubernetes", "GCP", "AWS", "Git", "GitHub Actions"] },
];

export const CONTACT_LINKS = [
  { label: "Email",    value: "dhineshkumar4645@gmail.com",        href: "mailto:dhineshkumar4645@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/dhinesh-sivakumar", href: "https://linkedin.com/in/dhinesh-sivakumar" },
  { label: "Medium",   value: "medium.com/@dhinesh_sivakumar",     href: "https://medium.com/@dhinesh_sivakumar" },
  { label: "Location", value: "Columbus, OH",                      href: null },
];

export const QUICK_LINKS = [
  { label: "Download Resume", href: "https://drive.google.com/file/d/19rkXeZvQUAqvDaPhMqi7cLLv6nb2n-cv/view?usp=sharing" },
  { label: "GitHub Profile",  href: "https://github.com/dhinesh04" },
  { label: "LinkedIn",        href: "https://linkedin.com/in/dhinesh-sivakumar" },
  { label: "Medium Blog",     href: "https://medium.com/@dhinesh_sivakumar" },
];

export const FOOTER_LINKS = [
  { label: "GitHub",   href: "https://github.com/dhinesh04" },
  { label: "LinkedIn", href: "https://linkedin.com/in/dhinesh-sivakumar" },
  { label: "Medium",   href: "https://medium.com/@dhinesh_sivakumar" },
  { label: "Email",    href: "mailto:dhineshkumar4645@gmail.com" },
];