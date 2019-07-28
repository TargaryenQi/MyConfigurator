import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layout";
import Body from "./Body/index";
import { steps, subSteps } from "../Store";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Body subSteps={subSteps} />
        <Footer steps={steps} />
      </Fragment>
    );
  }
}
