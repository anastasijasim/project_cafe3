import React, { PropsWithChildren } from 'react'

import { coffeBrownColor } from '../../consts/color'
import styled from 'styled-components'

const PrimaryButton = ({children}:PropsWithChildren )=> {
  return (
    <StyledButton>{children}</StyledButton>
  )
}

export default PrimaryButton

const StyledButton =styled.button`
    font-size: 15px;
    padding: 0.4em 1.3em;
    border: 2px solid #a87d68;
    color: white;
    background-color: ${coffeBrownColor};
    border-radius: 3px;
    &:hover{
      cursor: pointer;
    }

`

