import React, { useState } from 'react'
import styled from 'styled-components'
import IconLupe from "../../assets/icons/lupe-icon.svg";
import IconBackArrow from '../../assets/icons/back-arrow-icon.svg'


const StyledDivLupeContainer = styled.div`
  background-color: #FF441F;
  width: 40px;
  height:40px;
  display: ${props => props.searching ? 'none' : 'flex'} ; 
  align-items:center;
  justify-content:center;
  border-radius: 10px ;
`

const StyledSearchContainer = styled.div`
  display: ${props => props.searching ? 'grid' : 'none'} ;  
  height: 60px;
  background: white;
  width:100%;
  grid-template-columns: auto 1fr ;  
  align-items: center;  
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

export function Searchbar(props) {
  const [searchingValue, setsearchingValue] = useState('')
  const changeSearchingValue = (event) => {
    event.preventDefault()
    let value=event.target.value
    setsearchingValue(value)
    console.log(value)
  }
  return (
    <div className={`${props.className} hola`}>
      <StyledSearchContainer searching={props.searchBarOpen}>
        <img src={IconBackArrow} onClick={() => props.setsearchBarOpen(false)} />
        <input placeholder='Busca en Rappi...' onChange={(event) => changeSearchingValue(event)}>
        </input>
      </StyledSearchContainer>
      <StyledDivLupeContainer searching={props.searchBarOpen}>
        <StyledSvgLupe src={IconLupe} onClick={() => props.setsearchBarOpen(true)} />
      </StyledDivLupeContainer>

    </div>

  )
}

