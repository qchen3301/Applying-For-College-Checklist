import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core'

export default class Home extends Component {
  render() {
    return (
      <div>

        <Link to='/login'>Continue</Link>
      </div>
    )
  }
}