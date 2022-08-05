import styled from '@emotion/styled'

const StyledButton = styled.button`
  color: white;
  background-color: #ffcc01;
  padding: 12px 0;
  width: 100%;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #f1c100;
  }
`

interface Props {
  type: string,
  children: React.ReactNode
}

const Button = ({ type, children }: Props) => <StyledButton>{children}</StyledButton>

export default Button