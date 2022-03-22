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
    & .nav-left{ 
        grid-area: left;
        display: flex;
        justify-content: space-between;
        align-items: center;    
        border-bottom: 1px #e6ebf1 solid;
    } 
    & .nav-left div{ 
        margin-right: 14px;
        z-index: 999;
        
    }     
    & .nav-right{ 
        grid-area: right;    
        display: flex;
        justify-content: space-around;
        align-items: center;  
        border-bottom: 1px #e6ebf1 solid;  
    }
    & .nav-address{
        grid-area: address ;
        border-bottom: 1px #e6ebf1 solid;  
        display: flex;
        justify-content: center;
        align-items: center;
    }
`


const StyledPLogin = styled.p`
    color: #21B16C;
    font-weight: bold ;
`

const StyledSearchar = styled(Searchbar)`
    position:absolute;
    top:0;
    right:0;
`

const StyledIconMenu = styled.img`
    width: 24px;
    height: 24px ;
    object-fit: cover;
    margin-left:24px ;
`
export function Navbar() {
    return (
        <StyledNavbar>
            <div className='nav-left'>
                <StyledIconMenu src={IconMenu} />
                <StyledSearchar />
            </div>
            <div className='nav-right'>
                <ShoppingCar />
                <StyledPLogin>Ingreso</StyledPLogin>
            </div>
            <div className='nav-address'>
                <Address />
            </div>
        </StyledNavbar >
    )
}
