import { combineActionReducers } from '@brandingbrand/cargo-hold';
import { stateAsyncAdaptor } from './adaptors';
// import { liveAsyncAdaptor, presetsAsyncAdaptor, stagedAsyncAdaptor } from "./adaptors";

export const reducer = combineActionReducers(stateAsyncAdaptor.combinedReducer);
