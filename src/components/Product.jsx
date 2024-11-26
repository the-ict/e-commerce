import React from 'react'
import styled from "styled-components"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: all 0.5s ease;
`

const Container = styled.div`
    min-width: 280px;
    height: 350px;
    flex: 1;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#f5fbfd;
    position: relative;
    margin-left: 10px;
    &:hover ${Info} {
        opacity: 1;
    }
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit:cover;
`


const Icon = styled.div`    
    margin: 20px;
    cursor:pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display:flex;
    align-items:center;
    justify-content:center;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

export default function Product({ item }) {
    console.log(item)
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Icon >
                    <FavoriteBorderIcon />
                </Icon>
                <Icon >
                    <SearchIcon />
                </Icon>
                <Icon >
                    <ShoppingCartIcon />
                </Icon>
            </Info>
        </Container>
    )
}
