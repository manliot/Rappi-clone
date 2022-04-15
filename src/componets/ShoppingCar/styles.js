import styled from "styled-components";

export const StyledDivContainer = styled.div`
    background: #21B16C;
    color: white;
    width: 72px;
    height: 36px;
    border-radius: 8px;    
    display: ${props => props.searching ? 'none' : 'flex'} ; 
    justify-content: center;
    align-items: center;
`
export const StyledPCounterCar = styled.p`
    font-weight: bold ;
`
export const StyledImgShoppingCar = styled.img`
    margin-right: 6px ;
`