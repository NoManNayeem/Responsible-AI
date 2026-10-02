import { SceneProps } from "../types";
import { BigStat } from "./BigStat";
import { Bars } from "./Bars";
import { Case } from "./Case";
import { Chapter } from "./Chapter";
import { Checklist } from "./Checklist";
import { Code } from "./Code";
import { Compare } from "./Compare";
import { Cards } from "./Cards";
import { Cycle } from "./Cycle";
import { Pyramid } from "./Pyramid";
import { Split } from "./Split";
import { Statement } from "./Statement";
import { Stats } from "./Stats";
import { Steps } from "./Steps";
import { Timeline } from "./Timeline";

export const SCENES: Record<string, React.FC<SceneProps>> = {
  chapter: Chapter,
  statement: Statement,
  bigstat: BigStat,
  compare: Compare,
  stats: Stats,
  bars: Bars,
  cards: Cards,
  steps: Steps,
  cycle: Cycle,
  pyramid: Pyramid,
  timeline: Timeline,
  case: Case,
  checklist: Checklist,
  split: Split,
  code: Code,
};
