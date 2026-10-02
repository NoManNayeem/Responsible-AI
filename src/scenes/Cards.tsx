import { useCurrentFrame } from "remotion";
import { SceneFrame } from "../components/SceneFrame";
import { enter } from "../components/anim";
import { revealAt } from "../timing";
import { C, F, toneColor } from "../theme";
import { SceneProps } from "../types";

// Grid of cards revealed in narration order; the newest card is lit so the eye follows the voice.
export const Cards: React.FC<SceneProps> = ({ scene, frames }) => {
  const f = useCurrentFrame();
  const items: any[] = scene.items;
  const cols: number = scene.columns ?? 3;
  const compact = !!scene.compact;
  const ats = items.map((_, i) => revealAt(i, items.length, frames));
  const newest = ats.reduce((acc, at, i) => (f >= at ? i : acc), -1);
  return (
    <SceneFrame frames={frames} title={scene.title} source={scene.source}>
      <div
        style={{
          display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridAutoFlow: scene.numbered ? "column" : "row",
          gridTemplateRows: scene.numbered ? `repeat(${Math.ceil(items.length / cols)}, auto)` : undefined,
          gap: scene.numbered ? 14 : compact ? 18 : 28, alignContent: "center", height: "100%",
        }}
      >
        {items.map((it, i) => {
          const lit = i === newest;
          const tone = toneColor(it.tone);
          return (
            <div
              key={i}
              style={{
                background: lit ? "#1E3760" : C.panel, borderRadius: 10,
                borderLeft: `6px solid ${it.tone ? tone : lit ? C.amber : C.line}`,
                padding: scene.numbered ? "13px 26px" : compact ? "20px 28px" : "34px 38px",
                display: "flex", gap: 20, alignItems: "baseline", ...enter(f, ats[i], 20),
              }}
            >
              {scene.numbered && (
                <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 34, color: lit ? C.amber : C.slate, minWidth: 48, fontVariantNumeric: "tabular-nums" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
              )}
              <div>
                <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: scene.numbered ? 32 : compact ? 36 : 46, lineHeight: 1.1, color: C.paper }}>
                  {it.title}
                </div>
                <div style={{ fontFamily: F.body, fontSize: scene.numbered ? 24 : compact ? 26 : 32, lineHeight: 1.4, color: C.slate, marginTop: compact ? 6 : 14 }}>
                  {it.body}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SceneFrame>
  );
};
