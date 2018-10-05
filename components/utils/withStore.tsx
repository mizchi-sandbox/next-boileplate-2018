import * as React from "react";

const withStore = (fn: any) => {
  return (Wrapped: any) => {
    return class extends React.Component {
      static async getInitialProps(ctx: any) {
        await fn(ctx.store);
      }
      render() {
        return <Wrapped {...this.props} />;
      }
    };
  };
};

export default withStore;
