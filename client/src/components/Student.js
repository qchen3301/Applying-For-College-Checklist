import React, { Component } from 'react'
import axios from 'axios'
import ActionItems from './ActionItems'
import EditStudent from './EditStudent'

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
        {this.state.viewMode ? (
        <div>
          <h2>{this.state.student.firstName} {this.state.student.lastName}</h2> <br /> 
          <h2>{this.state.student.highSchool} Grade {this.state.student.grade}</h2> <br />
          <button onClick={this.changeView}>Show Edit</button>
        </div>) : 
          <EditStudent 
          studentInfo = {this.state.student}
          storeStudent = {this.storeStudent}
          changeView = {this.changeView} 
          /> }
        <div>
          <button onClick={() => this.handleDelete(this.state.student._id)}>DELETE</button>
        </div>
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