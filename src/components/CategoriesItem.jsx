import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    height: 70vh;
    position: relative;
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit:cover;
`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display:flex;
    align-items:center;
    flex-direction: column;
    justify-content:center;
    height: 100%;
    width: 100%;
    color:white;
`

const Title = styled.h1`
    margin-bottom: 20px;
`

const Button = styled.button`
    padding: 10px;
    background-color:white;
    color:gray;
    font-weight: 600;
    cursor:pointer;
`

export default function CategoriesItem({ item }) {
    console.log(item)
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW !</Button>
            </Info>
        </Container>
    )
}
