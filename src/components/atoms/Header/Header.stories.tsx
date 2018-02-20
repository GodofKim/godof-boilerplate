import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Header from './Header'

storiesOf('Header', module).add('default', () => (
  <Header>Welcome to the World</Header>
))
