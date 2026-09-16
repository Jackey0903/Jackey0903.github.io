export type EducationEntry = {
  period: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
};

export const education: EducationEntry[] = [
  {
    period: "2027.09 - Present",
    degree: "Jointly Trained Ph.D. Student",
    institution: "Shanghai Innovation Institute",
    institutionUrl: "https://www.sii.edu.cn/",
  },
  {
    period: "2027.09 - Present",
    degree: "Ph.D. Student",
    institution: "Shanghai Jiao Tong University",
    institutionUrl: "https://www.sjtu.edu.cn/",
  },
  {
    period: "2023.09 - 2027.06",
    degree: "B.Eng., Software Engineering",
    institution: "Tongji University",
    institutionUrl: "https://www.tongji.edu.cn/",
  },
];

/** Rendered inline in the About paragraph, in this order. */
export const interests = [
  "multimodal large language models",
  "video understanding",
  "video generation",
  "world models",
];

export type Honor = {
  /** Full award name. */
  title: string;
  /** Awarding body. */
  org?: string;
  /** Year, or comma-separated years. */
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
