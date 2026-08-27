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
    note: "Shanghai, China. GPA 4.79/5.00, ranked 6/191 (top 3%)",
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
  year?: string;
  title: string;
  detail?: string;
};

export const honors: Honor[] = [
  {
    title: "National Scholarship",
    detail: "Ministry of Education. Awarded to the top 1% of undergraduates.",
  },
  {
    title: "Qidi Scholarship",
    detail: "Top 1% of the cohort.",
  },
  {
    year: "2024",
    title: "First-Class Outstanding Student Scholarship",
    detail: "Top 5% of the cohort.",
  },
  {
    year: "2025",
    title: "Social Activity Scholarship",
  },
  {
    year: "2024, 2025",
    title: "Tongji University Outstanding Student",
  },
  {
    title: "Computer Science Youth Pioneer",
    detail: "One of ten students selected university-wide.",
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
