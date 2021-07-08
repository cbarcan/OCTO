import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
// import octo from "../../assets/images/octopus_poly.png";
// import BackgroundImg from '../../assets/images/background8.jpg';
// import BackgroundImg2 from '../../assets/images/background6.jpg';
import OctoWall from './RigthContainer';


export const PageContentPicture = styled.div`
    
    width: 90%;
    height: 100%;
    display: flex;
    
`

export const LeftContainer = styled.div`
    background: #0a0a0a;
    box-shadow: 3px 44px 21px 1px #00000053;
    border-radius: 17px;
    height: 100%;
    width: 50%; 
    color: white;
` 

/* export const RigthContainer = styled.div`
    height: 100%;
    width: 50%;
    margin-left: 5%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    

    img {
        height: 65%;
        padding-right: 12%;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        margin: 0 auto 0 auto;
        transform-origin: bottom;
        animation-name: bounce;
        animation-timing-function: ease;
        animation-play-state: ${props => props.bounce};
    
        @keyframes bounce {
            0%   { transform: scale(1,1)      translateY(0); }
            10%  { transform: scale(1.1,.9)   translateY(0); }
            30%  { transform: scale(.9,1.1)   translateY(-100px); }
            50%  { transform: scale(1.05,.95) translateY(0); }
            57%  { transform: scale(1,1)      translateY(-7px); }
            64%  { transform: scale(1,1)      translateY(0); }
            100% { transform: scale(1,1)      translateY(0); }
        }
        
    }
`  */

export const LeftTopBar = styled.div `
    height: 10%;
    padding-top: 6% ;
    padding-right: 2%;
    display: flex;
    padding-left: 5%;
    align-items: right;
`

export const LinkAn = styled.p`
    display: flex;
    margin: 20px;

    a {
        text-decoration: none;
        color: white;
        font-size: 13px;


    }
    

`

export const SignUpButton= styled.button `
    margin: 10px;    
    background: none;
    border: 1.5px rgba(212, 208, 208, 0.619) solid;
    width: 50%;
    height: 20%;
    border-radius: 25px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    font-size: ${props => props.theme.textSizeS};
    text-decoration: none;
    
    &:hover {
        cursor: pointer;
    }

    &:active {
        background-color: grey;
        transform: translateY(4px);
        text-decoration: none;
    } 
` 


export const LefttMiddleBar = styled.div `
    
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const TitleStyled = styled.h1 `
    font-size: 300%;
    padding: 20px;
    margin-bottom: 20px;
`

export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;

`

export const InputWrapper =styled.div`
    margin-top: 12%; 

`

export const LoginInput =styled.input`
    width: 100%;
    height: 200%;
    outline: none;
    border: none;
    padding-left: 30px;
    background: #ffffff75;
    border-radius: 30px;
    
    
    ::placeholder {
        color: white;
        font-size: 80%;
    }
`

export const LeftBottomBar = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
`

export const BaseButton = styled.button `
    border-radius: 30px;
    width: 25%;
    height: 45px;
    color: white;
    background: none;
    border: solid 3px #19c5db;
    font-size: small;
    transition: width 1s, height 0.2s;

    &:hover {
        cursor: pointer;
        background: ${props => props.theme.octoGradientBlueColor};
        width: 36%;
        border: none;
    }

    &:active {
        transform: translateY(4px);
        background: ${props => props.theme.octoGradientBlueColor};
        border: none;
    }
    
`




export const Login = () => {



    return (
        <PageContentPicture>
        <LeftContainer>
            <LeftTopBar>
                <LinkAn><Link to='/form' > Don`t have an account?</Link></LinkAn>
            </LeftTopBar>
            <LefttMiddleBar>
                <TitleStyled>Sign In</TitleStyled>
            <StyledForm>
                <InputWrapper>
                    
                    <LoginInput type='email' placeholder='Email'/>
                </InputWrapper>
                <InputWrapper>
                    
                    <LoginInput type='password' placeholder='Password'/>
                </InputWrapper>     
            </StyledForm>
            </LefttMiddleBar>
            <LeftBottomBar>
                <BaseButton  type='submit'>SIGN IN</BaseButton>
            </LeftBottomBar>
        </LeftContainer>
        
        <OctoWall/>
        
        </PageContentPicture>



    )
}

export default Login