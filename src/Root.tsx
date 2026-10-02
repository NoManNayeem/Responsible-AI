import { Composition } from "remotion";
import { H, W } from "./theme";
import { FPS, SCRIPT, totalFrames } from "./timing";
import { Video } from "./Video";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="ResponsibleAI"
      component={Video}
      durationInFrames={totalFrames(-1)}
      fps={FPS}
      width={W}
      height={H}
      defaultProps={{ chapter: -1 }}
    />
    {SCRIPT.chapters.map((name, i) => (
      <Composition
        key={i}
        id={`Chapter-${String(i).padStart(2, "0")}`}
        component={Video}
        durationInFrames={totalFrames(i)}
        fps={FPS}
        width={W}
        height={H}
        defaultProps={{ chapter: i }}
      />
    ))}
  </>
);
