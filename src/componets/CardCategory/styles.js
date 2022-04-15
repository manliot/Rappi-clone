import styled from 'styled-components'

export const StyledContainer = styled.div`
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
