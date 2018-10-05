import withRedux from "next-redux-wrapper";
import App, { Container } from "next/app";
import * as React from "react";
import { Provider, connect } from "react-redux";
import createStore from "../store/create";
import Header from "../components/organisms/Header";
import Router from "next/router";
import { RootState } from "reducers";

const RouteController = connect((s: RootState) => ({
  routerLoading: s.router.loading
}))(
  class RouteController extends React.PureComponent<{
    dispatch: any;
    routerLoading: boolean;
  }> {
    _routeChangeStart = () => {
      this.props.dispatch({ type: "router:routing-started" });
      // TODO: Use suspense
    };
    _routeChangeComplete = () => {
      this.props.dispatch({ type: "router:routing-complete" });
    };
    componentDidMount() {
      Router.events.on("routeChangeStart", this._routeChangeStart);
      Router.events.on("routeChangeComplete", this._routeChangeComplete);
    }

    componentWillUnmount() {
      Router.events.off("routeChangeStart", this._routeChangeStart);
      Router.events.off("routeChangeComplete", this._routeChangeComplete);
    }

    render() {
      if (this.props.routerLoading) {
        return <span>Loading...</span>;
      }
      return this.props.children;
    }
  }
);

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  componentDidMount = () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .catch(err => console.error("Service worker registration failed", err));
    } else {
      console.log("Service worker not supported");
    }
  };

  render() {
    const { Component, pageProps } = this.props;

    // TODO: Cast correctly
    const { store } = this.props as any;

    return (
      <Container>
        <Provider store={store}>
          <div>
            <Header />
            <hr />
            <RouteController>
              <Component {...pageProps} />
            </RouteController>
          </div>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(MyApp);
