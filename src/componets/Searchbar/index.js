import React from 'react'
import styled from 'styled-components'
import IconLupe from "../../assets/icons/lupe-icon.svg";
import IconBackArrow from '../../assets/icons/back-arrow-icon.svg'

let searching = true;
const StyledDivContainer = styled.div`
 

`
const StyledDivLupeContainer = styled.div`
  background-color: #FF441F;
  width: 40px;
  height:40px;
  display: flex ;
  align-items:center;
  justify-content:center;
  border-radius: 10px ;
`

const StyledSearchContainer = styled.div`
  display: ${searching ? 'grid' : 'none'} ;
  position:absolute;
  top:0;
  right:0;
  height: 60px;
  background: white;
  width:100%;
  grid-template-columns: auto 1fr ;
  gap: 16px;
  align-items: center;
  padding: 0 16px;
  box-sizing:border-box;

  & img {
    margin-right: 14px ;
  }
  & input {
    border: none ;
    border-radius: 4px ;
    height: 48px;
    background-color: #F7F8F9;
    padding: 12px ;
    box-sizing: border-box;
  }
`


const StyledSvgLupe = styled.img`
  width: 24px;  
  height:24px;   
`

export function Searchbar() {
  return (
    <StyledDivContainer>
      <StyledSearchContainer>
        <img src={IconBackArrow} />
        <input placeholder='Busca en Rappi...'>

        </input>
      </StyledSearchContainer>
      <StyledDivLupeContainer>
        <StyledSvgLupe src={IconLupe} />
      </StyledDivLupeContainer>
    </StyledDivContainer>
  )
}

