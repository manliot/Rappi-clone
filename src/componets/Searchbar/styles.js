import styled from 'styled-components'

export const StyledDivLupeContainer = styled.div`
  background-color: #FF441F;
  width: 40px;
  height:40px;
  display: ${props => props.searching ? 'none' : 'flex'} ; 
  align-items:center;
  justify-content:center;
  border-radius: 10px ;
`

export const StyledSearchContainer = styled.div`
  display: ${props => props.searching ? 'grid' : 'none'} ;  
  height: 60px;
  background: white;
  width:100%;
  grid-template-columns: auto 1fr ;  
  align-items: center;  
  box-sizing:border-box;

  & img {
    margin-right: 14px ;
  }
  & input {
    border: none ;
    border-radius: 4px ;
    height: 48px;
    background-color: #F7F8F9;
    padding: 12px ;
    box-sizing: border-box;
  }
`


export const StyledSvgLupe = styled.img`
  width: 24px;  
  height:24px;   
`
