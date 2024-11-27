import React from 'react'
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import NewsSletter from "../components/Newssletter"
import Footer from "../components/Footer"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div``
const Wrapper = styled.div`
    margin: 20px;
    display: flex;
`

const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-fit:cover;
`
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 20px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
    font-size: 20px;
`
const Price = styled.span`
    font-size: 70px;
    font-weight: 200;
`

const FilterContainer = styled.div`
    margin-top: 20px;
    display:flex;
    width: 50%;
    justify-content:space-between;
`
const Filter = styled.div`
    display: flex;
    align-items:center;
`
const FilterText = styled.p`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin-left: 10px;
    cursor:pointer;
`
const FilterSize = styled.select`
    margin-left: 20px;
    padding: 0px 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    display: flex;
    align-items:center;
`
const AmountContainer = styled.div`
    width: 50%;
    display:flex;
    justify-content:space-between;
    margin-top: 20px;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 20%;
    border: 1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
`
const AmountButton = styled.button`
    padding:15px;
    border: 2px solid teal;
    cursor:pointer;
    font-weight: 200;
    &:hover{
      background-color: #f8f4f4;
  }
`


export default function SingleProduct() {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src='https://i.ibb.co/S6qMxwr/jean.jpg' />
                </ImageContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterText>Color:</FilterText>
                            <FilterColor color="black" />
                            <FilterColor color="gray" />
                            <FilterColor color="darkblue" />
                        </Filter>
                        <Filter>
                            <FilterText>Size</FilterText>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AmountContainer>
                        <AddContainer>
                            <RemoveIcon />
                            <Amount>1</Amount>
                            <AddIcon />
                        </AddContainer>
                        <AmountButton>ADD TO CART</AmountButton>
                    </AmountContainer>
                </InfoContainer>
            </Wrapper>
            <NewsSletter />
            <Footer />
        </Container>
    )
}

