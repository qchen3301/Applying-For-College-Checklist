import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Login extends Component {
  state = {
    students:[],
    newStudent: {
      username:'',
      grade: '',
      lastName: '',
      firstName: '',
      highSchool: ''
    }
  }

  componentDidMount = async () => {
    const response = await axios.get('/api/students')
    this.setState({students: response.data})
  }

  handleChange = (event) => {
    const newStudent = {...this.state.newStudent}
    newStudent[event.target.name] = event.target.value
    this.setState({ newStudent })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post('/api/students', this.state.newStudent)
    const students = [...this.state.students]
    students.push(response.data)
    this.setState({students})
  }
  render() {
    const studentsList = this.state.students.map((student, i) => {
      return (
        <div key={i}>
        <Link to={`/students/${student._id}`}>
          Name: {student.username}
        </Link>
        </div>
      )
    })
    return (
      <div>
        <h1>Login Page</h1>
        <h3>{studentsList}</h3>
        <form onSubmit={this.handleSubmit}>
          <input
          type='text'
          name='username'
          value={this.state.newStudent.username}
          placeholder = 'enter a username'
          onChange={this.handleChange} />
          <input 
          type = 'text'
          name = 'grade'
          value = {this.state.newStudent.grade}
          placeholder = 'enter your grade (9-12)'
          maxLength = '6'
          onChange = {this.handleChange} />
          <input
          type = 'text'
          name = 'lastName'
          value = {this.state.newStudent.lastName}
          placeholder = 'enter your family name'
          onChange = {this.handleChange} />
          <input 
          type = 'text'
          name = 'firstName'
          value = {this.state.newStudent.firstName}
          placeholder = 'enter your given name'
          onChange = {this.handleChange} />
          <input 
          type = 'text'
          name = 'highSchool'
          value = {this.state.newStudent.highSchool}
          placeholder = 'enter your high school'
          onChange = {this.handleChange} />
          <input type='submit' value='Create New Student' />
        </form>
        Hello world from Login component!!!
      </div>
    )
  }
}
