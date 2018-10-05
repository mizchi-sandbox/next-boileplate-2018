import withRedux from "next-redux-wrapper";
import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import createStore from "../store/create";
import Header from "../components/organisms/Header";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

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
            <Component {...pageProps} />
          </div>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(MyApp);
