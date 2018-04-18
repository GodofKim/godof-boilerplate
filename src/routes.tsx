import * as React from 'react'
import { Component } from 'react'
import { inject } from 'mobx-react'
import { Route } from 'react-router'

import FrontPageContainer from 'containers/FrontPageContainer'

interface RoutesProps {}

@inject('routing')
class Routes extends Component<RoutesProps> {
  render() {
    return (
      <>
        <Route path="/" exact={true} component={FrontPageContainer} />
      </>
    )
  }
}

export default Routes
