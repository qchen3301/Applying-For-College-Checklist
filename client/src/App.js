import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import Home from './components/Home'
// import Login from '.components/Login'
// import School from './components/School'

class App extends Component {
  render() {
    return (
      <div>
        Smoketh druggs fortenitely
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Login}/> */}  
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
