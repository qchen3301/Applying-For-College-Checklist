import React, { Component } from 'react'
import ActionItem from './ActionItem'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'




export default class ActionItems extends Component {

  handleChange = (name) => (event) => {
    this.setState({[name]: event.target.checked})
  }

  render() {
    //TERNARY TO WAIT FOR PROPS BEFORE RENDERING INTO COMPONENT
    const items = this.props.actionItems === undefined ? "" :
      this.props.actionItems.map((item, i) => {
        return (
          <div key={i}>
            <ActionItem 
            item={item} 
            handleDeleteActionItem = {this.props.handleDeleteActionItem}/>
        </div> )
      })
    //END TERNARY BLOCK
    return (
      <div>
        --------------------------------<br />
          {items}
          <button>Add New Action Items List</button>
      </div>
    )
  }
}

