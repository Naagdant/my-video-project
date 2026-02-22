# my-video-project

A fresh [Remotion](https://www.remotion.dev/) starter scaffold for animating videos.

## Included animation

- Duration: **5 seconds** (`150` frames at `30fps`)
- Background: **black**
- Center text: **"Hello Kapil"** in white
- Animation: smooth fade-in at the start

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
