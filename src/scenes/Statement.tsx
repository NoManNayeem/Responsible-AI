import { useCurrentFrame } from "remotion";
import { SceneFrame } from "../components/SceneFrame";
import { enter, lin } from "../components/anim";
import { C, F } from "../theme";
import { SceneProps } from "../types";

// Headline revealed word by word: the one orchestrated moment per statement.
export const Statement: React.FC<SceneProps> = ({ scene, frames }) => {
  const f = useCurrentFrame();
  const ws: string[] = scene.headline.split(" ");
  const per = Math.min(6, Math.max(2, Math.floor((frames * 0.35) / ws.length)));
  const big = scene.final ? 132 : ws.length > 9 ? 92 : 112;
  return (
    <SceneFrame frames={frames} source={scene.source}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
        <div
          style={{
            fontFamily: F.display, fontWeight: 800, fontSize: big, lineHeight: 1.02,
            letterSpacing: -3, color: C.paper, maxWidth: 1560,
            textAlign: scene.final ? "center" : "left", alignSelf: scene.final ? "center" : "auto",
          }}
        >
          {ws.map((w, i) => {
            const at = 8 + i * per;
            return (
              <span key={i} style={{ display: "inline-block", marginRight: "0.24em", opacity: lin(f, at, at + 8), transform: `translateY(${(1 - lin(f, at, at + 10)) * 24}px)` }}>
                {w}
              </span>
            );
          })}
        </div>
        {scene.sub && (
          <div
            style={{
              fontFamily: F.body, fontSize: 40, lineHeight: 1.35, color: C.slate, marginTop: 44,
              maxWidth: 1300, borderLeft: `6px solid ${C.amber}`, paddingLeft: 28,
              ...enter(f, 12 + ws.length * per),
            }}
          >
            {scene.sub}
          </div>
        )}
      </div>
    </SceneFrame>
  );
};
