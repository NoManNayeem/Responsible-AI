import { useCurrentFrame } from "remotion";
import { SceneFrame } from "../components/SceneFrame";
import { enter, lin, pop } from "../components/anim";
import { C, F } from "../theme";
import { SceneProps } from "../types";

export const Chapter: React.FC<SceneProps> = ({ scene, frames }) => {
  const f = useCurrentFrame();
  const p = pop(f, 0, 22);
  return (
    <SceneFrame frames={frames}>
      <div style={{ display: "flex", alignItems: "center", height: "100%", gap: 80 }}>
        <div
          style={{
            fontFamily: F.display, fontWeight: 800, fontSize: 420, lineHeight: 0.8,
            color: "transparent", WebkitTextStroke: `4px ${C.amber}`,
            transform: `scale(${0.85 + p * 0.15})`, opacity: p, minWidth: 360, textAlign: "right",
          }}
        >
          {scene.num}
        </div>
        <div>
          <div
            style={{
              height: 6, background: C.amber, borderRadius: 3, marginBottom: 36,
              width: lin(f, 6, 30) * 220,
            }}
          />
          <div
            style={{
              fontFamily: F.display, fontWeight: 800, fontSize: 104, lineHeight: 1,
              letterSpacing: -3, color: C.paper, maxWidth: 1100, ...enter(f, 8, 40),
            }}
          >
            {scene.title}
          </div>
          {scene.sub && (
            <div style={{ fontFamily: F.body, fontSize: 38, color: C.slate, marginTop: 28, ...enter(f, 18) }}>
              {scene.sub}
            </div>
          )}
        </div>
      </div>
    </SceneFrame>
  );
};
