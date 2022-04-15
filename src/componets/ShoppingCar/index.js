import React from 'react'
import IconShoppingCar from "../../assets/icons/shopping-cart-icon.svg";
import { StyledDivContainer, StyledImgShoppingCar, StyledPCounterCar } from "./styles";


export function ShoppingCar(props) {
    return (
        <StyledDivContainer searching={props.searchBarOpen}>
            <StyledImgShoppingCar src={IconShoppingCar} />
            <StyledPCounterCar >0</StyledPCounterCar>
        </StyledDivContainer>
    )
}
