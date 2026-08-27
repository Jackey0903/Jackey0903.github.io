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
  summary?: string;
  links?: EntryLink[];
  image?: { src: string; alt: string; thumb?: string };
  /** Short label shown when no preview image exists. */
  placeholder?: string;
};

export type PublicationGroup = {
  heading: string;
  entries: Publication[];
};

export const publicationGroups: PublicationGroup[] = [
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
    heading: "Work in Progress",
    entries: [
      {
        title:
          "SKA-VCT: Listening to the Motion - Spectral-Kinematic Alignment for Audio-Visual Segmentation",
        venue: "Manuscript in preparation",
        href: "https://github.com/Jackey0903/SKA-VCT",
        summary:
          "Audio-visual segmentation mistakes visually salient but silent objects for sounding ones. We let audio retrieve motion evidence through spectral-kinematic alignment, then use that prior to steer object queries.",
        links: [
          { label: "Code", href: "https://github.com/Jackey0903/SKA-VCT" },
        ],
        image: {
          src: "/assets/covers/ska-vct.svg",
          alt: "Audio spectrum bars with a motion-aligned band picked out",
        },
      },
      {
        title:
          "To Think or Not to Think: Pre-Decisional Reasoning Budgets for Referring Audio-Visual Segmentation",
        venue: "Ongoing study - code released",
        href: "https://github.com/Jackey0903/To-Think-or-Not-to-Think",
        summary:
          "Longer reasoning is not automatically better. A reproducible Think-Ground-Segment pipeline compares zero, short, and long reasoning budgets before grounding, and ties each budget to the failure modes it causes.",
        links: [
          {
            label: "Code",
            href: "https://github.com/Jackey0903/To-Think-or-Not-to-Think",
          },
        ],
        image: {
          src: "/assets/covers/ref-avs.svg",
          alt: "Three reasoning tracks of increasing length aimed at one target",
        },
      },
    ],
  },
];
