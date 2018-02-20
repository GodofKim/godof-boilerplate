import * as React from 'react'
import * as logo from './logo.svg'
import Button from 'components/atoms/Button'

class App extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} width="100px" />
        <Button backgroundColor="#fff">Hello World</Button>
      </div>
    )
  }
}

export default App
