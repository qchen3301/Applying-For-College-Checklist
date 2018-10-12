import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ActionItems from './ActionItems'
import EditStudent from './EditStudent'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
  font-family: 'PT Sans', sans-serif;
  font-size: 2em;
`
const StyledButton = styled.button`
  background: white;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

export default class Student extends Component {
  state = {
    student: {},
    viewMode: true
  }
  //BLOCK 1 - CALL API AND RETRIEVE INFORMATION
  componentDidMount = async () => {
    await this.getStudent()
  }
  getStudent = async () => {
    const response = await axios.get(`/api/students/${this.props.match.params.studentId}`)
    let student = response.data
    this.storeStudent(student)
  }
  storeStudent = (student) => {
    this.setState({ student })
  }
  //END BLOCK 1
  //BLOCK 2 - TERNARY TO UPDATE STUDENT MODEL
  changeView = () => {
    this.setState({viewMode: !this.state.viewMode})
  }
  //END BLOCK 2
  //BLOCK 3 - HANDLE** FUNCTIONS ON STATE CHANGE
  handleDelete = async (studentId) => {
    await axios.delete(`/api/students/${studentId}`)
    this.props.history.push(`/login`)
  }  
  handleChange = (event) => {
    const student = {...this.state.student}
    student[event.target.name] = event.target.value
    this.setState({student})
  }
  //END BLOCK 3
  //BLOCK 4 - FUNCTIONS TO PASS DOWN TO ACTIONITEMS COMPONENT
  handleAddActionItem = async (newActionItemsList) => {   
    const studentId = this.props.match.params.studentId
    await axios.post(`/api/students/${studentId}/actionItems`, newActionItemsList)
    await this.getStudent()
  }
  handleDeleteActionItem = async (actionItemId) => { 
    const studentId = this.props.match.params.studentId
    axios.delete(`/api/students/${studentId}/actionItems/${actionItemId}`)
    this.getStudent()
  }
  //END BLOCK 4
  render() {
    return (
      <div>
        {/* BEGIN TERNARY BLOCK TO SWITCH BETWEEN VIEW STUDENT INFORMATION AND EDIT STUDENT INFORMATION */}
        {this.state.viewMode ? (
          <StyledDiv>
            <Paper elevation={3} style={{padding: 14}}>
              {this.state.student.firstName} {this.state.student.lastName} <br />
              {this.state.student.highSchool} <br/>
              Grade {this.state.student.grade} <br />
              <StyledButton onClick={this.changeView}>Edit Student Information</StyledButton>
              <StyledButton onClick={() => this.handleDelete(this.state.student._id)}>DELETE</StyledButton>
            </Paper>
          </StyledDiv>) : 
          <EditStudent 
          studentInfo = {this.state.student}
          storeStudent = {this.storeStudent}
          changeView = {this.changeView} 
          /> }
        {/* END TERNARY BLOCK */}
        <div>
          <ActionItems
          studentId = {this.props.match.params.studentId} 
          actionItems = {this.state.student.actionItems} 
          handleDeleteActionItem = {this.handleDeleteActionItem} 
          handleAddActionItem = {this.handleAddActionItem}/>
        </div>
      </div>
    )
  }
}