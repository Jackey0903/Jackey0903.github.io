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
        summary:
          "A multi-agent pipeline that compresses papers into editable, print-ready posters through capacity-aware slots and bounded quality repair. 81.3% print-ready rate across 621 papers at about $0.38 per poster.",
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
        summary:
          "Audio-visual segmentation leans on static visual saliency, so a silent guitar on a poster can outvote the one actually being played. KEVA makes audio interrogate the motion field before it is allowed to drive segmentation, and keeps the appearance prior when a source barely moves.",
        links: [
          { label: "Code", href: "https://github.com/Jackey0903/SKA-VCT" },
        ],
        image: {
          src: "/assets/keva-framework.jpg",
          thumb: "/assets/thumbs/keva-framework.jpg",
          alt: "KEVA architecture: spectral-kinematic alignment, motion-prompted queries, boundary refinement",
        },
      },
      {
        title:
          "To Think or Not to Think: Pre-Decisional Reasoning Budgets for Referring Audio-Visual Segmentation",
        venue: "Under review - code released",
        href: "https://github.com/Jackey0903/To-Think-or-Not-to-Think",
        summary:
          "Longer chain-of-thought is not uniformly better - forcing it on an already-clear query is an overthinking trap. The state a model holds just before its first reasoning token turns out to encode whether reasoning will help, so the budget can be routed before any reasoning is generated.",
        links: [
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
];
