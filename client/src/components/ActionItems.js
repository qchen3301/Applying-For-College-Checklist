import React, { Component } from 'react'
import ActionItem from './ActionItem'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

const StyledInputSubmit = styled.input`
  background: white;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default class ActionItems extends Component {
  state = {
    newActionItemList: {
      nameOfSchool: ''
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
            studentId = {this.props.studentId}
            />
         )
      })
    //END TERNARY BLOCK
    return (
      <div>
      <StyledDiv>
        <Paper elevation={4} style={{padding: 14, maxWidth: 500, maxHeight: 100}}>
          <form onSubmit={()=>this.props.handleAddActionItem(this.state.newActionItemList)}> 
            <TextField id='outlined-name' label='University' name='nameOfSchool' value={this.state.newActionItemList.nameOfSchool} onChange={this.handleChange}/><br />
            <StyledInputSubmit type='Submit' value='Add A New Action Items List For This University'/>
          </form>
        </Paper>
      </StyledDiv>
      <br /> <br />
      {items}
      </div>
    )
  }
}

