import React from 'react'
import { categories } from "../data"
import styled from "styled-components"
import CategoriesItem from './CategoriesItem'

const Container = styled.div`
    display:flex;
    padding: 10px;
    justify-content:space-between;
    gap: 10px;
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
