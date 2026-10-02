import { AbsoluteFill, useCurrentFrame } from "remotion";
import { C, F, PAD } from "../theme";
import { enter, lin } from "./anim";

type Props = {
  frames: number;
  title?: string;
  source?: string;
  children: React.ReactNode;
};

// Shared scene chrome: cross-fade, title, source line. Content area ≈ y 250–900.
export const SceneFrame: React.FC<Props> = ({ frames, title, source, children }) => {
  const f = useCurrentFrame();
  const opacity = Math.min(lin(f, 0, 10), lin(f, frames - 10, frames, 1, 0));
  return (
    <AbsoluteFill style={{ opacity }}>
      {title && (
        <div
          style={{
            position: "absolute", left: PAD, top: 92, right: PAD,
            fontFamily: F.display, fontWeight: 800, fontSize: 64, lineHeight: 1.05,
            letterSpacing: -1.5, color: C.paper, ...enter(f, 2),
          }}
        >
          {title}
        </div>
      )}
      <div style={{ position: "absolute", left: PAD, right: PAD, top: title ? 230 : 120, bottom: 190 }}>
        {children}
      </div>
      {source && (
        <div
          style={{
            position: "absolute", right: PAD, bottom: 150, maxWidth: 900, textAlign: "right",
            fontFamily: F.body, fontSize: 20, color: C.slate, opacity: lin(f, 30, 50) * 0.85,
          }}
        >
          Source: {source}
        </div>
      )}
    </AbsoluteFill>
  );
};
