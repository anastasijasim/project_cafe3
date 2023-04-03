import React from 'react'
import styled from 'styled-components'

const Input = (props:any) => {
  return (
    <StyledInput {...props}/>
  )
}

export default Input


const StyledInput = styled.input`
    outline: none;
    padding: 8px 30px;
    font-size:16px;
    border-radius:3px;
    border: 1px ;
`
