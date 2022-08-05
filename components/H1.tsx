import styled from '@emotion/styled'

const StyledH1 = styled.h1`
  color: #5acee8;
`

interface Props {
  children: React.ReactNode
}

const H1 = ({ children }: Props) => <StyledH1>{children}</StyledH1>

export default H1