import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45vh;
`
const StyledInputSubmit = styled.input`
  background: white;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
const StyledListFont = styled.div`
  font-family: 'PT Sans', sans-serif;
`

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
          <StyledListFont key={i}>
            <Link to={`/students/${student._id}`}>{student.username}<br /></Link>
          </StyledListFont>
      )
    })
    return (
      <div>
        <StyledDiv>
        <Paper elevation={2} style={{padding: 14}}>
          <Typography variant='h4'>
            <Typography variant='h5'>Select Student Account</Typography>
            {studentsList}
          </Typography>
        </Paper>
        </StyledDiv>
        <StyledDiv>
        <Paper elevation={2} style={{padding: 14}}>
        <Typography variant='h5'>Create New Student Account</Typography>
        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
            <TextField id='outlined-name' label='Username' name='username' value={this.state.newStudent.username} onChange={this.handleChange} /> <br />
            <TextField id='outlined-number' label='Grade' name='grade' value={this.state.newStudent.grade} maxLength='2' onChange={this.handleChange} /> <br />
            <TextField id='outlined-name' label='Last Name' name='lastName' value={this.state.newStudent.lastName} onChange={this.handleChange} /> <br />
            <TextField id='outlined-name' label='First Name' name='firstName' value={this.state.newStudent.firstName} onChange={this.handleChange} /> <br />
            <TextField id='outlined-name' label='High School' name='highSchool' value={this.state.newStudent.highSchool} onChange={this.handleChange} /> <br /> <br />
            <StyledInputSubmit type='submit' value='Create New Student' />
        </form>
        </Paper>
        </StyledDiv>
      </div>
    )
  }
}
