# Responsible AI — infographic tutorial (Remotion)

~21.5 min, 1920×1080, 30 fps. 68 animated scenes across 13 chapters. All content lives in one file.

## Run
```bash
npm install
npm run dev                     # Remotion Studio preview
npm run render                  # full video → out/responsible-ai.mp4
npx remotion render Chapter-06 out/engineers.mp4   # one chapter
```
Compositions: `ResponsibleAI` (full) and `Chapter-00` … `Chapter-12`.

## Edit content
1. Edit `tools/build_script.py` (scenes, narration, on-screen text).
2. `npm run script` → regenerates `src/data/script.json` and `NARRATION.md`.

Scene length is computed from narration (2.5 words/sec). Override with `seconds` on any scene.

## Add voiceover
1. Record or TTS each scene from `NARRATION.md` as `public/vo/<scene-id>.mp3`.
2. Set `VOICEOVER = true` in `src/config.ts`.
3. If a clip runs longer than its scene, set `seconds` for that scene and rerun `npm run script`.

Optional music: `public/music.mp3` + `MUSIC = true`. Captions: `SHOW_CAPTIONS`.

## Scene types
`chapter, statement, bigstat, compare, stats, bars, cards, steps, cycle, pyramid, timeline, case, checklist, split, code` — see `src/scenes/`.
Items reveal in sync with narration; the newest item is highlighted so viewers follow the voice.

## Visual system
- Colours carry meaning: teal = safe/done, amber = caution/next, coral = risk/harm.
- Chapter progress rail at the bottom on every frame.
- Fonts: Bricolage Grotesque (display), IBM Plex Sans (body), JetBrains Mono (code).
