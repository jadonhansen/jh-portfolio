# Jadon Hansen portfolio

A one-page portfolio site. It uses Next.js 16 with the App Router and a static export, SCSS with design tokens, and Motion (formerly Framer Motion) for scroll reveals.

## Scripts

- `npm run dev` starts the dev server on http://localhost:3000.
- `npm run build` writes the static site to `out/`.
- `npm run lint` runs ESLint with the Next.js core-web-vitals and TypeScript configs.

## Where things live

- `src/data/site.ts` is the single content source. It holds the profile, projects, links, navigation and gallery. Edit content here, not in the components.
- `src/styles/tokens.scss` defines the design tokens: color, type, spacing, radius, motion and layering. Components read these CSS custom properties.
- `src/components/` holds one folder per component, with an `index.tsx` and, if it has styles, an `index.scss`.
- `src/app/` holds the root layout, the page, global styles, the web manifest and `robots.txt`.
- `src/assets/` holds the images and the SF Pro Display font files.

## Deploy

Run `npm run build`, then serve the `out/` folder from any static host. The site needs no Node.js server. `next.config.ts` sets `output: "export"` and turns off image optimization, because a static export has no image server.
