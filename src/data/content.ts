/**
 * SINGLE SOURCE OF TRUTH for all CV / portfolio content.
 *
 * Both the website (terminal theme) and the generated CV.pdf read from this file,
 * so they can never drift apart. To update the site, edit the values here.
 */

export interface SocialLink {
  label: string;
  url: string;
  icon: "email" | "linkedin" | "github" | "instagram" | "orcid" | "scholar" | "x" | "web";
}

export interface SkillGroup {
  title: string;
  badge: string;
  items: string[];
}

export interface Project {
  name: string;
  role: string;
  blurb: string;
  description: string;
  stack: string[];
  highlights: string[];
  status: string;
  links: { label: string; url: string }[];
  image?: string;
}

export interface ExperienceItem {
  title: string;
  org: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface EsportsItem {
  game: string;
  region: string;
  team: string;
  role: string;
  years: string;
  achievements: string[];
}

export interface Publication {
  title: string;
  venue: string;
  year: string;
  doi?: string;
  url?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  start: string;
  end: string;
  details?: string[];
}

export interface Content {
  meta: {
    fullName: string;
    handle: string;
    tagline: string;
    description: string;
    keywords: string[];
    siteUrl: string;
  };
  media: {
    profilePhoto: string;
    heroPhoto: string;
    esportsTrophy: string;
    esportsCandid: string;
    teamLogo: string;
    qr: string;
  };
  quickLinks: { label: string; desc: string; url: string; tag: string }[];
  awards: { title: string; issuer: string; year: string; detail: string }[];
  hero: {
    displayName: string;
    roles: string[];
    valueProposition: string;
    location: string;
    availability: string;
  };
  about: {
    summary: string;
    languages: { name: string; level: string }[];
    yearsExperience: string;
  };
  skills: SkillGroup[];
  projects: Project[];
  experience: ExperienceItem[];
  esports: EsportsItem[];
  research: {
    interests: string[];
    phd: { topic: string; institution: string; field: string; expectedYear: string };
    publications: Publication[];
    orcid: string;
    scholar?: string;
    theses: { degree: string; title: string }[];
  };
  education: EducationItem[];
  certifications: { name: string; issuer: string; year: string }[];
  contact: {
    email: string;
    location: string;
    timezone: string;
    availability: string;
    socials: SocialLink[];
  };
}

export const content: Content = {
  meta: {
    fullName: "Ekasith Kowcharoen",
    handle: "kowz",
    tagline: "Civil Engineer × Digital-Twin & AI Developer × Researcher",
    description:
      "Ekasith Kowcharoen (Kowz) — civil engineer, digital-twin & AI developer, and PhD researcher in Bangkok. Published in MDPI Buildings; former national Blade & Soul esports champion. Open to consulting and new opportunities.",
    keywords: [
      "Ekasith Kowcharoen",
      "Ekasith K",
      "Kowz",
      "Civil Engineer",
      "Construction Management",
      "Digital Twin",
      "AI Developer",
      "Computer Vision",
      "YOLO",
      "PhD Researcher",
      "Kasetsart University",
      "Blade and Soul",
      "Esports",
      "Bangkok",
      "Thailand",
    ],
    siteUrl: "https://ekasithk.com",
  },
  media: {
    profilePhoto: "/img/ekasith2.jpg",
    heroPhoto: "/img/ekasith3.jpg",
    esportsTrophy: "/img/esport.jpg",
    esportsCandid: "/img/ekasith1.jpg",
    teamLogo: "/img/200iq.png",
    qr: "/img/qr-ekasithk.png",
  },
  quickLinks: [
    {
      label: "Digital Twin Dashboard",
      desc: "Interactive demo · EGAT substation monitoring",
      url: "https://dt-demo.ekasithk.com",
      tag: "demo",
    },
    {
      label: "Airport AI",
      desc: "Passenger forecasting + security RAG · live demo",
      url: "https://airport.ekasithk.com",
      tag: "demo",
    },
    {
      label: "Research Paper",
      desc: "ESPCN-YOLO · MDPI Buildings (2025)",
      url: "https://www.mdpi.com/2075-5309/15/10/1609",
      tag: "paper",
    },
    {
      label: "Pixel Trading Office",
      desc: "AI-agent trading system — coming soon",
      url: "",
      tag: "wip",
    },
    {
      label: "RoadProof / $PAVE",
      desc: "AI-validated road-hazard network — concept demo",
      url: "https://pave.ekasithk.com",
      tag: "wip",
    },
    {
      label: "GitHub",
      desc: "Code, projects & experiments",
      url: "https://github.com/EkasithK",
      tag: "code",
    },
  ],
  awards: [
    {
      title: "2nd Place — Construction Innovation Challenge (Season II)",
      issuer: "Sino-Thai Engineering & Construction (STECON)",
      year: "2024",
      detail:
        "Competed solo against teams of 5–8 members, representing Kasetsart University — placing 2nd nationally. Awarded ฿100,000 (team prize) plus ฿50,000 to the university.",
    },
  ],
  hero: {
    displayName: "Ekasith Kowcharoen",
    roles: [
      "Civil Engineer",
      "Digital-Twin & AI Developer",
      "PhD Researcher",
      "National Esports Champion",
    ],
    valueProposition:
      "I build AI-driven digital twins for critical infrastructure — pairing a civil-engineering foundation with full-stack software and peer-reviewed computer-vision research.",
    location: "Bangkok, Thailand",
    availability: "Open to consulting & new opportunities",
  },
  about: {
    summary:
      "Ekasith Kowcharoen (“Kowz”) is a civil engineer specialising in construction management and a developer focused on digital twins and applied AI. He completed his M.Eng at Kasetsart University — publishing peer-reviewed research in MDPI Buildings on computer-vision PPE detection — and is now a PhD candidate continuing that work. Today he leads the platform, AI, and project-management effort on a Digital Twin study of EGAT’s high-voltage substations. Before tech, he was a national Blade & Soul esports champion (Team 200IQ), and he brings that same competitive discipline to engineering.",
    languages: [
      { name: "Thai", level: "Native" },
      { name: "English", level: "Professional" },
    ],
    yearsExperience: "Research & development since 2024",
  },
  skills: [
    {
      title: "Software / Development",
      badge: "💻",
      items: [
        "Python",
        "TypeScript",
        "FastAPI",
        "Next.js",
        "React",
        "SQLAlchemy",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "PyTorch",
        "Computer Vision (YOLO)",
        "Docker",
        "CI/CD",
        "AWS",
        "Cloudflare",
        "Terraform",
      ],
    },
    {
      title: "Civil Engineering",
      badge: "🏗️",
      items: [
        "Construction Management",
        "Project Management",
        "Asset-Lifecycle Management",
        "Digital-Twin Modelling",
        "High-Voltage Substation Systems",
        "Data Interoperability",
      ],
    },
    {
      title: "Research",
      badge: "🔬",
      items: [
        "Computer Vision",
        "Deep Learning (YOLO / ESPCN)",
        "Image Super-Resolution",
        "Academic Writing & Peer Review",
        "Data Analysis",
        "Experimental Design",
      ],
    },
    {
      title: "Esports / Soft Skills",
      badge: "🎮",
      items: [
        "Team Leadership",
        "Team Management",
        "Competitive Strategy",
        "Performance Under Pressure",
        "Communication",
      ],
    },
  ],
  projects: [
    {
      name: "EGAT Digital Twin — High-Voltage Substations",
      role: "Researcher · Platform, AI & Project Management",
      blurb:
        "A digital-twin study for EGAT evaluating asset-lifecycle data interoperability with commercial DT platforms across high-voltage substations.",
      description:
        "Research project for the Electricity Generating Authority of Thailand (EGAT): “A Study on Data Interoperability Across the Asset Lifecycle with Commercial Digital Twin Platforms: A Case Study of High-Voltage Substations (DG–GEN, DG–TRN).” I lead the digital-twin platform build, AI integration, and project management/delivery.",
      stack: ["Python", "FastAPI", "Next.js", "Digital Twin", "AI / ML", "PostgreSQL"],
      highlights: [
        "Interactive demo dashboard at dt-demo.ekasithk.com",
        "End-to-end asset-lifecycle data interoperability study",
        "Case study: high-voltage substations (DG–GEN, DG–TRN)",
      ],
      status: "in-progress",
      links: [{ label: "Live Demo", url: "https://dt-demo.ekasithk.com" }],
    },
    {
      name: "Airport AI — Forecasting & Security Assistant",
      role: "Creator · Full-stack, AI & Data",
      blurb:
        "Two operations-AI systems for airports: a passenger-throughput forecaster and a retrieval-augmented security assistant, with a live departures-board demo.",
      description:
        "A self-directed build exploring practical AI for airport operations. The first system forecasts daily passenger throughput (a seasonal baseline, a LightGBM model, and a flight-schedule leading indicator that compete on a walk-forward backtest, with the winner served) and turns it into an hour-by-hour checkpoint wait-time and lanes-needed plan. The second is a RAG chatbot that answers airport-security questions only from a cited document index — refusing when an answer isn't grounded — and replies in the asker's language. Modelled on public TSA throughput data at single-hub scale; provider-agnostic LLM (local Ollama for dev, Claude on AWS Bedrock for production).",
      stack: ["Python", "FastAPI", "LightGBM", "RAG", "pgvector", "Next.js", "AWS Bedrock"],
      highlights: [
        "Live departures-board (FIDS) demo at airport.ekasithk.com",
        "Backtested forecaster that auto-serves the champion model",
        "Grounded, cited, multi-language RAG — refuses when unsure",
      ],
      status: "in-progress",
      links: [{ label: "Live Demo", url: "https://airport.ekasithk.com" }],
    },
    {
      name: "RoadProof / $PAVE",
      role: "Creator · Product, Tokenomics & AI",
      blurb:
        "A crowd-sourced, AI-validated road-hazard network: drivers' phones detect potholes; cities get a trustworthy repair map. (In development.)",
      description:
        "A mobile DePIN concept on Solana. Drivers' accelerometer + GPS detect road hazards, an AI layer validates the data and filters out spoofers, and cities/insurers pay for a ranked repair map. I built a blockchain from scratch to learn the fundamentals, designed the tokenomics and threat model, and shipped an interactive concept demo. A research/build project — not a token sale.",
      stack: ["Solana", "Python", "AI / ML", "Next.js", "DePIN"],
      highlights: [
        "Interactive concept demo at pave.ekasithk.com",
        "AI-validated data — a 'confirmation over trust' design",
        "Fair-launch, utility-first tokenomics",
      ],
      status: "in-progress",
      links: [{ label: "Concept Site", url: "https://pave.ekasithk.com" }],
    },
    {
      name: "Pixel Trading Office",
      role: "Creator",
      blurb: "An experimental 8-bit office staffed by autonomous AI trading agents. (Early development.)",
      description:
        "A personal R&D project — a pixel-art office where autonomous AI agents research and trade. Currently in early development; details to follow as it matures.",
      stack: ["Python", "AI Agents"],
      highlights: [],
      status: "in-progress",
      links: [],
    },
  ],
  experience: [
    {
      title: "Researcher",
      org: "Kasetsart University — EGAT Digital Twin Project",
      location: "Bangkok, Thailand",
      start: "2024",
      end: "Present",
      bullets: [
        "Lead the end-to-end build of a digital-twin platform for EGAT high-voltage substations — architecture, AI integration, and delivery.",
        "Designed and shipped the monitoring dashboard (public demo: dt-demo.ekasithk.com), unifying asset-lifecycle data across sources.",
        "Drive the study of data interoperability between full asset-lifecycle data and commercial digital-twin platforms (DG–GEN, DG–TRN case studies).",
        "Authored a peer-reviewed paper in MDPI Buildings (2025) on computer-vision PPE detection for construction safety.",
      ],
    },
  ],
  esports: [
    {
      game: "Blade & Soul",
      region: "Thailand",
      team: "200IQ",
      role: "Player & Team Manager",
      years: "2017 – 2019",
      achievements: [
        "BSTC 2017 Champion (Team Natural Selection) — swept the national grand final 5–0 (฿250,000) to represent Thailand at the World Championship.",
        "Blade & Soul World Championship 2017 (South Korea) — competed among 9 global regions as the Thai national champion.",
        "BSTC 2018 Champion (Team 200IQ) — defeated Goliath 6–2 (฿250,000), qualifying for the World Championship.",
        "Blade & Soul World Championship 2018 — 4th place worldwide.",
        "BSTC 2019 (Team QI002) — national competitor.",
        "Blade & Soul World Championship 2019 — represented Thailand on the global stage.",
      ],
    },
  ],
  research: {
    interests: [
      "Computer vision for construction safety",
      "Digital twins for infrastructure",
      "Deep learning & image super-resolution",
      "Asset-lifecycle data interoperability",
    ],
    phd: {
      topic: "Research in progress",
      institution: "Kasetsart University",
      field: "Civil Engineering — Construction Management",
      expectedYear: "TBD",
    },
    publications: [
      {
        title:
          "ESPCN-YOLO: A High-Accuracy Framework for Personal Protective Equipment Detection Under Low-Light and Small Object Conditions",
        venue: "Buildings (MDPI)",
        year: "2025",
        doi: "10.3390/buildings15101609",
        url: "https://www.mdpi.com/2075-5309/15/10/1609",
      },
    ],
    orcid: "0009-0007-9632-9167",
    scholar: "",
    theses: [
      {
        degree: "M.Eng",
        title:
          "ESPCN-YOLO: A High-Accuracy Framework for Personal Protective Equipment Detection Under Low-Light and Small Object Conditions",
      },
    ],
  },
  education: [
    {
      degree: "Ph.D.",
      field: "Civil Engineering — Construction Management",
      institution: "Kasetsart University",
      start: "2026",
      end: "Present",
      details: ["Doctoral research in progress."],
    },
    {
      degree: "M.Eng.",
      field: "Civil Engineering — Construction Management",
      institution: "Kasetsart University",
      start: "2024",
      end: "2025",
      details: [
        "Thesis: ESPCN-YOLO — PPE detection under low-light & small-object conditions.",
        "Published in MDPI Buildings (2025).",
      ],
    },
    {
      degree: "B.Eng.",
      field: "Civil Engineering",
      institution: "Kasetsart University",
      start: "2019",
      end: "2023",
      details: [],
    },
  ],
  certifications: [],
  contact: {
    email: "kowk42448@gmail.com",
    location: "Bangkok, Thailand",
    timezone: "GMT+7",
    availability: "Open to consulting & new opportunities",
    socials: [
      { label: "Email", url: "mailto:kowk42448@gmail.com", icon: "email" },
      { label: "Academic", url: "mailto:ekasith.ko@ku.th", icon: "email" },
      { label: "GitHub", url: "https://github.com/EkasithK", icon: "github" },
      { label: "Instagram", url: "https://www.instagram.com/ekasith.k/", icon: "instagram" },
      { label: "ORCID", url: "https://orcid.org/0009-0007-9632-9167", icon: "orcid" },
    ],
  },
};

/** ASCII-art name banner (ANSI Shadow figlet) used in the terminal hero. */
export const asciiBanner = String.raw`
██╗  ██╗ ██████╗ ██╗    ██╗███████╗
██║ ██╔╝██╔═══██╗██║    ██║╚══███╔╝
█████╔╝ ██║   ██║██║ █╗ ██║  ███╔╝
██╔═██╗ ██║   ██║██║███╗██║ ███╔╝
██║  ██╗╚██████╔╝╚███╔███╔╝███████╗
╚═╝  ╚═╝ ╚═════╝  ╚══╝╚══╝ ╚══════╝
`;
