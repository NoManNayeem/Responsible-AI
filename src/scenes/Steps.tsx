import { useCurrentFrame } from "remotion";
import { SceneFrame } from "../components/SceneFrame";
import { enter, lin, pop } from "../components/anim";
import { revealAt } from "../timing";
import { C, F } from "../theme";
import { SceneProps } from "../types";

// A true sequence: numbered nodes on a line that draws as the narration moves through it.
// `escalate` shifts node colour from teal → amber → coral to show rising stakes/autonomy.
export const Steps: React.FC<SceneProps> = ({ scene, frames }) => {
  const f = useCurrentFrame();
  const items: any[] = scene.items;
  const n = items.length;
  const ats = items.map((_, i) => revealAt(i, n, frames));
  const lineP = lin(f, ats[0], ats[n - 1] + 15);
  const colorFor = (i: number) => {
    if (!scene.escalate) return C.amber;
    const t = n === 1 ? 0 : i / (n - 1);
    return t < 0.34 ? C.teal : t < 0.67 ? C.amber : C.coral;
  };
  const node = n > 6 ? 104 : 132;
  const top = 150;
  return (
    <SceneFrame frames={frames} title={scene.title} source={scene.source}>
      <div style={{ position: "relative", height: "100%" }}>
        <div style={{ position: "absolute", left: `${50 / n}%`, right: `${50 / n}%`, top: top + node / 2 - 3, height: 6, background: C.line, borderRadius: 3 }}>
          <div style={{ width: `${lineP * 100}%`, height: "100%", background: C.amber, borderRadius: 3 }} />
        </div>
        <div style={{ display: "flex", width: "100%", paddingTop: top }}>
          {items.map((it, i) => {
            const p = pop(f, ats[i], 14);
            const c = colorFor(i);
            return (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 10px" }}>
                <div
                  style={{
                    width: node, height: node, borderRadius: "50%", background: C.ink,
                    border: `6px solid ${p > 0.05 ? c : C.line}`, transform: `scale(${0.6 + 0.4 * p})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: F.display, fontWeight: 800, fontSize: node * 0.42, color: c,
                  }}
                >
                  {i + 1}
                </div>
                <div style={{ marginTop: 36, ...enter(f, ats[i] + 4) }}>
                  <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: n > 6 ? 40 : 52, color: C.paper, lineHeight: 1.1 }}>{it.title}</div>
                  <div style={{ fontFamily: F.body, fontSize: n > 6 ? 28 : 34, color: C.slate, marginTop: 12, lineHeight: 1.35 }}>{it.body}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SceneFrame>
  );
};
