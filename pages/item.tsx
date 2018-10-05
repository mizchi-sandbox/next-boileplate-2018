import React from "react";

export default class Item extends React.Component<any> {
  static async getInitialProps({ query }: any) {
    return query;
  }
  render() {
    return (
      <div>
        <h1>Item</h1>
        <div>{JSON.stringify(this.props)}</div>
      </div>
    );
    // this.props.url.query.slug
  }
}
