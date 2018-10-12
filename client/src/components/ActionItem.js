import React, { Component } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import axios from 'axios'

export default class ActionItem extends Component {
    state = {
        applicationCheck: this.props.item.application,
        transcriptCheck: this.props.item.transcript,
        letterOfRecommendationCheck: this.props.item.letterOfRecommendation,
        apScoresCheck: this.props.item.apScores,
        satScoresCheck: this.props.item.satScores,
        actScoresCheck: this.props.item.actScores,
        essayCheck: this.props.item.essay,
        fasfaCheck: this.props.item.fasfa
    }

    handleChange = (name) => async (event) => {
        this.setState({ [name]: event.target.checked})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        await axios.put(`/api/students/${this.props.studentId}/actionItems/${this.props.item._id}`, this.state)
        console.log("is this even working???", this.state)
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
        <input type="submit" name="submitList" value="Save My Checklist"/>
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
        <br/><br/>
        </form>
      </div>
    )
  }
}
