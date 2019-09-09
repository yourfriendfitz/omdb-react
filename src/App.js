import React, { Component } from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Chart from "./components/Teleport";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exactpath="/" component={Chart} />
      </Layout>
    );
  }
}
