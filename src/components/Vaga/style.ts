import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  gap: 16px;
  margin: 32px 0;
`

export const Input = styled.input`
  flex: 1;
  padding: 8px;
`

export const Button = styled.button`
  background-color: #2ecc71;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
