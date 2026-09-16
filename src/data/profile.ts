export type EducationEntry = {
  period: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  /** Secondary affiliation, e.g. a joint-training institute. */
  joint?: { name: string; url?: string };
  note?: string;
};

export const education: EducationEntry[] = [
  {
    period: "2027.09 - Present",
    degree: "Ph.D. Student",
    institution: "Shanghai Jiao Tong University",
    institutionUrl: "https://www.sjtu.edu.cn/",
    joint: { name: "Shanghai Innovation Institute", url: "https://www.sii.edu.cn/" },
  },
  {
    period: "2023.09 - 2027.06",
    degree: "B.Eng., Software Engineering",
    institution: "Tongji University",
    institutionUrl: "https://www.tongji.edu.cn/",
    note: "Shanghai, China",
  },
];

export type Interest = {
  label: string;
  detail: string;
};

export const interests: Interest[] = [
  {
    label: "Multimodal perception",
    detail:
      "grounding objects and events across audio, vision, motion, and language.",
  },
  {
    label: "Reasoning behavior",
    detail:
      "understanding when longer reasoning helps a model and when it only creates drift.",
  },
  {
    label: "AI for research",
    detail:
      "inspectable agent workflows for reading, experimentation, and scientific communication.",
  },
];

export type Honor = {
  /** Full award name. */
  title: string;
  /** Awarding body. */
  org?: string;
  /** Year, or comma-separated years. Omit when unknown. */
  year?: string;
  kind: "scholarship" | "honor";
};

export const honors: Honor[] = [
  {
    title: "National Scholarship",
    org: "Ministry of Education of the People's Republic of China",
    year: "2025",
    kind: "scholarship",
  },
  {
    title: "Qidi Scholarship",
    org: "Tongji University",
    year: "2026",
    kind: "scholarship",
  },
  {
    title: "First-Class Outstanding Student Scholarship",
    org: "Tongji University",
    year: "2024",
    kind: "scholarship",
  },
  {
    title: "Social Activity Scholarship",
    org: "Tongji University",
    year: "2024, 2025",
    kind: "scholarship",
  },
  {
    title: "Outstanding Student",
    org: "Tongji University",
    year: "2024, 2025",
    kind: "honor",
  },
  {
    title: "Computer Science Youth Pioneer",
    org: "School of Computer Science and Technology, Tongji University",
    year: "2026",
    kind: "honor",
  },
];

export const skills = [
  "Python",
  "PyTorch",
  "C++",
  "TypeScript",
  "Computer Vision",
  "Multimodal Learning",
  "Multi-Agent Systems",
  "Research Tooling",
];
