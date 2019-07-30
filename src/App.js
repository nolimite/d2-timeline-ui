import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
