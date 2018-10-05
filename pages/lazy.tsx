import React from "react";

export default class Lazy extends React.Component<any> {
  static async getInitialProps(_ctx: any) {
    console.log("start lazy loading");
    await new Promise(r => setTimeout(r, 1000));
    return { p: 1 };
  }
  render() {
    return (
      <div>
        <h1>lazy loaded: {this.props.p}</h1>
      </div>
    );
  }
}
