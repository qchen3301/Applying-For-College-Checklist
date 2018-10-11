import React, { Component } from 'react'

export default class ActionItems extends Component {

 
  render() {

   const items = this.props.actionItems === undefined ? "" : this.props.actionItems.map((item, i) => {
      return (
        <div key={i}>
        {item._id}<br />
        {item.nameOfSchool}<br />
        {item.transcript}<br />
        {item.letterOfRecommendation}<br />
        {item.apScores}<br />
        {item.satScores}<br />
        {item.actScores}<br />
        {item.essay}<br />
        {item.fasfa}<br />
        {item.progress}<br />
        </div>
      )
     }) 

     
    return (
      <div>
        --------------------------------<br />
        Hello World From ActionItems!!! <br/>
        {items}
      </div>
    )
  }
}
