import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

export default () => injectGlobal`
  ${styledNormalize}

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`
