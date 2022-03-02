import { createActionCreator } from '@brandingbrand/cargo-hold';
import { BarInfo } from '../models/screen-state';
import { SavedBar } from './types';

export const actionCreators = {
  retrievePresets: createActionCreator({
    actionKey: 'retrievePresets',
    callback: () => ({}),
  }),
  addPreset: createActionCreator({
    actionKey: 'addPreset',
    callback: (preset: BarInfo) => ({ preset }),
  }),
  removePreset: createActionCreator({
    actionKey: 'removePreset',
    callback: (presetKey: BarInfo) => ({ presetKey }),
  }),
  setVisible: createActionCreator({
    actionKey: 'setVisible',
    callback: (visible: boolean) => ({ visible }),
  }),
  selectPreset: createActionCreator({
    actionKey: 'selectPreset',
    callback: (presetId: string) => ({ presetId }),
  }),
  unselectPreset: createActionCreator({
    actionKey: 'unselectPreset',
    callback: () => ({}),
  }),
  stageBar: createActionCreator({
    actionKey: 'stage',
    callback: (bar: BarInfo | SavedBar) => ({ bar }),
  }),
  goLive: createActionCreator({
    actionKey: 'goLive',
    callback: () => ({}),
  }),
};
