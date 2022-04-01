import React from 'react'
import styled from 'styled-components'

const StyledH2 = styled.h2`
    color: rgb(46, 44, 54);
`
export function BigTitle(props) {
    return (
        <StyledH2>{props.title}</StyledH2>
    )
}

