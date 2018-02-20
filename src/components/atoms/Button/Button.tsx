import styled from 'styled-components'

interface ButtonProps {
  backgroundColor: string
}

const Button = styled.button`
  background-color: ${(p: ButtonProps) => p.backgroundColor};
  border: none;
  width: 100px;
  height: 100px;

  &:focus {
    outline: 0;
  }
`

export default Button
