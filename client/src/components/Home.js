import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export default class Home extends Component {
  render() {
    return (
      <StyledDiv>
        <Link to='/login'><img src="https://raw.githubusercontent.com/qchen3301/Applying-For-College-Checklist/master/assets/splash.jpg" alt="COLLEGE"/></Link>
      </StyledDiv>
    )
  }
}