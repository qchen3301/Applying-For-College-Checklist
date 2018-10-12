import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default class Home extends Component {
  render() {
    return (
      <StyledDiv>
        <img src="" alt="COLLEGE"/>
        <Link to='/login'>Continue</Link>
      </StyledDiv>
    )
  }
}