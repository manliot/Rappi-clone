import React from 'react'
import styled from 'styled-components';
import { BigTitle } from "../../componets/BigTitle";

const StyledDivContainer = styled.div`
  display: flex;
  & h2{
    padding-left: 16px;
  }
`



export function Categories() {
  return (
    <StyledDivContainer>
      <BigTitle title='Categorías' />
    </StyledDivContainer>
  )
}

