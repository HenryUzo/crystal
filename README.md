# Crystal Kizor — Website

A premium, editorial personal brand website for Crystal Kizor. The first implementation delivers an animated, chapter-based hero plus lightweight About, Ecosystem and Contact sections.

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4 (official Vite plugin)
- GSAP ScrollTrigger + @gsap/react

## Getting started

Requires Node.js 20.19+.

    npm install
    npm run dev

Then open the local URL displayed by Vite (normally http://localhost:5173).

For production:

    npm run typecheck
    npm run build
    npm run preview

## Story interaction

The hero introduces Crystal in the first viewport and moves through three connected chapters as visitors scroll: architecture, objects, and educational opportunity. Desktop gets scrubbed transitions. Mobile and reduced-motion visitors get readable, stacked content without scroll-dependent animation.

All ScrollTrigger instances use a scoped useGSAP hook and are reverted during cleanup.

## Replacing placeholder imagery

The built-in visuals are original vector concepts, not photographs of Crystal or her projects. Add approved assets to public/media and set the optional imageSrc field for each chapter in src/data/chapters.ts. Update imageAlt to accurately describe each image.

## Content verification

The text follows the Stage 1 website brief for Crystal Kizor. Official roles, titles, awards, contact details, product availability and third-party destinations should be verified before expanding the site. The only external links currently used are Studio COKA's website and Crystal's public LinkedIn profile.

## Development workflow

- main: stable baseline
- codex/crystal-kizor-website: active implementation branch

The website has not been deployed by this repository setup.

