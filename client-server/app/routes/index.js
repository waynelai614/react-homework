import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import MainSectionContainer from '../containers/MainSectionContainer';
import UpdatePageContainer from '../containers/UpdatePageContainer';

export const EDIT_PAGE_PATH = '/edit/:id';

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={MainSectionContainer} />
      <Route path="/create" component={UpdatePageContainer} />
      <Route path={EDIT_PAGE_PATH} component={UpdatePageContainer} />
    </Switch>
  </Router>
);