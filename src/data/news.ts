export type NewsItem = {
  date: string;
  /** Rendered before the body text in the template's red highlight style. */
  highlight?: string;
  body: string;
  href?: string;
};

export const news: NewsItem[] = [
  {
    date: "08/2026",
    highlight: "PosterMELD",
    body:
      "is on arXiv - a multi-agent paper-to-poster system with controllable design diversity and editable, print-ready outputs.",
    href: "https://arxiv.org/abs/2608.02218",
  },
  {
    date: "08/2026",
    highlight: "Auto-Connection",
    body:
      "released - a local-first workspace for tracking graduate-school opportunities, matching advisors, and drafting reviewed outreach.",
    href: "https://github.com/Jackey0903/Auto-Connection",
  },
  {
    date: "06/2026",
    highlight: "DraftCode",
    body:
      "placed third at the AWS Summit Shanghai hackathon and advanced to the Macau round.",
    href: "https://github.com/Jackey0903/draftcode",
  },
  {
    date: "05/2026",
    highlight: "To Think or Not to Think",
    body:
      "released - a reproducible pipeline for studying reasoning budgets before multimodal grounding and segmentation.",
    href: "https://github.com/Jackey0903/To-Think-or-Not-to-Think",
  },
  {
    date: "05/2026",
    highlight: "VoxSprite",
    body:
      "released - turning any voice into a playable instrument with Web Audio, an ESP32-S3, physical keys, and reactive LEDs.",
    href: "https://github.com/Jackey0903/VoxSprite",
  },
  {
    date: "02/2026",
    highlight: "SKA-VCT",
    body:
      "started - spectral-kinematic alignment and motion-guided queries for audio-visual segmentation.",
    href: "https://github.com/Jackey0903/SKA-VCT",
  },
];
