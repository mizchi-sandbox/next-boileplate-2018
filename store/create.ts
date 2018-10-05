import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import promise from "redux-promise";
import reducer, { RootState } from "../reducers";

const configureStore = (state: RootState | undefined, _options: any) => {
  return createStore(reducer, state as any, applyMiddleware(logger, promise));
};

export default configureStore;
