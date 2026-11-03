# Pankaj Yadav Portfolio

A premium single-page portfolio for a Senior SDET and QA Automation Engineer.

## Local setup

1. Install dependencies:
   npm install
2. Start the app:
   npm run dev
3. Build for production:
   npm run build

## Deployment notes

- Vite is configured for static hosting.
- For Netlify/Vercel/Cloudflare Pages, deploy the root folder as a static site and use the default Vite build output.
- This project is intentionally self-contained and does not require a backend.

## Resume

- The actual resume PDF is served from `public/Pankaj-Yadav-Resume.pdf`.
- The hero, navigation, and contact section download the file as `Pankaj-Yadav-Resume.pdf`.
- Replace this asset only with an updated, genuine resume PDF.
- The supplied personal portrait is used unchanged at `public/images/brand-logo.png` in the navigation and footer.

## Implementation notes

- The portfolio is structured as a single-page React + TypeScript app.
- Case study and framework explorer content is maintained in `src/data/caseStudies.ts`.
- Candidate skills, education, and the QA Engineering Playground remain in `src/data/content.ts`.
- The QA Engineering Playground is a demonstration-only simulation and is clearly labeled as such.
- Framework diagrams and inferred challenges are explicitly labeled illustrative; they do not claim to show proprietary employer implementations.

## Production considerations

- Replace the placeholder brand mark if a preferred image or favicon is provided.
- Confirm the final public LinkedIn URL and contact details before launch.

## Deployment

- `npm run build` creates the static site in `dist/`.
- Deploy `dist/` to Netlify, Vercel, Cloudflare Pages, or another static host.
- For GitHub Pages project sites, configure Vite's `base` to the repository path before deploying; the resume link should also be checked against the published base path.
