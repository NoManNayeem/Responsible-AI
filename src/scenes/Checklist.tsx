import { useCurrentFrame } from "remotion";
import { SceneFrame } from "../components/SceneFrame";
import { enter, lin } from "../components/anim";
import { revealAt } from "../timing";
import { C, F } from "../theme";
import { SceneProps } from "../types";

// Items tick on as they're spoken. Questions get an amber "?" instead of a check.
export const Checklist: React.FC<SceneProps> = ({ scene, frames }) => {
  const f = useCurrentFrame();
  const items: string[] = scene.items;
  const n = items.length;
  const twoCol = n > 6;
  const ats = items.map((_, i) => revealAt(i, n, frames));
  return (
    <SceneFrame frames={frames} title={scene.title} source={scene.source}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: twoCol ? "1fr 1fr" : "1fr", gridAutoFlow: twoCol ? "column" : "row", gridTemplateRows: twoCol ? `repeat(${Math.ceil(n / 2)}, auto)` : undefined, columnGap: 70, rowGap: n > 5 ? 26 : 34 }}>
          {items.map((t, i) => {
            const tick = lin(f, ats[i] + 6, ats[i] + 18);
            const done = f >= ats[i];
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 30, ...enter(f, ats[i], 16) }}>
                <svg width={56} height={56} viewBox="0 0 56 56" style={{ flexShrink: 0 }}>
                  <rect x={3} y={3} width={50} height={50} rx={10} fill="none" stroke={done ? (scene.asQuestions ? C.amber : C.teal) : C.line} strokeWidth={4} />
                  {scene.asQuestions ? (
                    <text x={28} y={40} textAnchor="middle" fontFamily={F.display} fontWeight={800} fontSize={34} fill={C.amber} opacity={tick}>?</text>
                  ) : (
                    <path d="M15 29 L25 39 L42 18" fill="none" stroke={C.teal} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={46} strokeDashoffset={46 * (1 - tick)} />
                  )}
                </svg>
                <div style={{ fontFamily: F.body, fontSize: twoCol ? 34 : 40, lineHeight: 1.3, color: C.paper }}>{t}</div>
              </div>
            );
          })}
        </div>
        {scene.footnote && (
          <div style={{ marginTop: 50, fontFamily: F.body, fontSize: 30, color: C.amber, ...enter(f, frames * 0.8) }}>{scene.footnote}</div>
        )}
      </div>
    </SceneFrame>
  );
};
