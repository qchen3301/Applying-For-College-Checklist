import React, { Component } from 'react'
import axios from 'axios'
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
const StyledButton = styled.button`
  background: white;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

export default class EditStudent extends Component {
    state = {
        studentInfo: {
            firstName: this.props.studentInfo.firstName,
            lastName: this.props.studentInfo.lastName,
            grade: this.props.studentInfo.grade,
            highSchool: this.props.studentInfo.highSchool
        }
    }
    handleChange = (event) => {
        const studentInfo = {...this.state.studentInfo}
        studentInfo[event.target.name] = event.target.value
        this.setState({studentInfo})
    }
    handleSubmit = async () => {
        //make an axios put request
        await axios.put(`/api/students/${this.props.studentInfo._id}`, this.state.studentInfo)
        //call the store student function
        this.props.storeStudent()
        //call function that that toggles display
        this.props.changeView()
    }
  render() {
    return (
      <Paper elevation={3} style={{padding: 14}}>
        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
        <TextField id='outlined-name' label='First Name' name='firstName' value={this.state.studentInfo.firstName} onChange={this.handleChange}/><br/>
        <TextField id='outlined-name' label='Last Name' name='lastName' value={this.state.studentInfo.lastName} onChange={this.handleChange}/><br/>
        <TextField id='outlined-number' label='Grade' name='grade' value={this.state.studentInfo.grade} onChange={this.handleChange}/><br/>
        <TextField id='outlined-name' label='High School' name='highSchool' value={this.state.studentInfo.highSchool} onChange={this.handleChange}/><br/>
        <StyledInputSubmit type='submit' value='Finish Editing'/> 
        <StyledButton>Cancel</StyledButton>
        </form>
      </Paper>
    )
  }
}
