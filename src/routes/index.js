import React from "react";
import Loadable from "react-loadable";
import { Switch, Route } from "react-router-dom";
import Header from "./common/header";

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ "./home/"),
  loading: () => <div>Loader...</div>
});
const ContactPage = Loadable({
  loader: () => import(/* webpackChunkName: "contact" */ "./common/contact"),
  loading: () => <div>Loader...</div>
});
const AboutPage = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ "./common/about"),
  loading: () => <div>Loader...</div>
});

const Routes = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  </>
);

export default Routes;
