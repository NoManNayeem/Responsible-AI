import { useCurrentFrame } from "remotion";
import { SceneFrame } from "../components/SceneFrame";
import { enter, lin } from "../components/anim";
import { revealAt } from "../timing";
import { C, F } from "../theme";
import { SceneProps } from "../types";

// Case file: what happened → outcome → lesson. The lesson is the payoff, so it gets the colour.
export const Case: React.FC<SceneProps> = ({ scene, frames }) => {
  const f = useCurrentFrame();
  const rows = [
    { k: "What happened", v: scene.what },
    { k: "Outcome", v: scene.outcome },
  ];
  const ats = [0, 1, 2].map((i) => revealAt(i, 3, frames, 20));
  return (
    <SceneFrame frames={frames} source={scene.source}>
      <div style={{ display: "flex", height: "100%", gap: 90 }}>
        <div style={{ width: 460, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "center", ...enter(f, 2) }}>
          <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 150, lineHeight: 0.9, color: C.coral, letterSpacing: -5 }}>
            {scene.year}
          </div>
          <div style={{ height: 6, width: lin(f, 6, 26) * 200, background: C.coral, borderRadius: 3, margin: "32px 0" }} />
          <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: 52, lineHeight: 1.08, color: C.paper }}>{scene.org}</div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 40 }}>
          {rows.map((r, i) => (
            <div key={i} style={enter(f, ats[i])}>
              <div style={{ fontFamily: F.body, fontWeight: 600, fontSize: 26, color: C.slate, marginBottom: 8 }}>{r.k}</div>
              <div style={{ fontFamily: F.body, fontSize: 36, lineHeight: 1.4, color: C.paper }}>{r.v}</div>
            </div>
          ))}
          <div style={{ background: C.amber, borderRadius: 10, padding: "28px 34px", ...enter(f, ats[2]) }}>
            <div style={{ fontFamily: F.body, fontWeight: 600, fontSize: 26, color: C.ink, opacity: 0.75, marginBottom: 6 }}>Lesson</div>
            <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: 46, lineHeight: 1.15, color: C.ink }}>{scene.lesson}</div>
          </div>
        </div>
      </div>
    </SceneFrame>
  );
};
