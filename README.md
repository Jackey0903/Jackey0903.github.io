# Haojie Hu — Personal Website

Astro-powered academic homepage for Haojie Hu, laid out as a single-page profile
(About / Education / News / Publications / Projects / Honors / Now) with a sticky
sidebar, plus deeper `Projects` and `Notes` pages.

## Structure

```
src/
  data/          # all content lives here — edit these, not the templates
    site.ts        identity, contact links, nav
    profile.ts     education, research interests, honors, skills
    news.ts        dated news items
    publications.ts papers, grouped by section
    projects.ts    project entries (also used by /projects/)
  components/    # Masthead, Sidebar, Entry, Icon, Footer
  layouts/       # BaseLayout — head tags, theme script, page shell
  pages/         # index, projects, notes
  styles/        # global.css — all styling, light + dark tokens
  content/notes/ # markdown notes
```

To add a paper, append to `src/data/publications.ts`. Preview thumbnails go in
`public/assets/` and render at 176×108; entries without an image fall back to a
labelled placeholder.

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
