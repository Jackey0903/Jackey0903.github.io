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
    highlight: "Listening to the Motion",
    body:
      "released - code and paper page for audio-conditioned kinematic verification in audio-visual segmentation.",
    href: "https://github.com/Jackey0903/SKA-VCT",
  },
  {
    date: "08/2026",
    highlight: "To Think or Not to Think",
    body:
      "released - paper page, results, and full reproduction docs for pre-decisional reasoning budgets in Ref-AVS.",
    href: "https://github.com/Jackey0903/To-Think-or-Not-to-Think",
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
    highlight: "VoxSprite",
    body:
      "released - turning any voice into a playable instrument with Web Audio, an ESP32-S3, physical keys, and reactive LEDs.",
    href: "https://github.com/Jackey0903/VoxSprite",
  },
];
