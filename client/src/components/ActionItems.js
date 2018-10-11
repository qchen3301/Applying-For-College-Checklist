import React, { Component } from 'react'

export default class ActionItems extends Component {
 
  render() {
    //TERNARY TO WAIT FOR PROPS BEFORE RENDERING INTO COMPONENT
    const items = this.props.actionItems === undefined ? "" :
      this.props.actionItems.map((item, i) => {
        return (
          <div key={i}>
            {item.nameOfSchool}<br />
            Transcript: {item.transcript}<br />
            Letter Of Recommendation: {item.letterOfRecommendation}<br />
            AP Scores: {item.apScores}<br />
            SAT Scores: {item.satScores}<br />
            ACT Scores: {item.actScores}<br />
            Entrance Essay: {item.essay}<br />
            FASFA: {item.fasfa}<br />
            <br /><br />
        </div> )
      })
    //END TERNARY BLOCK
    return (
      <div>
        --------------------------------<br />
        {items}
      </div>
    )
  }
}
