import React, { useState } from 'react'
import IconMenu from "../../assets/icons/menu-icon.svg";
import { ShoppingCar } from "../../componets/ShoppingCar";
import { Address } from "../../componets/Address";
import { StyledNavbar, StyledIconMenu, StyledSearchar, StyledPLogin } from "./styles";

export function Navbar() {
    const [searchBarOpen, setsearchBarOpen] = useState(false)
    return (
        <StyledNavbar searching={searchBarOpen}>
            <div className='nav-left'>
                <StyledIconMenu src={IconMenu} searching={searchBarOpen} />
                <StyledSearchar searchBarOpen={searchBarOpen} setsearchBarOpen={setsearchBarOpen} />
            </div>
            <div className='nav-right'>
                <ShoppingCar />
                <StyledPLogin >Ingreso</StyledPLogin>
            </div>
            <div className='nav-address'>
                <Address address='CL 52 # 55-75' />
            </div>
        </StyledNavbar >
    )
}
