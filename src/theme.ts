import { loadFont as loadDisplay } from "@remotion/google-fonts/BricolageGrotesque";
import { loadFont as loadBody } from "@remotion/google-fonts/IBMPlexSans";
import { loadFont as loadMono } from "@remotion/google-fonts/JetBrainsMono";
import { Tone } from "./types";

const display = loadDisplay("normal", { weights: ["400", "600", "800"], subsets: ["latin"] });
const body = loadBody("normal", { weights: ["400", "500", "600"], subsets: ["latin"] });
const mono = loadMono("normal", { weights: ["400"], subsets: ["latin"] });

// "Instrument panel" palette: every signal colour carries meaning.
export const C = {
  ink: "#0F1E36",     // background
  panel: "#172B4D",   // raised surfaces
  line: "#2A426B",    // rules, inactive rail
  paper: "#EAF0F7",   // primary text
  slate: "#93A3BE",   // secondary text
  amber: "#F4B43A",   // caution, upcoming, emphasis
  teal: "#3DBBA8",    // safe, done, good practice
  coral: "#E8574C",   // risk, harm
  sky: "#7FB2F0",     // neutral information
};

export const F = {
  display: display.fontFamily,
  body: body.fontFamily,
  mono: mono.fontFamily,
};

export const toneColor = (t?: Tone) =>
  t === "risk" ? C.coral : t === "warn" ? C.amber : t === "safe" ? C.teal : t === "info" ? C.sky : C.slate;

export const W = 1920;
export const H = 1080;
export const PAD = 120;
