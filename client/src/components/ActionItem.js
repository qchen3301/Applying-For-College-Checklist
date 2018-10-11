import React, { Component } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import axios from 'axios'

export default class ActionItem extends Component {
    state = {
        applicationCheck: false,
        transcriptCheck: false,
        letterOfRecommendationCheck: false,
        apScoresCheck: false,
        satScoresCheck: false,
        actScoresCheck: false,
        essayCheck: false,
        fasfaCheck: false
    }

    handleChange = (name) => async (event) => {
        this.setState({ [name]: event.target.checked})
    }

    handleSubmit = async () => {
        await axios.put(`/api/students/${this.props.studentId}/actionItems/${this.props.item._id}`, this.state)
    }

  render() {
    return (
      <div>
        <h1>{this.props.item.nameOfSchool}</h1>
        <button onClick={()=> this.props.handleDeleteActionItem(this.props.item._id)}>
            Delete This Action Item List
        </button>
        <br />
        <form onSubmit={this.handleSubmit}>
        Application: 
        {this.props.item.application} 
        <Checkbox 
            checked={this.state.applicationCheck}
            onChange={this.handleChange('applicationCheck')}
            value="applicationCheck" />
        <br />
        Transcript: 
        {this.props.item.transcript}
        <Checkbox 
            checked={this.state.transcriptCheck}
            onChange={this.handleChange('transcriptCheck')}
            value="transcriptCheck" />
        <br />
        Letter Of Recommendation: 
        {this.props.item.letterOfRecommendation}
        <Checkbox 
            checked={this.state.letterOfRecommendationCheck}
            onChange={this.handleChange('letterOfRecommendationCheck')}
            value="letterOfRecommendationCheck" />
        <br />
        AP Scores: {this.props.item.apScores}
        <Checkbox 
            checked={this.state.apScoresCheck}
            onChange={this.handleChange('apScoresCheck')}
            value="apScoresCheck" />
        <br />
        SAT Scores: {this.props.item.satScores}
        <Checkbox 
            checked={this.state.satScoresCheck}
            onChange={this.handleChange('satScoresCheck')}
            value="satScoresCheck" />
        <br />
        ACT Scores: 
        {this.props.item.actScores}
        <Checkbox 
            checked={this.state.actScoresCheck}
            onChange={this.handleChange('actScoresCheck')}
            value="actScoresCheck" />
        <br />
        Entrance Essay:
        {this.props.item.essay}
        <Checkbox 
            checked={this.state.essayCheck}
            onChange={this.handleChange('essayCheck')}
            value="essayCheck" />
        <br />
        FASFA: 
        {this.props.item.fasfa}
        <Checkbox 
            checked={this.state.fasfaCheck}
            onChange={this.handleChange('fasfaCheck')}
            value="fasfaCheck" />
        <br />
        <input type="submit" name="submitList" value="Save My Checklist"/>
        <br/><br/>
        </form>
      </div>
    )
  }
}
