import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'

storiesOf('Button', module).add('default', () => (
  <Button backgroundColor="rgb(242, 165, 189)">Hello</Button>
))
