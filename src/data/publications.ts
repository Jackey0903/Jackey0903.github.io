export type EntryLink = {
  label: string;
  href: string;
};

export type Publication = {
  title: string;
  /** Rendered in order; entries matching `site.name` are emphasised. */
  authors?: string[];
  venue: string;
  href?: string;
  links?: EntryLink[];
  image?: { src: string; alt: string; thumb?: string };
};

export type PublicationGroup = {
  heading: string;
  entries: Publication[];
};

export const publicationGroups: PublicationGroup[] = [
  {
    heading: "Conference Papers",
    entries: [
      {
        title:
          "To Think or Not to Think: Pre-Decisional Reasoning Budgets for Referring Audio-Visual Segmentation",
        authors: [
          "Haojie Hu",
          "Senda Chen",
          "Ying Shen",
          "Lin Zhang",
        ],
        venue:
          "Advances in Neural Information Processing Systems (NeurIPS), 2026 · arXiv coming soon",
        href: "https://neurips.cc/virtual/2026/poster/148558",
        links: [
          {
            label: "Conference",
            href: "https://neurips.cc/virtual/2026/poster/148558",
          },
          {
            label: "Code",
            href: "https://github.com/Jackey0903/To-Think-or-Not-to-Think",
          },
        ],
        image: {
          src: "/assets/think-pipeline.jpg",
          thumb: "/assets/thumbs/think-pipeline.jpg",
          alt: "Pipeline routing each sample to zero, short, or long reasoning before grounding and segmentation",
        },
      },
    ],
  },
  {
    heading: "Preprints",
    entries: [
      {
        title:
          "PosterMELD: Multi-Agent Paper-to-Poster Generation for Controllable Design Diversity with Editable Print-Ready Outputs",
        authors: [
          "Haojie Hu",
          "Chenhao Dang",
          "Yaojia Liu",
          "Hengrui Kang",
          "Conghui He",
          "Weijia Li",
        ],
        venue: "arXiv:2608.02218",
        href: "https://arxiv.org/abs/2608.02218",
        links: [
          { label: "Paper", href: "https://arxiv.org/abs/2608.02218" },
          { label: "Code", href: "https://github.com/Jackey0903/PosterMELD" },
          { label: "Project", href: "https://jackey0903.github.io/PosterMELD/" },
        ],
        image: {
          src: "/assets/postermeld-teaser.png",
          thumb: "/assets/thumbs/postermeld-teaser.jpg",
          alt: "PosterMELD generated posters showing editable, print-ready layouts",
        },
      },
    ],
  },
  {
    heading: "Under Review",
    entries: [
      {
        title:
          "Listening to the Motion: Audio-Conditioned Kinematic Verification for Robust Audio-Visual Segmentation",
        venue: "Under review - code released",
        href: "https://github.com/Jackey0903/SKA-VCT",
        links: [
          { label: "Code", href: "https://github.com/Jackey0903/SKA-VCT" },
        ],
        image: {
          src: "/assets/keva-framework.jpg",
          thumb: "/assets/thumbs/keva-framework.jpg",
          alt: "KEVA architecture: spectral-kinematic alignment, motion-prompted queries, boundary refinement",
        },
      },
    ],
  },
];

export const publicationLegend = "* equal contribution, \u2020 corresponding author";
