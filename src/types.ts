export type Tone = "risk" | "warn" | "safe" | "info" | "neutral";

export type Scene = {
  id: string;
  chapter: number;
  type: string;
  narration: string;
  title?: string;
  source?: string;
  seconds?: number;
  extraSeconds?: number;
  // scene-specific fields (see tools/build_script.py)
  [key: string]: any;
};

export type Script = { chapters: string[]; scenes: Scene[] };

export type SceneProps = { scene: Scene; frames: number };
