# Advait Jishnani - Personal Portfolio

A production-ready portfolio showcasing software engineering, data engineering, backend systems, and applied AI work.

Live site: [https://advaitnaresh.github.io](https://advaitnaresh.github.io)

## Tech Stack
- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript
- Lenis (Smooth Scrolling)

## Local Development

Install dependencies:
```bash
npm ci
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production Build

To create an optimized production build:
```bash
npm run build
```

The static export is written to `out/`.

## Deployment

GitHub Actions deploys the static export to GitHub Pages whenever a commit is pushed to `main`. The workflow is defined in `.github/workflows/deploy-pages.yml`.

In the repository settings, configure **Pages → Build and deployment → Source** to **GitHub Actions**.

## Content

Portfolio content is maintained in `src/lib/data.ts`.

- To update jobs, edit `EXPERIENCE` in `src/lib/data.ts`.
- To update projects, edit `PROJECTS` in `src/lib/data.ts`.
- Resume downloads are served directly from `public/resume.pdf`. Ensure `public/resume.pdf` is replaced whenever your resume changes.

## Assets

- Browser-ready images: `public/photos/`
- Browser-ready videos: `public/videos/`
- Resume: `public/resume.pdf`

Raw source media and local processing tools are kept under `extra/` and intentionally excluded from Git.
