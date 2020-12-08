import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ListView from './pages/ListView';
import DetailView from './pages/DetailView';
import ErrorView from './pages/ErrorView';


function App() {
  return (
    // Placed in switch to make sure only when renders
    <Switch>
      {/* Redirect the homepage requests to list page as their is no homepage at the moment */}
      <Redirect exact from="/" to="/list" />
      <Route exact path="/list"  component={ListView} />
      <Route exact path="/product" component={DetailView} />
      <Route path="*" component={ErrorView} />
    </Switch>
  );
};

export default App;
