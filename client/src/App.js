import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Student from './components/Student'


export default class App extends Component {
  render() {
    const studentComponent = (props) => <Student {...props} />
    return (
      <div>
      <Router>
        <Switch>
          <Route exact path= '/' component={Home} />
          <Route exact path= '/login' component={Login}/> 
          <Route exact path= '/student/:studentId' render={studentComponent} />
        </Switch>
      </Router>
      </div>
    );
  }
}