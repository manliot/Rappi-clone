import React, { useState } from 'react'
import IconLupe from "../../assets/icons/lupe-icon.svg";
import IconBackArrow from '../../assets/icons/back-arrow-icon.svg'
import { StyledSearchContainer, StyledDivLupeContainer, StyledSvgLupe } from "./styles";


export function Searchbar(props) {
  const [searchingValue, setsearchingValue] = useState('')
  const changeSearchingValue = (event) => {
    event.preventDefault()
    let value = event.target.value
    setsearchingValue(value)
    //console.log(value)
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

