# my-video-project

A fresh [Remotion](https://www.remotion.dev/) starter scaffold for animating videos.

## Included animation

- Duration: **6 seconds** (`180` frames at `30fps`)
- Style: cinematic magical scene
- Background: soft blue-to-purple gradient sky
- Centerpiece: glowing horse emoji (`🐎`) with a soft white aura
- Motion: fade-in (first 30 frames), floating motion, gentle zoom-in, and subtle opening bounce

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start Remotion Studio:
   ```bash
   npm run dev
   ```
3. Render the sample composition:
   ```bash
   npm run render
   ```

## Project structure

- `src/index.ts` – registers the root for Remotion.
- `src/Root.tsx` – declares compositions.
- `src/HelloWorld.tsx` – animated sample composition.
- `remotion.config.ts` – Remotion runtime config.
