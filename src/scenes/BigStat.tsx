import { useCurrentFrame } from "remotion";
import { SceneFrame } from "../components/SceneFrame";
import { countUp, enter } from "../components/anim";
import { C, F, toneColor } from "../theme";
import { SceneProps } from "../types";

export const BigStat: React.FC<SceneProps> = ({ scene, frames }) => {
  const f = useCurrentFrame();
  return (
    <SceneFrame frames={frames} title={scene.title} source={scene.source}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
        <div
          style={{
            fontFamily: F.display, fontWeight: 800, fontSize: `${scene.prefix ?? ""}${scene.value}${scene.suffix ?? ""}`.length > 6 ? 210 : 300, lineHeight: 0.9,
            letterSpacing: -8, color: toneColor(scene.tone), fontVariantNumeric: "tabular-nums",
          }}
        >
          {scene.prefix ?? ""}{countUp(f, 8, scene.value, 45)}{scene.suffix ?? ""}
        </div>
        <div style={{ fontFamily: F.body, fontSize: 44, lineHeight: 1.3, color: C.paper, maxWidth: 1300, marginTop: 40, ...enter(f, 40) }}>
          {scene.label}
        </div>
      </div>
    </SceneFrame>
  );
};
