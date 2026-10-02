import { useCurrentFrame } from "remotion";
import { SceneFrame } from "../components/SceneFrame";
import { enter, lin, pop } from "../components/anim";
import { revealAt } from "../timing";
import { C, F } from "../theme";
import { SceneProps } from "../types";

// Dates on a line. Teal = already in effect / first, amber = coming next.
export const Timeline: React.FC<SceneProps> = ({ scene, frames }) => {
  const f = useCurrentFrame();
  const ev: any[] = scene.events;
  const n = ev.length;
  const ats = ev.map((_, i) => revealAt(i, n, frames));
  const lineP = lin(f, ats[0], ats[n - 1] + 15);
  return (
    <SceneFrame frames={frames} title={scene.title} source={scene.source}>
      <div style={{ position: "relative", height: "100%" }}>
        <div style={{ position: "absolute", left: 0, right: 0, top: 200, height: 6, background: C.line, borderRadius: 3 }}>
          <div style={{ width: `${lineP * 100}%`, height: "100%", background: C.paper, opacity: 0.6, borderRadius: 3 }} />
        </div>
        <div style={{ display: "flex", height: "100%" }}>
          {ev.map((e, i) => {
            const c = e.status === "done" ? C.teal : C.amber;
            const p = pop(f, ats[i], 14);
            return (
              <div key={i} style={{ flex: 1, paddingRight: 32, position: "relative" }}>
                <div style={{ height: 160, display: "flex", alignItems: "flex-end", paddingBottom: 18, ...enter(f, ats[i], 14) }}>
                  <div style={{ fontFamily: F.display, fontWeight: 800, fontSize: n > 3 ? 48 : 60, color: c, letterSpacing: -1 }}>{e.date}</div>
                </div>
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: c, marginTop: 23, transform: `scale(${p})` }} />
                <div style={{ marginTop: 34, ...enter(f, ats[i] + 5, 18) }}>
                  <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: n > 3 ? 38 : 46, color: C.paper, lineHeight: 1.1 }}>{e.title}</div>
                  <div style={{ fontFamily: F.body, fontSize: n > 3 ? 27 : 31, color: C.slate, marginTop: 12, lineHeight: 1.4 }}>{e.body}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SceneFrame>
  );
};
