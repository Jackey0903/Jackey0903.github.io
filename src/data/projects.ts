import type { EntryLink } from "@data/publications";

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
  links?: EntryLink[];
  image?: { src: string; alt: string; thumb?: string };
  /** Short label shown when no preview image exists. */
  placeholder?: string;
};

export const projects: Project[] = [
  {
    title: "DraftCode: NBA Draft War Room",
    subtitle: "Three-signal NBA draft prediction with auditable agents",
    role: "AWS Summit Shanghai Hackathon",
    period: "2026",
    status: "Third place; advanced to the Macau round",
    summary:
      "An auditable NBA draft intelligence system that fuses talent, expert mock drafts, and market signals, then simulates 30 distinct GM decision styles over 1,500 Monte Carlo scenarios.",
    tags: ["Python", "AWS Serverless", "Multi-Agent Systems"],
    highlights: [
      "Runs 1,500 Monte Carlo draft scenarios to produce confidence-scored picks instead of one brittle ranking.",
      "Separates expensive LLM judgment from deterministic sampling through an LLM-once architecture.",
      "Maps the workflow to S3, Lambda, Step Functions, DynamoDB, and an evidence ledger for auditability.",
    ],
    repo: "https://github.com/Jackey0903/draftcode",
    image: {
      src: "/assets/draftcode-architecture.png",
      thumb: "/assets/thumbs/draftcode-architecture.jpg",
      alt: "DraftCode system architecture for the NBA draft prediction war room",
    },
  },
  {
    title: "VoxSprite",
    subtitle: "Turn any voice into a playable instrument",
    role: "Hardware and web project",
    period: "2026",
    status: "Released",
    summary:
      "A voice-sampling instrument that captures a sound, maps it across a keyboard, and plays it back through Web Audio with an ESP32-S3, physical keys, and reactive LEDs.",
    tags: ["TypeScript", "Web Audio", "ESP32-S3"],
    highlights: [
      "Records a voice sample in the browser and pitches it across a playable range.",
      "Bridges the web runtime to physical keys and LED feedback on an ESP32-S3.",
      "Built to keep the latency budget small enough to feel like an instrument.",
    ],
    repo: "https://github.com/Jackey0903/VoxSprite",
    image: {
      src: "/assets/voxsprite-app.png",
      thumb: "/assets/thumbs/voxsprite-app.jpg",
      alt: "VoxSprite desktop app: sprite roster, stage, and a Do-Re-Mi key row",
    },
  },
  {
    title: "Stardew-Valley",
    subtitle: "Playful systems coursework in Cocos2d-x",
    role: "Course project",
    period: "2024",
    status: "Completed coursework",
    summary:
      "A game systems project covering interaction loops, collision detection, inventory design, map scenes, and farming simulation mechanics.",
    tags: ["C++", "Cocos2d-x", "Game Systems"],
    highlights: [
      "Implemented map scenes, backpack logic, movement, and base simulation systems.",
      "Built with a small team and documented development logs across the semester.",
      "A good reminder that engineering can stay playful.",
    ],
    repo: "https://github.com/Jackey0903/Stardew-Valley",
    image: {
      src: "/assets/stardew-inventory.png",
      thumb: "/assets/thumbs/stardew-inventory.jpg",
      alt: "In-game inventory grid with tools and items beside the player sprite and stat bars",
    },
  },
];

export const featuredProjects = projects.slice(0, 3);
