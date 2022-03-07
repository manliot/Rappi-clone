import React from 'react'
import styled from "styled-components";
import IconMarkMap from "../../assets/icons/mark-map-icon.svg";

const StyledDivContainer = styled.div`
    color:#FF441F;
    display: flex;

    & p{
        font-weight: bold;
        font-size: 14px;
    };
    & img{
        margin-right: 6px ;
    }
`


export function Address() {
    return (
        <StyledDivContainer>
            <img src={IconMarkMap} ></img>
            <p>CL 52 # 55-75</p>
        </StyledDivContainer>
    )
}
