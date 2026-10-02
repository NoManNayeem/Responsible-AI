import { useCurrentFrame } from "remotion";
import { SceneFrame } from "../components/SceneFrame";
import { countUp, enter } from "../components/anim";
import { revealAt } from "../timing";
import { C, F, toneColor } from "../theme";
import { SceneProps } from "../types";

export const Stats: React.FC<SceneProps> = ({ scene, frames }) => {
  const f = useCurrentFrame();
  const items: any[] = scene.stats;
  return (
    <SceneFrame frames={frames} title={scene.title} source={scene.source}>
      <div style={{ display: "flex", gap: 72, alignItems: "center", height: "100%" }}>
        {items.map((s, i) => {
          const at = revealAt(i, items.length, frames);
          return (
            <div key={i} style={{ flex: 1, borderTop: `6px solid ${toneColor(s.tone)}`, paddingTop: 36, ...enter(f, at) }}>
              <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: items.length > 2 ? 150 : 190, lineHeight: 1, letterSpacing: -6, color: toneColor(s.tone), fontVariantNumeric: "tabular-nums" }}>
                {countUp(f, at, s.value, 36)}{s.suffix ?? ""}
              </div>
              <div style={{ fontFamily: F.body, fontSize: 36, lineHeight: 1.3, color: C.paper, marginTop: 24 }}>{s.label}</div>
            </div>
          );
        })}
      </div>
    </SceneFrame>
  );
};
