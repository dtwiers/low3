import { Effect, ofType } from "@brandingbrand/cargo-hold";
import { actionCreators } from "./action-creators";
import { ControllerState } from "./types";

// export const effect: Effect<ControllerState> = (action$, state$) => action$.pipe(
//   ofType(actionCreators.setVisible)
// )