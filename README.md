# Kihyun Yu

Personal academic homepage built with Next.js and Tailwind CSS.

## Content

- Home page content: `app/page.tsx` and `data/home/About.mdx`
- Site metadata and navigation: `data/website.config.ts`
- Publications: `data/publications/Publications.bib`
- CV: `cv.pdf`
- Profile image: `profile.jpg`

## Development

```bash
pnpm install
pnpm run dev
```

## Deployment

The GitHub Pages workflow builds the static site and copies `cv.pdf` to the exported site root.
