import { useCurrentFrame } from "remotion";
import { SceneFrame } from "../components/SceneFrame";
import { enter } from "../components/anim";
import { revealAt } from "../timing";
import { C, F, toneColor } from "../theme";
import { SceneProps } from "../types";

// Two columns; left list is spoken first, then right.
export const Split: React.FC<SceneProps> = ({ scene, frames }) => {
  const f = useCurrentFrame();
  const L = scene.left, R = scene.right;
  const total = L.items.length + R.items.length + 2;
  const col = (side: any, offset: number) => {
    const c = toneColor(side.tone);
    return (
      <div style={{ flex: 1, background: C.panel, borderRadius: 12, borderTop: `8px solid ${c}`, padding: "40px 48px" }}>
        <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 60, color: c, marginBottom: 30, ...enter(f, revealAt(offset, total, frames)) }}>
          {side.title}
        </div>
        {side.items.map((t: string, i: number) => (
          <div key={i} style={{ display: "flex", gap: 20, alignItems: "baseline", marginBottom: 24, ...enter(f, revealAt(offset + 1 + i, total, frames), 14) }}>
            <div style={{ width: 14, height: 14, borderRadius: 7, background: c, flexShrink: 0, transform: "translateY(-4px)" }} />
            <div style={{ fontFamily: F.body, fontSize: 36, lineHeight: 1.3, color: C.paper }}>{t}</div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <SceneFrame frames={frames} title={scene.title} source={scene.source}>
      <div style={{ display: "flex", gap: 48, height: "100%", alignItems: "stretch", padding: "20px 0" }}>
        {col(L, 0)}
        {col(R, L.items.length + 1)}
      </div>
    </SceneFrame>
  );
};
