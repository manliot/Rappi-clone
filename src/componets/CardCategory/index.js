import React from 'react'
import { StyledContainer } from './styles'


export function CardCategory(props) {
    return (
        <StyledContainer className={props.className}>
            <img src={props.icon} />
            <h3>{props.name}</h3>
        </StyledContainer>
    )
}

