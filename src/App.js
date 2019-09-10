import React, { Component, Suspense } from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Movies from "./components/Movies";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Suspense fallback={<div>Loading</div>}>
        <Layout>
          <Route exactpath="/" component={Movies} />
        </Layout>
      </Suspense>
    );
  }
}
