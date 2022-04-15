import React, { useState } from 'react'
import styled from 'styled-components';
import { BigTitle } from "../../componets/BigTitle";
import { CardCategory } from "../../componets/CardCategory";

const StyledDivContainer = styled.div`
  display: flex;
  flex-direction : column;
  
  & h2{
    padding-left: 16px;
    align-self:flex-start
  }
`
const StyledCategoryContainer = styled.div`
  display:flex;
  width:100%;  
  box-sizing: border-box;
  overflow: scroll;  
  padding: 0 150px 0 30px ;
`
const StyledCardCategory = styled(CardCategory)`
  margin-left: 10px;  
  display: inline-block;
`


const categories_test = [
  {
    name: "Restaurante",
    icon: 'https://images.rappi.com/new_store_type/restaurant_1616046277251.png?e=webp&d=314x1'
  }, {
    name: "Supermercado",
    icon: '	https://images.rappi.com/home-ab-objects/marekt-1614920725.png?e=webp&d=314x1'
  }, {
    name: "Farmacia",
    icon: 'https://images.rappi.com/home-ab-objects/farma-1614920789.png?e=webp&d=314x1'
  }, {
    name: "Licor",
    icon: '	https://images.rappi.com/home-ab-objects/licores-glow-1613515492.png?e=webp&d=314x1'
  }, {
    name: "Express",
    icon: '	https://images.rappi.com/home-ab-objects/express-glow-1613515373.png?e=webp&d=314x1'
  }, {
    name: "RappiTravel",
    icon: '	https://images.rappi.com/home-ab-objects/rappi-travel-1616004487.png?e=webp&d=314x1'
  }, {
    name:"Tiendas",
    icon: 'https://images.rappi.com/home-ab-objects/vida-sana-1616005222.png?e=webp&d=314x1'
  }
]

export function Categories() {
  const [categories, setcategories] = useState(categories_test)
  return (
    <StyledDivContainer>
      <BigTitle title='Categorías' />
      <StyledCategoryContainer>
        {
          categories.map(categorie =>

            <StyledCardCategory key={categorie.name} name={categorie.name} icon={categorie.icon} />
          )
        }
      </StyledCategoryContainer>
    </StyledDivContainer>
  )
}

