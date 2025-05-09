import React from 'react'
import styled from "styled-components"
import Footer from "../components/Footer"
import Products from "../components/Products"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newssletter from '../components/Newssletter'


const Container = styled.div``

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    margin: 20px;
    display: flex;
    justify-content:space-between;
`

const Filter = styled.div``
const FilterText = styled.span`
    font-size: 20px;
    font-weight: bold;
    margin-right: 20px;
`
const Select = styled.select`
    margin-right: 20px;
    padding: 5px;
`
const Option = styled.option``


export default function FilterProducts() {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>
                Dresses
            </Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products:
                    </FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newssletter />
            <Footer />
        </Container>
    )
}
