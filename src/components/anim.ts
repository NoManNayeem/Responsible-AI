import { interpolate, spring } from "remotion";
import { FPS } from "../timing";

// Spring progress 0→1 starting at `at`
export const pop = (frame: number, at: number, damping = 18) =>
  spring({ frame: frame - at, fps: FPS, config: { damping, mass: 0.8 } });

// Standard entrance: rise + fade
export const enter = (frame: number, at: number, dist = 28) => {
  const p = pop(frame, at);
  return { opacity: p, transform: `translateY(${(1 - p) * dist}px)` };
};

export const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

export const lin = (frame: number, a: number, b: number, from = 0, to = 1) =>
  interpolate(frame, [a, b], [from, to], clamp);

export const countUp = (frame: number, at: number, value: number, dur = 40) => {
  const t = lin(frame, at, at + dur);
  const eased = 1 - Math.pow(1 - t, 3);
  return Math.round(value * eased);
};
