# Portfolio Website — Purushothaman Boopathy Ethirajan

Modern, senior-level personal portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Content is stored in structured data files for easy editing and the site is configured for **static export** (ideal for free deployment on Vercel).

## Tech stack

- Next.js + App Router
- TypeScript
- Tailwind CSS
- `next-themes` for optional dark mode
- Framer Motion for subtle, professional animations

## Local setup

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm

### Install and run

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build (static export)

This project uses `output: "export"` in `next.config.mjs`, which generates a static site.

```bash
npm run build
```

The output will be in the `out/` directory.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repo in Vercel.
3. Use the default build settings (Vercel will run `npm run build`).

## Edit content

All portfolio content is stored in:

- `src/data/profile.ts` — hero, about, highlights, experience, skills, certifications, education, contact
- `src/data/site.ts` — SEO metadata, site URL, keywords

### Important

- **Set your real site URL** in `src/data/site.ts` (`site.url`) so `sitemap.xml` and Open Graph metadata are correct.

## Replace placeholders

- **Profile image**: replace `public/profile-placeholder.svg`
- **Resume**: replace `public/resume.pdf` (currently a small placeholder PDF)
- **Contact links**: update `profile.contact.buttons` in `src/data/profile.ts` (LinkedIn + email)

## Routes

- `/` Home
- `/experience`
- `/skills`
- `/certifications` (includes Education section)
- `/contact`

