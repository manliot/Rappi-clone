import React from 'react'
import { StyledDivContainer } from "./styles";
import IconMarkMap from "../../assets/icons/mark-map-icon.svg";




export function Address(props) {
    return (
        <StyledDivContainer>
            <img src={IconMarkMap} ></img>
            <p>{props.address}</p>
        </StyledDivContainer>
    )
}
