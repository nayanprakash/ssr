import React from 'react'
import Loadable from 'react-loadable'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Header from './common/header';

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
    <Router>
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Homepage}></Route>
                <Route path="/contact" component={ContactPage}></Route>
                <Route path="/about" component={AboutPage}></Route>
            </Switch>
        </>
    </Router>
);

export default Routes;