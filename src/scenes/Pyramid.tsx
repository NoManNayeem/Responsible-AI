import { useCurrentFrame } from "remotion";
import { SceneFrame } from "../components/SceneFrame";
import { enter, pop } from "../components/anim";
import { revealAt } from "../timing";
import { C, F, toneColor } from "../theme";
import { SceneProps } from "../types";

export const Pyramid: React.FC<SceneProps> = ({ scene, frames }) => {
  const f = useCurrentFrame();
  const levels: any[] = scene.levels;
  const n = levels.length;
  const ats = levels.map((_, i) => revealAt(i, n, frames));
  const Wd = 760, Hd = 620, lh = Hd / n;
  return (
    <SceneFrame frames={frames} title={scene.title} source={scene.source}>
      <div style={{ display: "flex", alignItems: "center", height: "100%", gap: 60 }}>
        <svg width={Wd} height={Hd} viewBox={`0 0 ${Wd} ${Hd}`} style={{ flexShrink: 0 }}>
          {levels.map((lv, i) => {
            const topW = 180 + ((Wd - 180) * i) / n, botW = 180 + ((Wd - 180) * (i + 1)) / n;
            const y0 = i * lh + 4, y1 = (i + 1) * lh - 4;
            const pts = [[(Wd - topW) / 2, y0], [(Wd + topW) / 2, y0], [(Wd + botW) / 2, y1], [(Wd - botW) / 2, y1]]
              .map((p) => p.join(",")).join(" ");
            const p = pop(f, ats[i]);
            return (
              <g key={i} opacity={p} transform={`translate(0 ${(1 - p) * -20})`}>
                <polygon points={pts} fill={toneColor(lv.tone)} />
                <text x={Wd / 2} y={(y0 + y1) / 2 + 13} textAnchor="middle" fontFamily={F.display} fontWeight={800} fontSize={i === 0 ? 28 : 38} fill={C.ink}>
                  {lv.title}
                </text>
              </g>
            );
          })}
        </svg>
        <div style={{ flex: 1, height: Hd, display: "flex", flexDirection: "column" }}>
          {levels.map((lv, i) => (
            <div key={i} style={{ height: lh, display: "flex", alignItems: "center", ...enter(f, ats[i] + 4, 16) }}>
              <div style={{ fontFamily: F.body, fontSize: 30, lineHeight: 1.35, color: C.paper }}>
                <span style={{ color: toneColor(lv.tone), fontWeight: 600 }}>{lv.title}. </span>
                {lv.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SceneFrame>
  );
};
