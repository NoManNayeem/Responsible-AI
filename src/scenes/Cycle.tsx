import { useCurrentFrame } from "remotion";
import { SceneFrame } from "../components/SceneFrame";
import { enter, lin, pop } from "../components/anim";
import { revealAt } from "../timing";
import { C, F } from "../theme";
import { SceneProps } from "../types";

// Govern at the centre, Map → Measure → Manage around a loop that draws itself.
export const Cycle: React.FC<SceneProps> = ({ scene, frames }) => {
  const f = useCurrentFrame();
  const nodes: any[] = scene.nodes;
  const all = [scene.center, ...nodes];
  const ats = all.map((_, i) => revealAt(i, all.length, frames));
  const R = 240, cx = 330, cy = 340;
  const circ = 2 * Math.PI * R;
  const ring = lin(f, ats[1], ats[all.length - 1] + 20);
  const angle = (i: number) => (-90 + (360 / nodes.length) * i) * (Math.PI / 180);
  const active = ats.reduce((acc, at, i) => (f >= at ? i : acc), 0);
  return (
    <SceneFrame frames={frames} title={scene.title} source={scene.source}>
      <div style={{ display: "flex", height: "100%", alignItems: "center", gap: 80 }}>
        <svg width={660} height={680} viewBox="0 0 660 680" style={{ flexShrink: 0 }}>
          <circle cx={cx} cy={cy} r={R} fill="none" stroke={C.line} strokeWidth={6} />
          <circle
            cx={cx} cy={cy} r={R} fill="none" stroke={C.amber} strokeWidth={6}
            strokeDasharray={circ} strokeDashoffset={circ * (1 - ring)}
            transform={`rotate(-90 ${cx} ${cy})`} strokeLinecap="round"
          />
          <g opacity={pop(f, ats[0])}>
            <circle cx={cx} cy={cy} r={120} fill={C.amber} />
            <text x={cx} y={cy + 16} textAnchor="middle" fontFamily={F.display} fontWeight={800} fontSize={48} fill={C.ink}>
              {scene.center.title}
            </text>
          </g>
          {nodes.map((nd, i) => {
            const a = angle(i);
            const x = cx + R * Math.cos(a), y = cy + R * Math.sin(a);
            const p = pop(f, ats[i + 1], 14);
            const lit = active === i + 1;
            return (
              <g key={i} opacity={p} transform={`translate(${x} ${y}) scale(${0.6 + 0.4 * p})`}>
                <circle r={78} fill={lit ? C.teal : C.panel} stroke={C.teal} strokeWidth={5} />
                <text y={12} textAnchor="middle" fontFamily={F.display} fontWeight={800} fontSize={34} fill={lit ? C.ink : C.paper}>
                  {nd.title}
                </text>
              </g>
            );
          })}
        </svg>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 30 }}>
          {all.map((it, i) => (
            <div key={i} style={enter(f, ats[i], 16)}>
              <div style={{ borderLeft: `6px solid ${i === 0 ? C.amber : C.teal}`, paddingLeft: 26, opacity: active === i ? 1 : 0.55 }}>
                <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: 44, color: C.paper }}>{it.title}</div>
                <div style={{ fontFamily: F.body, fontSize: 30, color: C.slate, marginTop: 6, lineHeight: 1.35 }}>{it.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SceneFrame>
  );
};
