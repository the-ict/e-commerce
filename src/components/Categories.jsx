import React from 'react'
import { categories } from "../data"
import styled from "styled-components"
import CategoriesItem from './CategoriesItem'
import { mobile } from "../responsive"

const Container = styled.div`
    display:flex;
    padding: 10px;
    justify-content:space-between;
    gap: 10px;
    ${mobile({ padding: "0px", flexDirection:"column" })}
    
`

export default function Categories() {
    return (
        <Container>
            {categories.map((item) => (
                <CategoriesItem item={item} key={item} />
            ))}
        </Container>
    )
}
