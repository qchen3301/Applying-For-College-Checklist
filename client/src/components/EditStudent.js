import React, { Component } from 'react'
import axios from 'axios'

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
      <div>
        <form onSubmit={this.handleSubmit}>
        <input type='text' name='firstName' value={this.state.studentInfo.firstName} onChange={this.handleChange} />
        <br/>
        <input type='text' name='lastName' value={this.state.studentInfo.lastName} onChange={this.handleChange}/>
        <br />
        <input type='text' name='grade' value={this.state.studentInfo.grade} onChange={this.handleChange}/>
        <br />
        <input type='text' name='highSchool' value={this.state.studentInfo.highSchool} onChange={this.handleChange} />
        <br />
        <input type='submit' value='Finish Editing' /> 
        </form>
        <button>Cancel</button>
      </div>
    )
  }
}
