import { useCurrentFrame } from "remotion";
import { C, F, PAD } from "../theme";
import { SCRIPT, sceneFrames } from "../timing";
import { Scene } from "../types";

// Signature element: a progress rail of chapters. Done = teal, current = amber, ahead = dim.
export const ChapterRail: React.FC<{ scenes: Scene[] }> = ({ scenes }) => {
  const f = useCurrentFrame();
  const spans = new Map<number, { start: number; end: number }>();
  let t = 0;
  for (const s of scenes) {
    const d = sceneFrames(s);
    const cur = spans.get(s.chapter);
    spans.set(s.chapter, { start: cur ? cur.start : t, end: t + d });
    t += d;
  }
  const chapters = [...spans.keys()];
  const active = chapters.find((c) => f >= spans.get(c)!.start && f < spans.get(c)!.end) ?? chapters[chapters.length - 1];
  return (
    <div style={{ position: "absolute", left: PAD, right: PAD, bottom: 34, display: "flex", gap: 8, alignItems: "flex-end" }}>
      {chapters.map((c) => {
        const { start, end } = spans.get(c)!;
        const p = Math.max(0, Math.min(1, (f - start) / (end - start)));
        const isActive = c === active;
        const done = f >= end;
        return (
          <div key={c} style={{ flex: end - start, minWidth: 40 }}>
            <div
              style={{
                fontFamily: F.body, fontSize: 18, color: isActive ? C.amber : C.slate,
                opacity: isActive ? 1 : 0.55, marginBottom: 8, whiteSpace: "nowrap",
                overflow: "hidden", textOverflow: "ellipsis",
              }}
            >
              {SCRIPT.chapters[c]}
            </div>
            <div style={{ height: 6, borderRadius: 3, background: C.line, overflow: "hidden" }}>
              <div
                style={{
                  height: "100%", width: `${(done ? 1 : p) * 100}%`,
                  background: done ? C.teal : C.amber,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
