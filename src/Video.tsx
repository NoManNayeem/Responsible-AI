import { AbsoluteFill, Audio, Series, staticFile } from "remotion";
import { Background } from "./components/Background";
import { Captions } from "./components/Captions";
import { ChapterRail } from "./components/ChapterRail";
import { MUSIC, MUSIC_VOLUME, SHOW_CAPTIONS, VOICEOVER } from "./config";
import { SCENES } from "./scenes";
import { sceneFrames, scenesFor } from "./timing";

export type VideoProps = { chapter: number }; // -1 = full video

export const Video: React.FC<VideoProps> = ({ chapter }) => {
  const scenes = scenesFor(chapter);
  return (
    <AbsoluteFill>
      <Background />
      <Series>
        {scenes.map((s) => {
          const Comp = SCENES[s.type];
          const frames = sceneFrames(s);
          if (!Comp) throw new Error(`Unknown scene type "${s.type}" in scene ${s.id}`);
          return (
            <Series.Sequence key={s.id} durationInFrames={frames} name={s.id}>
              <Comp scene={s} frames={frames} />
              {SHOW_CAPTIONS && <Captions text={s.narration} frames={frames} />}
              {VOICEOVER && <Audio src={staticFile(`vo/${s.id}.mp3`)} />}
            </Series.Sequence>
          );
        })}
      </Series>
      <ChapterRail scenes={scenes} />
      {MUSIC && <Audio src={staticFile("music.mp3")} volume={MUSIC_VOLUME} loop />}
    </AbsoluteFill>
  );
};
