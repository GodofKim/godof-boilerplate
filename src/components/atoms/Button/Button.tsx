import styled, { css } from 'styled-components'
import { darken, complement, getLuminance } from 'polished'

interface ButtonProps {
  backgroundColor: string
}

const Button = styled.button`
  border: none;
  width: 150px;
  height: 35px;

  &:focus {
    outline: 0;
  }

  ${(p: ButtonProps) => {
    const vsWhite = complement(p.backgroundColor)

    if (getLuminance(vsWhite) > 4) {
      return css`
        background-color: ${p.backgroundColor};
        color: #fff;
      `
    }

    return css`
      background-color: ${p.backgroundColor};
      color: ${darken(0.4, p.backgroundColor)};
    `
  }};
`

export default Button
