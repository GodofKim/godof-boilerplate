import * as React from 'react'
import { storiesOf } from '@storybook/react'
import FrontPage from './FrontPage'

const props = {
  title: 'Come back home',
}

storiesOf('FrontPage', module).add('default', () => <FrontPage {...props} />)
