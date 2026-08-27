export type EducationEntry = {
  period: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  note?: string;
};

export const education: EducationEntry[] = [
  {
    period: "2023.09 - 2027.06 (expected)",
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
  year: string;
  title: string;
  detail?: string;
};

export const honors: Honor[] = [
  {
    year: "2026",
    title: "Third Place, AWS Summit Shanghai Hackathon",
    detail: "Advanced to the Macau round with DraftCode.",
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
