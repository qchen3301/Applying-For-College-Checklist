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
    //take it
    const newStudent = {...this.state.newStudent}
    //change it???????
    newStudent[event.target.adduser] = event.target.value
    //thats it boi...get in thar nice and DEEP like
    this.setState({newStudent})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post('/api/students', this.state.newStudent)
    //take it
    const students = [...this.state.students]
    //change eeeet
    students.push(response.data)
    //put it back
    this.setState({students})
  }
  render() {
    const studentsList = this.state.students.map((student, i) => {
      return (
        <div>
        <Link to={`/students/${student._id}`} key={i}>
          Name: {student.username}
        </Link>
        </div>
      )
    })
    return (
      <div>
        <h1>Login Page</h1>
        <p>{studentsList}</p>
        <form onSubmit={this.handleSubmit}>
          <input
          type='text'
          name='adduser'
          value={this.state.newStudent.username}
          placeholder = 'enter a username'
          onChange={this.handleChange} />
          <input 
          type = 'text'
          name = 'adduser'
          value = {this.state.newStudent.grade}
          placeholder = 'enter your grade (9-12)'
          maxLength = '6'
          onChange = {this.handleChange} />
          <input
          type = 'text'
          name = 'adduser'
          value = {this.state.newStudent.lastName}
          placeholder = 'enter your family name'
          onChange = {this.handleChange} />
          <input 
          type = 'text'
          name = 'adduser'
          value = {this.state.newStudent.firstName}
          placeholder = 'enter your given name'
          onChange = {this.handleChange} />
          <input 
          type = 'text'
          name = 'adduser'
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
