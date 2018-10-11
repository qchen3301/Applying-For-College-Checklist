import React, { Component } from 'react'
import ActionItem from './ActionItem'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'

export default class ActionItems extends Component {
  state = {
    newActionItemList: {
      name: ''
    }
  }

  handleChange = (event) => {
    const newActionItemList = {...this.state.newActionItemList}
    newActionItemList[event.target.name] = event.target.value
    this.setState({newActionItemList})
  }

  render() {
    //TERNARY TO WAIT FOR PROPS BEFORE RENDERING INTO COMPONENT
    const items = this.props.actionItems === undefined ? "" :
      this.props.actionItems.map((item, i) => {
        return (
            <ActionItem 
            key={item._id}
            item={item} 
            handleDeleteActionItem = {this.props.handleDeleteActionItem}
            />
         )
      })
    //END TERNARY BLOCK
    return (
      <div>
        --------------------------------<br />
        <div>
            <form onSubmit={()=>this.props.handleAddActionItem(this.state.newActionItemList)}> 
                <input type='text' name='universityName' /><br />
                <input type='Submit' value='Add A New Action Items List For This University'/>
            </form>
        </div>
          {items}
      </div>
    )
  }
}

