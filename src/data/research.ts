export type ResearchThread = {
  title: string;
  eyebrow: string;
  problem: string;
  approach: string;
  status: string;
  tags: string[];
  link?: string;
};

export const researchThreads: ResearchThread[] = [
  {
    title: "Listening to the Motion",
    eyebrow: "Multimodal perception",
    problem:
      "Audio-visual segmentation often mistakes visually salient but silent objects for sounding objects.",
    approach:
      "Use spectral-kinematic alignment to make audio retrieve motion evidence, then use that prior to guide object queries.",
    status: "Paper metadata and full code release are being prepared.",
    tags: ["AVS", "Motion priors", "Physical consistency"],
    link: "https://github.com/Jackey0903/SKA-VCT",
  },
  {
    title: "Reasoning budget before grounding",
    eyebrow: "LLM reasoning",
    problem:
      "Long reasoning is not always helpful. Some referring expressions are clear, while others need careful object-aware reasoning.",
    approach:
      "Compare zero, short, and long reasoning modes before grounding and segmentation to study when extra reasoning helps or drifts.",
    status: "Reproducible codebase and documentation are available.",
    tags: ["Ref-AVS", "Reasoning budgets", "Failure analysis"],
    link: "https://github.com/Jackey0903/To-Think-or-Not-to-Think",
  },
  {
    title: "Research tools that can check themselves",
    eyebrow: "AI for research",
    problem:
      "Generative tools for scientific communication often stop at a first draft, even when the real work is revision.",
    approach:
      "Build agent pipelines with explicit parsing, curation, layout, rendering, review, and repair stages.",
    status: "Paper2Poster currently runs a PDF-to-editable-poster workflow with reviewer loops.",
    tags: ["Agents", "Posters", "Scientific workflow"],
    link: "https://github.com/Jackey0903/paper2poster",
  },
];
