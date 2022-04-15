import React from 'react'
import styled from "styled-components";
import IconShoppingCar from "../../assets/icons/shopping-cart-icon.svg";

const StyledDivContainer = styled.div`
    background: #21B16C;
    color: white;
    width: 72px;
    height: 36px;
    border-radius: 8px;    
    display: ${props => props.searching ? 'none' : 'flex'} ; 
    justify-content: center;
    align-items: center;
`
const StyledPCounterCar = styled.p`
    font-weight: bold ;
`
const StyledImgShoppingCar = styled.img`
    margin-right: 6px ;
`

export function ShoppingCar(props) {
    return (
        <StyledDivContainer searching={props.searchBarOpen}>
            <StyledImgShoppingCar src={IconShoppingCar} />
            <StyledPCounterCar >0</StyledPCounterCar>
        </StyledDivContainer>
    )
}
