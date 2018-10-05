import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "reducers";
import withStore from "../components/utils/withStore";

export default withStore(async (store: any) => {
  store.dispatch({ type: "FOO", payload: "foo-on-connected" });
})((_props: any) => {
  return (
    <div>
      <h1>Connceted</h1>
      <Connected />
    </div>
  );
});

const Connected = connect((s: RootState) => s.foo)(props => {
  return (
    <div>
      <span>store state</span>
      <pre>
        <code>{JSON.stringify(props)}</code>
      </pre>
    </div>
  );
});
