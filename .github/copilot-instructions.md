# Copilot instructions for `portfolio` repo

This file tells an AI coding assistant how this project is structured and what to do first to be productive.

- Big picture
  - Single-page React app built with Vite (`vite`, `@vitejs/plugin-react`). Entry is `index.html` -> `/src/main.jsx` -> `App.jsx`.
  - App is data-driven: `src/data/Data.js` contains the entire page content (title, infobox, sections, projects, image imports). UI components render that data; most changes to text/content should be made in `Data.js`.
  - Layout: `src/App.jsx` composes `Header`, `ContentsSidebar`, `InfoBox`, `AppearanceBox`, `Home` and `Footer`. `Home.jsx` iterates `Data.sections` to render sections and subsections.

- Important files and examples
  - `src/data/Data.js` — canonical content source. Example: sections are arrays of objects with keys like `id`, `title`, `paragraphs`, `list`, `experiences`, `subsections`.
  - `src/pages/Home.jsx` — shows rendering rules: education is detected by `list[0]?.degree`; projects are rendered when `section.id === "projects"` and `subsections` exist.
  - `src/components/AppearanceBox.jsx` — toggles body classes: `theme-light` / `theme-dark` and `text-small` / `text-standard` / `text-large`. Any CSS that depends on theme/text size relies on these body classes.
  - `src/components/ContentsSidebar.jsx` — builds the table-of-contents from `Data.sections`. Anchor links use `#${section.id}` so `id` must be unique.
  - `vite.config.js` — sets `base: '/portfolio/'`. This is required for correct asset paths when deploying to GitHub Pages. `package.json` `homepage` should match.
  - `package.json` — scripts: `dev` (vite), `build` (vite build), `preview` (vite preview), `lint` (eslint), `predeploy`/`deploy` (gh-pages).

- Project-specific conventions and gotchas
  - Data-driven edits: prefer editing `src/data/Data.js` for content changes rather than changing components.
  - Unique section IDs: `section.id` values are used as DOM `id` attributes and React keys. They must be unique across `Data.sections` and nested `subsections` (I observed two entries using the id `experience` — this will break anchors and keys; fix duplicates when adding entries).
  - Image handling: images are imported in `Data.js` (e.g., `import profileImage from "../assets/image.jpeg";`) so new images should be added to `src/assets` and imported from `Data.js`.
  - Presentation logic in `Home.jsx`: it branches on the presence of keys (`paragraphs`, `list`, `experiences`, `subsections`). When adding new structures follow the same shape.
  - Appearance classes are global: `AppearanceBox` mutates `document.body.classList`. When adding new theme/text variants, update `styles/wiki.css` and `src/index.css` accordingly.
  - ESLint is configured (see `package.json`). Run `npm run lint` and follow existing code style.

- Developer workflows (how to build/test/debug)
  - Install deps: `npm install`.
  - Local dev server with HMR: `npm run dev` (open http://localhost:5173 by default).
  - Build for production: `npm run build`.
  - Preview production bundle locally: `npm run preview`.
  - Deploy to GitHub Pages: `npm run deploy` (uses `gh-pages` and relies on `vite.config.js` `base` and `package.json` `homepage` being correct).
  - Lint: `npm run lint` (ESLint only; there are no test scripts configured).

- When making PRs / edits
  - Content changes: edit `src/data/Data.js` and verify `npm run dev` renders as expected (check anchors, images, and lists).
  - UI/behavior changes: edit or add components under `src/components` or pages under `src/pages`. Keep components small and focused as in existing examples.
  - Ensure unique `key` and `id` values when mapping arrays. Fix duplicate `id`/key issues before merging.
  - Run `npm run lint` before opening PR.

- Integration points / external deps
  - GitHub Pages: `gh-pages` (deploy script). `vite.config.js` base path + `package.json` homepage matter for correct URLs.
  - `react-icons` are used by `InfoBox.jsx`.
  - Tailwind-related packages are present (`tailwindcss`, `@tailwindcss/vite`) but the repo primarily uses a small custom `styles/wiki.css`. Be careful if switching to Tailwind utility classes — confirm tailwind config.

- Short checklist for an AI making edits
  1. Find the intent: content vs design vs new feature.
  2. If content: update `src/data/Data.js` only. Verify unique `id`s and image imports.
  3. If UI: create/modify files in `src/components` or `src/pages`. Mirror existing patterns (function components, named/default exports, CSS class names).
  4. Run `npm run dev` and visually inspect; run `npm run lint`.
  5. If changing asset paths / base URL, update `vite.config.js` `base` and `package.json` `homepage` consistently.

If anything above is unclear or you'd like me to include examples/snippets for common edits (e.g., "add a new project to the ML/AI subsection"), tell me which action you want and I'll add a short recipe. 
