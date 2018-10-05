import * as React from "react";

export default class Item extends React.Component<any> {
  static async getInitialProps(ctx: any) {
    return ctx.query;
  }
  render() {
    return (
      <div>
        <h1>Item</h1>
        <div>{JSON.stringify(this.props)}</div>
      </div>
    );
  }
}
