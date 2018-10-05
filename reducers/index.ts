import { combineReducers } from "redux";
import router, { State as RouterState } from "./router";
import foo, { State as FooState } from "./foo";

export type RootState = {
  router: RouterState;
  foo: FooState;
};

export default combineReducers({
  router,
  foo
});
