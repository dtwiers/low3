import { AsyncState, EntityState } from '@brandingbrand/cargo-hold';
import { BarInfo } from '../models/screen-state';

export type SavedBar = BarInfo & { id: string };

export type ControllerState = AsyncState<
  {
    visible: boolean;
    presets: EntityState<SavedBar>;
    selectedId?: string;
    selectedBar: BarInfo;
    stagedBar: BarInfo | SavedBar;
    liveBar: BarInfo | SavedBar;
  },
  string,
  undefined
>;
