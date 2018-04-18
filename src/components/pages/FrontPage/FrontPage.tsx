import * as React from 'react'
import { Component } from 'react'
import styled from 'styled-components'
import Header from 'components/atoms/Header'
import Button from 'components/atoms/Button'
import * as logo from './logo.svg'

const Wrapper = styled.div``

const Banner = styled.div`
  background-color: black;
  text-align: center;
  padding: 30px;
`

interface FrontPageProps {
  title: string
}

class FrontPage extends Component<FrontPageProps> {
  render() {
    return (
      <Wrapper>
        <Banner>
          <img src={logo} width="100px" />
          <Header>{this.props.title}</Header>
          <Button backgroundColor="#eab">button</Button>
        </Banner>
      </Wrapper>
    )
  }
}

export default FrontPage
