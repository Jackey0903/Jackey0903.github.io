# Haojie Hu — Personal Website

Astro-powered academic homepage for Haojie Hu (胡浩杰), a one-to-one port of the
AcadHomepage layout: sticky sidebar, then About / Education / News /
Publications / Projects / Honors on a single page.

## Structure

```
src/
  data/            # all content lives here — edit these, not the templates
    site.ts          identity, bio, affiliations, contact links
    profile.ts       education, research interests, honours
    news.ts          dated news items
    publications.ts  papers, grouped by section
    projects.ts      project entries
  components/      # Masthead, Sidebar, Entry, Icon
  layouts/         # BaseLayout — head tags and page shell
  pages/           # index only
  styles/          # global.css — the ported stylesheet
public/assets/     # portrait, figures, and 528px thumbnails
```

To add a paper, append to `src/data/publications.ts`. Put the preview image in
`public/assets/` and a 528px-wide JPEG in `public/assets/thumbs/`; entries
render at 176×108 and link to the full-size file.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Pushing to `main` builds and deploys via GitHub Actions.
