import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { RouterStore } from 'mobx-react-router'
import FrontPage from 'components/pages/FrontPage'

interface FrontPageContainerProps {
  routing?: RouterStore
}

@inject('routing')
@observer
class FrontPageContainer extends React.Component<FrontPageContainerProps> {
  render() {
    return <FrontPage title="Hello WOORLD" />
  }
}

export default FrontPageContainer
