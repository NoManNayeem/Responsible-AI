import { useCurrentFrame } from "remotion";
import { SceneFrame } from "../components/SceneFrame";
import { lin } from "../components/anim";
import { C, F } from "../theme";
import { SceneProps } from "../types";

const KW = /\b(const|async|function|await|return|if|of|let|new)\b/;
const IS_KW = /^(const|async|function|await|return|if|of|let|new)$/;

// Minimal highlighter: comments, strings, keywords.
const Line: React.FC<{ text: string }> = ({ text }) => {
  const ci = text.indexOf("//");
  const code = ci >= 0 ? text.slice(0, ci) : text;
  const comment = ci >= 0 ? text.slice(ci) : "";
  const parts: React.ReactNode[] = [];
  code.split(/("[^"]*")/g).forEach((seg, i) => {
    if (seg.startsWith('"')) parts.push(<span key={i} style={{ color: C.teal }}>{seg}</span>);
    else
      seg.split(KW).forEach((w, j) =>
        parts.push(<span key={`${i}-${j}`} style={{ color: IS_KW.test(w) ? C.amber : C.paper }}>{w}</span>)
      );
  });
  return (
    <>
      {parts}
      {comment && <span style={{ color: C.sky }}>{comment}</span>}
    </>
  );
};

export const Code: React.FC<SceneProps> = ({ scene, frames }) => {
  const f = useCurrentFrame();
  const lines: string[] = scene.code.split("\n");
  const typed = lin(f, 10, frames * 0.6) * lines.length;
  return (
    <SceneFrame frames={frames} title={scene.title} source={scene.source}>
      <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
        <div style={{ width: "100%", background: "#0A1628", borderRadius: 14, padding: "36px 44px", border: `2px solid ${C.line}` }}>
          {lines.map((l, i) => {
            const vis = Math.max(0, Math.min(1, typed - i));
            const isGate = /approvals|deny\(|\?\? "critical"/.test(l);
            return (
              <div
                key={i}
                style={{
                  fontFamily: F.mono, fontSize: 27, lineHeight: 1.55, whiteSpace: "pre", opacity: vis,
                  background: isGate && vis >= 1 ? "rgba(244,180,58,0.10)" : "transparent",
                  borderLeft: `4px solid ${isGate && vis >= 1 ? C.amber : "transparent"}`, paddingLeft: 14,
                }}
              >
                <Line text={l || " "} />
              </div>
            );
          })}
        </div>
      </div>
    </SceneFrame>
  );
};
