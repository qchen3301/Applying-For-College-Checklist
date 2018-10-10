import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

//create 

export default class Student extends Component {
  state = {
    student: {},
    actionItems: []
  }

  getStudent = async () => {
    const response = await axios.get(`/api/students/${this.props.match.params.studentId}`)
    console.log(response)
    let student = response.data
    this.setState({student, actionItems:response.data.actionItems})
  }

  componentDidMount = () => {
    this.getStudent()
  }

  handleDelete = async (studentId) => {
    await axios.delete(`/api/students/${studentId}`)
    this.props.history.push(`/login`)
  }

  render() {

    return (
      <div>
        <div>
        {this.state.student.firstName} {this.state.student.lastName} <br />
        {this.state.student.highSchool} Grade {this.state.student.grade}
        </div>
        <div>
          <button onClick={() => this.handleDelete(this.state.student._id)}>delete</button>
          {/* <Link to={'/login'} onClick={()=> this.handleDelete(this.state.student._id)}>Delete this student and return to login</Link> */}
        </div>
      </div>

    )
  }
}

//axios.get(`/api/students/${this.props.match.params.studentId}`)
//  .then(
//  (res) =>  console.log(res)
//)