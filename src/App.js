import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Company from './components/Company';
import CompanyDetails from './components/CompanyDetails';

export const customHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <Router history={customHistory}>
        <Switch>
          <Route exact path="/" component={Company}></Route>
          <Route exact path="/ozp-ui" component={Company}></Route>
          <Route path="/companies/:name" component={CompanyDetails}></Route>
        </Switch>
      </Router>
    )
  }
}
