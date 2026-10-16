# Crystal Kizor — Approved media

This directory is reserved for approved Crystal Kizor brand photography, films and Studio COKA / ELEvated work.

## Replacing the editorial placeholders

1. Export optimized images (prefer WebP/AVIF with an appropriate JPG backup).
2. Add them to this folder.
3. In `src/data/site.ts`, replace `images.hero`, `images.galleryArchitecture`, `images.galleryInterior`, `images.galleryDetail` and `images.feature` with URLs such as `/media/studio-coka-space.webp`.
4. Update each `alt` value so it describes the approved image accurately.
5. Remove the placeholder disclosure in the footer after all images have been replaced.

## Replacing the hero with real film

Use Crystal's approved video, not the uploaded reference screen recording. Put a compressed muted MP4 in this directory, then set `content.heroVideoSrc` in `src/data/site.ts`. The image in `images.hero` is its poster/fallback.

If you don't have approved media, keep the temporary-image disclosure in place. Do not label stock photography as work Crystal completed.
