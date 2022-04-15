import styled from 'styled-components';
import { CardCategory } from "../../componets/CardCategory";


export const StyledDivContainer = styled.div`
  display: flex;
  flex-direction : column;
  
  & h2{
    padding-left: 16px;
    align-self:flex-start
  }
`
export const StyledCategoryContainer = styled.div`
  display:flex;
  width:100%;  
  box-sizing: border-box;
  overflow: scroll;  
  padding: 0 150px 0 30px ;
`
export const StyledCardCategory = styled(CardCategory)`
  margin-left: 10px;  
  display: inline-block;
`
