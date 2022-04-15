import styled from "styled-components";
import { Searchbar } from "../../componets/Searchbar";

export const StyledNavbar = styled.nav`
    width: 100%;    
    background: white;  
    z-index: 999;
    display: grid;
    grid-template-rows: 61px 34px;
    grid-template-columns: 1fr 1fr;    
    grid-template-areas: ${props => props.searching ? '"left left" "address address"' : '"left right" "address address"'} ;                         
    gap: 0;  
    & .nav-left{ 
        grid-area: left;
        display: flex;
        justify-content: space-between;
        align-items: center;    
        border-bottom: 1px #e6ebf1 solid;
    } 
    & .nav-left div{ 
        grid-template-areas: ${props => props.searching ? 0 : 14} ;   
        ${props => props.searching ? 'width: 100% ;' : ''}
    }     
    & .nav-right{ 
        grid-area: right;    
        display: ${props => props.searching ? 'none' : 'flex'} ; 
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

export const StyledPLogin = styled.p`
    color: #21B16C;
    font-weight: bold ;    
`

export const StyledSearchar = styled(Searchbar)`
    width:${props => props.searching ? '100%' : 'initial'};        
    margin:0px;
    padding: 0 15px;
    box-sizing: border-box;
`

export const StyledIconMenu = styled.img`
    width: 24px;
    height: 24px ;
    object-fit: cover;
    margin-left:24px ;
    display: ${props => props.searching ? 'none' : 'initial'} ; 
`