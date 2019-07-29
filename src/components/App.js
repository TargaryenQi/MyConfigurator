import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layout";
import Body from "./Body/index";
import { ConfiguratorProvider } from "../contexts/configurator.context";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <ConfiguratorProvider>
          <Body />
          <Footer />
        </ConfiguratorProvider>
      </Fragment>
    );
  }
}
