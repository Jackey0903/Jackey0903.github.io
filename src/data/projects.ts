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
    title: "Paper2Poster",
    subtitle: "Multi-agent paper-to-poster generation",
    role: "AI research tooling",
    period: "2026",
    status: "Working prototype",
    summary:
      "A multi-agent pipeline that turns research papers into editable PowerPoint posters through parsing, curation, layout planning, visual review, and rendering.",
    tags: ["Agents", "Scientific Communication", "PPTX"],
    highlights: [
      "Runs a PDF-to-PPTX workflow with layout and visual legibility checks.",
      "Uses template-aware planning, deterministic refinement, and reviewer loops.",
      "Treats poster generation as an inspectable research communication process.",
    ],
    repo: "https://github.com/Jackey0903/paper2poster",
    visual: {
      src: "/assets/paper2poster-thumb.png",
      alt: "Paper2Poster generated academic poster template previews",
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
