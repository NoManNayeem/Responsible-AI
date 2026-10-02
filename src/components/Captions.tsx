import { useCurrentFrame } from "remotion";
import { C, F, PAD } from "../theme";
import { words } from "../timing";

// Splits narration into short phrases and shows each in turn, paced to the scene length.
export const Captions: React.FC<{ text: string; frames: number }> = ({ text, frames }) => {
  const f = useCurrentFrame();
  const w = words(text);
  const size = 9;
  const chunks: string[] = [];
  for (let i = 0; i < w.length; i += size) chunks.push(w.slice(i, i + size).join(" "));
  const speak = Math.max(1, frames - 30);
  const idx = Math.min(chunks.length - 1, Math.floor(((f - 6) / speak) * chunks.length));
  if (f < 6 || idx < 0) return null;
  return (
    <div
      style={{
        position: "absolute", left: PAD, right: PAD, bottom: 82, textAlign: "center",
        fontFamily: F.body, fontWeight: 500, fontSize: 30, color: C.paper, opacity: 0.92,
      }}
    >
      <span style={{ background: "rgba(15,30,54,0.82)", padding: "6px 16px", borderRadius: 6 }}>
        {chunks[idx]}
      </span>
    </div>
  );
};
