import { AbsoluteFill, useCurrentFrame } from "remotion";
import { C } from "../theme";

// Quiet blueprint grid that drifts very slowly; keeps the frame alive without distracting.
export const Background: React.FC = () => {
  const f = useCurrentFrame();
  const off = (f * 0.15) % 64;
  return (
    <AbsoluteFill style={{ background: C.ink }}>
      <AbsoluteFill
        style={{
          backgroundImage: `radial-gradient(${C.line} 1.4px, transparent 1.4px)`,
          backgroundSize: "64px 64px",
          backgroundPosition: `${off}px ${off}px`,
          opacity: 0.55,
        }}
      />
      <AbsoluteFill
        style={{ background: `radial-gradient(ellipse at 30% 40%, transparent 40%, ${C.ink} 100%)` }}
      />
    </AbsoluteFill>
  );
};
