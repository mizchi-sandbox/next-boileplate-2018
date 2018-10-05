import { createStore } from "redux";
import reducer, { State } from "../reducers";

const configureStore = (state: State | undefined, _options: any) => {
  return createStore(reducer, state as any);
};

export default configureStore;
