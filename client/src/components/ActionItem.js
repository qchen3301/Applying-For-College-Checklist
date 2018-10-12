import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledInputSubmit = styled.input`
  background: white;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
const StyledButton = styled.button`
  background: white;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

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
      <StyledDiv>
        <form onSubmit={this.handleSubmit}>
            <Paper elevation={5} style={{padding: 14, maxWidth: 700}}>
            <h1>{this.props.item.nameOfSchool}</h1>
            Application: 
            <Checkbox checked={this.state.applicationCheck} onChange={this.handleChange('applicationCheck')} value="applicationCheck" />
            <br />
            Transcript: 
            <Checkbox checked={this.state.transcriptCheck} onChange={this.handleChange('transcriptCheck')} value="transcriptCheck" />
            <br />
            Letter Of Recommendation: 
            <Checkbox checked={this.state.letterOfRecommendationCheck} onChange={this.handleChange('letterOfRecommendationCheck')} value="letterOfRecommendationCheck" />
            <br />
            AP Scores: 
            <Checkbox checked={this.state.apScoresCheck} onChange={this.handleChange('apScoresCheck')} value="apScoresCheck" />
            <br />
            SAT Scores: 
            <Checkbox checked={this.state.satScoresCheck} onChange={this.handleChange('satScoresCheck')} value="satScoresCheck" />
            <br />
            ACT Scores: 
            <Checkbox checked={this.state.actScoresCheck} onChange={this.handleChange('actScoresCheck')} value="actScoresCheck" />
            <br />
            Entrance Essay:
            <Checkbox checked={this.state.essayCheck} onChange={this.handleChange('essayCheck')} value="essayCheck" />
            <br />
            FASFA: 
            <Checkbox checked={this.state.fasfaCheck} onChange={this.handleChange('fasfaCheck')} value="fasfaCheck" />
            <br />
            <StyledInputSubmit type="submit" name="submitList" value="Save My Checklist"/>
            <StyledButton onClick={()=> this.props.handleDeleteActionItem(this.props.item._id)}>
                Delete This Action Item List
            </StyledButton>
            </Paper>
        </form>
      </StyledDiv>
    )
  }
}
