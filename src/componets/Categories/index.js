import React, { useState } from 'react'
import { BigTitle } from "../../componets/BigTitle";
import { StyledDivContainer, StyledCategoryContainer, StyledCardCategory } from "./styles";
import { categories_test } from "./dataTest";


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

