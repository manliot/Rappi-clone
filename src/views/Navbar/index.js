import React from 'react'
import styled from "styled-components";
import IconMenu from "../../assets/icons/menu-icon.svg";
import { Searchbar } from "../../componets/Searchbar";
import { ShoppingCar } from "../../componets/ShoppingCar";
import { Address } from "../../componets/Address";
const StyledNavbar = styled.nav`
    width: 100%;    
    background: white;  
    z-index: 999;
    display: grid;
    grid-template-rows: 61px 34px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "left right" 
                        "address address";  
    gap: 0;                          
`
const StyledDivLeft = styled.div`
    grid-area: left;
    display: flex;
    justify-content: space-around;
    align-items: center;    
    border-bottom: 1px #e6ebf1 solid;
`

const StyledDivRight = styled.div`
    grid-area: right;    
    display: flex;
    justify-content: space-around;
    align-items: center;  
    border-bottom: 1px #e6ebf1 solid;  
`

const StyledDivAddress = styled.div`
    grid-area: address ;
    border-bottom: 1px #e6ebf1 solid;  
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledPLogin = styled.p`
    color: #21B16C;
    font-weight: bold ;
`

const StyledSearchar = styled(Searchbar)`
    
`

const StyledIconMenu = styled.img`
    width: 24px;
    height: 24px ;
    object-fit: cover;
    
`
export function Navbar() {
    return (
        <StyledNavbar>
            <StyledDivLeft >
                <StyledIconMenu src={IconMenu} />
                <StyledSearchar />
            </StyledDivLeft>
            <StyledDivRight>
                <ShoppingCar />
                <StyledPLogin>Ingreso</StyledPLogin>
            </StyledDivRight>
            <StyledDivAddress >
                <Address />
            </StyledDivAddress>
        </StyledNavbar >
    )
}
