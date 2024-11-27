import React, { useState } from 'react';
import styled from "styled-components";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { sliderItems } from "../data"
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    width: 100%;
    position: relative;
    ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff7f7;
    cursor: pointer;
    font-size: 14px;
    position: absolute;
    top: 0;
    bottom:0;
    margin: auto;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    display:flex;
    align-items:center;
    justify-content:center;
    z-index: 2;
`;

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    transition: all 0.5s ease; // Animatsiya
    transform: translateX(-${(props) => props.sliderIndex * 100}vw);
`;


const Slide = styled.div`
    display:flex;
    align-items:center;
    width: 100vw;
    height: 100vh;
    background-color: #${(props) => props.bg};
    `; // Slider -> Slide qilib o'zgartirildi

const ImageContainer = styled.div`
    flex:1;
`;
const Image = styled.img`
    height:80vh;
    width: 100%;
    object-fit:contain;
`;

const InfoContainer = styled.div`
    flex: 1;
`;


const InfoTitle = styled.h1`
    font-size: 70px;
`;
const InfoDesc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const InfoButton = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color:transparent;
    cursor:pointer;
`;



export default function Slider() {
    const [sliderIndex, setSliderIndex] = useState(0)

    const handleArrow = (direction) => {
        if (direction === "left") {
            setSliderIndex(sliderIndex === 0 ? 1 : sliderIndex - 1)
        } else {
            setSliderIndex(sliderIndex === 1 ? 0 : sliderIndex + 1)
        }
    }


    return (
        <Container>
            <Arrow direction="left" onClick={() => handleArrow("left")}>
                <ArrowLeftIcon />
            </Arrow>
            <Wrapper sliderIndex={sliderIndex}>
                {
                    sliderItems.map((item, index) => (
                        <Slide key={index} bg={item.bg}>
                            <ImageContainer>
                                <Image src={item.img} />
                            </ImageContainer>
                            <InfoContainer>
                                <InfoTitle>{item.title}</InfoTitle>
                                <InfoDesc>
                                    {item.desc}
                                </InfoDesc>
                                <InfoButton>
                                    SHOW NOW!
                                </InfoButton>
                            </InfoContainer>
                        </Slide>
                    )
                    )
                }
            </Wrapper>
            <Arrow direction="right" onClick={() => handleArrow("right")}>
                <ArrowRightIcon />
            </Arrow>
        </Container>
    );
}
