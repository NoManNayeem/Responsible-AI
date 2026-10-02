import { useCurrentFrame } from "remotion";
import { SceneFrame } from "../components/SceneFrame";
import { countUp, enter, pop } from "../components/anim";
import { revealAt } from "../timing";
import { C, F, toneColor } from "../theme";
import { SceneProps } from "../types";

export const Bars: React.FC<SceneProps> = ({ scene, frames }) => {
  const f = useCurrentFrame();
  const bars: any[] = scene.bars;
  const max = Math.max(...bars.map((b) => b.value));
  return (
    <SceneFrame frames={frames} title={scene.title} source={scene.source}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 36, height: "100%" }}>
        {bars.map((b, i) => {
          const at = revealAt(i, bars.length, frames);
          const p = pop(f, at, 26);
          const color = b.tone ? toneColor(b.tone) : C.line;
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 36, ...enter(f, at, 12) }}>
              <div style={{ width: 560, fontFamily: F.body, fontSize: 38, color: b.tone ? C.paper : C.slate, textAlign: "right" }}>{b.label}</div>
              <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 24 }}>
                <div style={{ height: 76, width: `${(b.value / max) * 80 * p}%`, background: color, borderRadius: 6 }} />
                <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 64, color: b.tone ? color : C.paper, fontVariantNumeric: "tabular-nums" }}>
                  {countUp(f, at, b.value, 30)}{scene.unit ?? ""}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SceneFrame>
  );
};
