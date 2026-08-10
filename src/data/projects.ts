export type Project = {
  title: string;
  subtitle: string;
  role: string;
  period: string;
  status: string;
  summary: string;
  tags: string[];
  highlights: string[];
  repo: string;
  visual?: {
    src: string;
    alt: string;
  };
};

export const projects: Project[] = [
  {
    title: "SKA-VCT: Listening to the Motion",
    subtitle: "Physical consistency for audio-visual segmentation",
    role: "Research project",
    period: "2026",
    status: "Paper coming soon; code under preparation",
    summary:
      "A research project on locating sounding objects by aligning audio spectra with motion evidence instead of trusting static visual saliency alone.",
    tags: ["Audio-Visual Segmentation", "Motion", "Multimodal Learning"],
    highlights: [
      "Uses spectral-kinematic alignment to retrieve sound-activated motion cues.",
      "Adds motion-prompted query generation to focus segmentation on genuine sounding objects.",
      "Targets false positives caused by salient but silent objects.",
    ],
    repo: "https://github.com/Jackey0903/SKA-VCT",
  },
  {
    title: "To Think or Not to Think",
    subtitle: "Pre-decisional reasoning budgets for Ref-AVS",
    role: "Research codebase",
    period: "2026",
    status: "Code released",
    summary:
      "A reproducible Think-Ground-Segment pipeline for comparing zero, short, and long reasoning before grounding referring audio-visual expressions.",
    tags: ["LLM Reasoning", "Interpretability", "Ref-AVS"],
    highlights: [
      "Frames reasoning length as a decision made before segmentation.",
      "Compares compact object descriptions against longer reasoning traces.",
      "Connects reasoning budget choices to segmentation behavior and failure modes.",
    ],
    repo: "https://github.com/Jackey0903/To-Think-or-Not-to-Think",
  },
  {
    title: "PosterMELD",
    subtitle: "Editable, diverse, print-ready paper-to-poster generation",
    role: "Research system",
    period: "2026",
    status: "Paper and code released",
    summary:
      "A multi-agent system that turns scientific papers into editable PowerPoint posters while controlling design diversity, content grounding, and print readiness.",
    tags: ["Multi-Agent Systems", "Scientific Communication", "PPTX"],
    highlights: [
      "Coordinates paper understanding, capacity-aware writing, layout, visual placement, and bounded quality repair.",
      "Keeps text, figures, tables, section bars, and logos editable across 24 poster templates.",
      "Evaluates end-to-end generation on 621 papers with print-readiness and visual-quality metrics.",
    ],
    repo: "https://github.com/Jackey0903/PosterMELD",
    visual: {
      src: "/assets/postermeld-teaser.png",
      alt: "PosterMELD comparison showing editable and compact generated posters",
    },
  },
  {
    title: "DraftCode: NBA Draft War Room",
    subtitle: "Three-signal NBA draft prediction with auditable agents",
    role: "AWS Hackathon",
    period: "2026",
    status: "3rd place; advanced to Macau",
    summary:
      "An auditable NBA draft intelligence system that combines talent, expert mock drafts, and market signals before simulating 30 distinct GM decision styles.",
    tags: ["Python", "AWS Serverless", "Multi-Agent Systems"],
    highlights: [
      "Runs 1,500 Monte Carlo draft scenarios to produce confidence-scored picks instead of one brittle ranking.",
      "Separates expensive LLM judgment from deterministic sampling through an LLM-once architecture.",
      "Maps the workflow to S3, Lambda, Step Functions, DynamoDB, and an evidence ledger for auditability.",
    ],
    repo: "https://github.com/Jackey0903/draftcode",
    visual: {
      src: "/assets/draftcode-architecture.png",
      alt: "DraftCode system architecture for the NBA draft prediction war room",
    },
  },
  {
    title: "Stardew-Valley",
    subtitle: "Playful systems coursework in Cocos2d-x",
    role: "Course project",
    period: "2024",
    status: "Completed coursework",
    summary:
      "A game systems project that helped me practice interaction loops, collision detection, inventory design, map scenes, and simulation mechanics.",
    tags: ["C++", "Cocos2d-x", "Game Systems"],
    highlights: [
      "Implemented map scenes, backpack logic, movement, and base simulation systems.",
      "Built with a small team and documented development logs across the semester.",
      "A good reminder that engineering can stay playful.",
    ],
    repo: "https://github.com/Jackey0903/Stardew-Valley",
  },
];

export const featuredProjects = projects.slice(0, 3);
