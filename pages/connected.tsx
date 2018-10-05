import React from "react";
import { connect } from "react-redux";

export default class Connected extends React.Component<any> {
  static async getInitialProps(ctx: any) {
    ctx.store.dispatch({ type: "FOO", payload: "foo-on-connected" });
  }
  render() {
    return (
      <div>
        <h1>Connceted</h1>
        <ConnectedState />
      </div>
    );
  }
}

const ConnectedState = connect(s => s)(props => {
  return (
    <div>
      <span>store state</span>
      <pre>
        <code>{JSON.stringify(props)}</code>
      </pre>
    </div>
  );
});
