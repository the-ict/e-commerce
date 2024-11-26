import React from 'react'
import styled from "styled-components"
import SendIcon from '@mui/icons-material/Send';


const Container = styled.div`    
    height: 70vh;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
`
const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 70px;
`

const Description = styled.p`
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 300;
`

const InputContainer = styled.div`
    width: 50%;
    display:flex;
    align-items:center;
    height: 40px;
    background-color:white;
    border: 1px solid teal;
`

const Input = styled.input`
    flex: 8;
    border:none;
    outline:none;
    padding: 10px;
`

const Button = styled.button`
    flex: 1;
    height: 100%;
    cursor:pointer;
    background-color:teal;
    color:white;
`

export default function Newssletter() {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favourite products</Description>
            <InputContainer>
                <Input placeholder='your email' />
                <Button>
                    <SendIcon />
                </Button>
            </InputContainer>
        </Container>
    )
}
