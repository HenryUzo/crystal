# Crystal Kizor — Personal Website

A modern editorial home for Crystal Kizor's architecture, design, ideas, education and social initiatives.

Development branch: `codex/crystal-kizor-website` (changes are not merged into `main`).

## Technology

- React 19 + TypeScript, Vite 7 and Tailwind CSS 4
- GSAP, ScrollTrigger and @gsap/react
- Responsive, accessible HTML and motion-reduced fallback

## Run locally

Node.js 20.19+ is required.

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Experience direction

Adapted from the screen-recording reference provided on 15 October 2026:

1. **Cinematic opening:** immersive architectural image, quiet persistent navigation, editorial positioning and restrained staggered headline reveal.
2. **Editorial transition:** bright layout and an overlapping collage of three asymmetrically positioned images, with independent parallax and entrance motion.
3. **Statement:** a contrasting charcoal chapter explaining the ideas connecting her disciplines, without fabricated quotations.
4. **The ecosystem:** Studio COKA's practice highlighted before an accessible directory of ELEvated, The Effective Architect, AKO Alliance and Alive and Free.
5. **Ideas and contact:** speaking/writing and a verified LinkedIn contact destination.

Motion uses ScrollTrigger scrubbing for the hero image, typography fade and subtle gallery/featured-image parallax; other content uses once-only reveals. Every animation lives in the scoped `useGSAP` context and gets cleaned up on unmount. Mobile keeps natural scrolling; reduced-motion settings disable the animation sequences entirely.

## Photography and video

**Current Unsplash photography is temporary, licensed visual direction, NOT Crystal Kizor's work or Studio COKA projects.** Replace it before launch and remove the small temporary-image disclosure once all imagery is approved.

- `src/data/site.ts`: all image URLs, company descriptions, outbound links and approved video path.
- `public/media/`: put production-ready AVIF/WebP/JPG/video here.
- To use a Crystal-approved hero film, place it at `public/media/crystal-hero.mp4` and set `heroVideoSrc: "/media/crystal-hero.mp4"` in `src/data/site.ts`. Keep the hero image as poster fallback. Do not use the supplied screen recording as brand footage.
- Optimize video for mobile, mute/autoplay/loop and serve an image fallback; do not depend on sound.
- Confirm rights, image descriptions, legal claims, and links before publishing.

## Content sources and caution

The stage-one design brief is the primary source. Crystal's public LinkedIn profile confirms the Studio COKA association and her public writing and speaking. Avoid unsupported metrics or founder claims for other initiatives. Unknown venture URLs deliberately remain non-clickable.

## Review before release

- Replace every placeholder photograph with approved photography or video.
- Verify Crystal's approved biography, venture roles and all links.
- Test low-powered mobile performance and assistive/reduced-motion modes.
- Test enquiry pathway (currently LinkedIn contact, no backend).
- Deploy only when assets/content have been approved.

This branch passes a GitHub Actions build and TypeScript validation after development changes.
