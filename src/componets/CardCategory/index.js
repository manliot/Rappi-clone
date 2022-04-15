import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    background-color: white;
    min-width: 104px;
    width: 104px;    
    height: 104px;
    padding: 8px;
    border-radius: 10px;
    box-sizing: border-box;
    & img {
        width: 60px;
        object-fit: cover
    }
    & h3 {
        margin: 0;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`


export function CardCategory(props) {

    return (
        <StyledContainer className={props.className}>
            <img src={props.icon} />
            <h3>{props.name}</h3>
        </StyledContainer>
    )
}

