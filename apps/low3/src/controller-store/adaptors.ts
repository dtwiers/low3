import { createAsyncAdaptor } from '@brandingbrand/cargo-hold';
import { createLens } from '@brandingbrand/standard-lens';
import { ControllerState } from './types';

const controllerStateLensCreator = createLens<ControllerState>();

export const stateAsyncAdaptor = createAsyncAdaptor({
  actionKey: 'load.async',
  lens: controllerStateLensCreator.fromPath(),
});
// export const presetsAsyncAdaptor = createAsyncAdaptor({
//   actionKey: 'presets.async',
//   lens: controllerStateLensCreator.fromPath('presets'),
// });

// export const presetsEntityAdaptor = createEntityAdaptor({
//   idSelector: defaultIdSelector,
//   lens: controllerStateLensCreator
//     .fromPath('presets')
//     .withInnerLens(presetsAsyncAdaptor.payloadLens),
// });

// export const stagedAsyncAdaptor = createAsyncAdaptor({
//   actionKey: 'staged.async',
//   lens: controllerStateLensCreator.fromPath('stagedBar'),
// });

// export const liveAsyncAdaptor = createAsyncAdaptor({
//   actionKey: 'live.async',
//   lens: controllerStateLensCreator.fromPath('liveBar'),
// });
