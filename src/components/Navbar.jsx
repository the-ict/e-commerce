import React from 'react'
import Search from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from "styled-components"
import { mobile } from "../responsive"


const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
    padding: 0px 10px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`
const Center = styled.div`
    flex:2;
    text-align:center;
    font-size: 14px;
`
const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    gap: 1rem;
    font-size: 10px;
    justify-content:flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`
const Input = styled.input`
    border:none;
    outline:none;
    font-size: 14px;
    color:gray;
    padding: 0px 10px;
    ${mobile({ width: "50px" })}
`
const Logo = styled.h1`
    cursor:pointer;
  ${mobile({ fontSize: "24px" })}

`
const MenuItem = styled.h1`
    font-weight: normal;
    font-size: 15px;
    cursor:pointer;
    position:relative;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`
const SearchForm = styled.div`
    display:flex;
    align-items:center;
    border: 1px solid gray;
    margin-left: 25px;
`
const Language = styled.span`
    cursor:pointer;
    ${mobile({ display: "none" })}
`

const Badge = styled.span`
    position:absolute;
    top: -5px;
    right: -5px;
    width: 15px;
    height: 15px;
    border-radius:50%;
    background-color:red;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    font-weight: bold;
`


export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        Eng
                    </Language>
                    <SearchForm>
                        <Input></Input>
                        <Search />
                    </SearchForm>
                </Left>
                <Center>
                    <Logo>
                        MARKET.
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>
                        REGISTER
                    </MenuItem>
                    <MenuItem>
                        SIGN IN
                    </MenuItem>
                    <MenuItem>
                        <ShoppingCartIcon />
                        <Badge>3</Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}
