import styled from '@emotion/styled'

const StyledForm = styled.form`
  padding: 32px;
  color: white;
  background-color: white;
  border-radius: 12px;
  margin: 0 12px;

  @media (min-width: 768px) {
    max-width: 500px;
    margin: 0 auto;
  } 
`

const StyledFormRow = styled.div`
  margin-bottom: 18px;
`

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 4px;
  color: #8c96a3;
  font-weight: bold;
`

const StyledInput = styled.input`
  padding: 8px 4px;
  border-radius: 8px;
  border: 2px solid #ccc;
  width: 100%;
`

interface Props {
  children?: React.ReactNode,
  [x:string]: any;
}

export const Form = ({ children, ...props }: Props) => <StyledForm {...props}>{children}</StyledForm>
export const FormRow = ({ children, ...props }: Props) => <StyledFormRow {...props}>{children}</StyledFormRow>
export const Label = ({ children, ...props }: Props) => <StyledLabel {...props}>{children}</StyledLabel>
export const Input = ({  ...props }: Props) => <StyledInput {...props} />

