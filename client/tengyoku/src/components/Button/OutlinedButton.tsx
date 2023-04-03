import React, { PropsWithChildren } from 'react'

import { coffeBrownColor } from '../../consts/color'
import styled from 'styled-components'

const OutlinedButton = ({children}:PropsWithChildren ) => {
  return (
    <StyledButton>{children}</StyledButton>
  )
}

export default OutlinedButton

const StyledButton =styled.button`
    font-size: 15px;
    padding: 0.4em 1.3em;
    border: 2px solid ${coffeBrownColor};
    color: black;
    background-color: #ffffffa4;
    border-radius: 3px;
    /* display: flex;
    text-align: center; */
    &:hover{
      cursor: pointer;
    }
`