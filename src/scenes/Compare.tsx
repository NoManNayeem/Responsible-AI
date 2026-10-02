import { useCurrentFrame } from "remotion";
import { SceneFrame } from "../components/SceneFrame";
import { countUp, enter, pop } from "../components/anim";
import { C, F } from "../theme";
import { SceneProps } from "../types";

// Before/after bars with an animated change badge.
export const Compare: React.FC<SceneProps> = ({ scene, frames }) => {
  const f = useCurrentFrame();
  const { a, b } = scene;
  const max = Math.max(a.value, b.value);
  const unit = scene.unit ?? "";
  const change = Math.round(((b.value - a.value) / a.value) * 100);
  const good = scene.improving ? change < 0 : change <= 0;
  const bColor = good ? C.teal : C.coral;
  const row = (r: any, at: number, color: string) => {
    const p = pop(f, at, 26);
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 36, marginBottom: 48 }}>
        <div style={{ width: 170, fontFamily: F.body, fontSize: 40, color: C.slate }}>{r.label}</div>
        <div style={{ flex: 1, height: 120, position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, width: `${(r.value / max) * 82 * p}%`, background: color, borderRadius: 8 }} />
          <div
            style={{
              position: "absolute", top: 0, bottom: 0, display: "flex", alignItems: "center",
              left: `calc(${(r.value / max) * 82 * p}% + 28px)`, fontFamily: F.display, fontWeight: 800,
              fontSize: 96, color: C.paper, fontVariantNumeric: "tabular-nums",
            }}
          >
            {countUp(f, at, r.value, 30)}{unit}
          </div>
        </div>
      </div>
    );
  };
  return (
    <SceneFrame frames={frames} title={scene.title} source={scene.source}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
        {row(a, 10, C.line)}
        {row(b, 34, bColor)}
        <div style={{ ...enter(f, 70), marginLeft: 206 }}>
          <span style={{ fontFamily: F.display, fontWeight: 800, fontSize: 64, color: bColor }}>
            {change > 0 ? "+" : ""}{change}%
          </span>
          <span style={{ fontFamily: F.body, fontSize: 36, color: C.slate, marginLeft: 20 }}>
            {scene.improving ? (good ? "fewer, in the right direction" : "more") : "in one year"}
          </span>
        </div>
      </div>
    </SceneFrame>
  );
};
