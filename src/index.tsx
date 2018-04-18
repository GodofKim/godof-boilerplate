import * as React from 'react'
import * as ReactDOM from 'react-dom'

// React Router setup
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'mobx-react'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import { Router, Route } from 'react-router'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import setGlobalStyles from './global-styles'

setGlobalStyles()

const browserHistory = createBrowserHistory()
const routingStore = new RouterStore()

const stores = {
  // Key can be whatever you want
  routing: routingStore,
}

const history = syncHistoryWithStore(browserHistory, routingStore)

const rootComponent = (
  <Provider {...stores}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
)

ReactDOM.render(rootComponent, document.getElementById('root') as HTMLElement)
registerServiceWorker()
