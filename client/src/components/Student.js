import React, { Component } from 'react'
import axios from 'axios'
import ActionItems from './ActionItems'
import EditStudent from './EditStudent';

// import {Link} from 'react-router-dom'

//create 

export default class Student extends Component {
  state = {
    student: {},
    viewMode: true
  }

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

  changeView = () => {
    this.setState({viewMode: !this.state.viewMode})
  }
  handleDelete = async (studentId) => {
    await axios.delete(`/api/students/${studentId}`)
    this.props.history.push(`/login`)
  }

  handleChange = (event) => {
    const student = {...this.state.student}
    student[event.target.name] = event.target.value
    this.setState({student})
  }

  render() {
    
    return (
      <div>
        {this.state.viewMode ? (
        <div>
          {this.state.student.firstName} {this.state.student.lastName} <br />
          {this.state.student.highSchool} Grade {this.state.student.grade} <br />
          <button onClick={this.changeView}>Show Edit</button>
        </div>) : 
          <EditStudent 
          studentInfo = {this.state.student}
          storeStudent = {this.storeStudent}
          changeView = {this.changeView} 
          /> }



        <div>
          <button onClick={() => this.handleDelete(this.state.student._id)}>delete</button>
        </div>
        <div>
         <ActionItems actionItems={this.state.student.actionItems}/>
        </div>
      </div>

    )
  }
}

//axios.get(`/api/students/${this.props.match.params.studentId}`)
//  .then(
//  (res) =>  console.log(res)
//)