import script from "./data/script.json";
import { Scene, Script } from "./types";

export const FPS = 30;
export const WORDS_PER_SEC = 2.5; // ~150 wpm, a calm explainer pace

export const SCRIPT = script as Script;

export const words = (t: string) => t.trim().split(/\s+/).filter(Boolean);

export const sceneSeconds = (s: Scene) => {
  if (s.seconds) return s.seconds;
  const base = words(s.narration).length / WORDS_PER_SEC + 1.4 + (s.extraSeconds ?? 0);
  return Math.max(s.type === "chapter" ? 4 : 6, base);
};

export const sceneFrames = (s: Scene) => Math.round(sceneSeconds(s) * FPS);

export const scenesFor = (chapter: number) =>
  chapter < 0 ? SCRIPT.scenes : SCRIPT.scenes.filter((s) => s.chapter === chapter);

export const totalFrames = (chapter: number) =>
  scenesFor(chapter).reduce((a, s) => a + sceneFrames(s), 0);

// Frame (within a scene) at which item i of n should appear.
// Spreads reveals across the first ~75% of narration so visuals land as they're mentioned.
export const revealAt = (i: number, n: number, frames: number, lead = 14) =>
  Math.round(lead + (frames * 0.75 - lead) * (n <= 1 ? 0 : i / n));
