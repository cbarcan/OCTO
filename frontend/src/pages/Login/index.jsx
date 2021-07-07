import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';
import octo from "../../assets/images/octopus_poly.png";
import BackgroundImg from '../../assets/images/background2.jpg';


export const PageContentPicture = styled.div`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    box-shadow: -1px 7px 46px 0px #0C0C0C;
`

export const LeftContainer = styled.div`
    
    margin-left: 100px;
    height: 100%;
    width: 50%; 
    color: white;
` 

export const RigthContainer = styled.div`
    height: 100%;
    width: 50%; 
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 50%;
        padding-right: 160px;

        &:hover {
            transform: rotate(0.01turn);
        }
    }
` 

export const RightTopBar = styled.div `
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


export const RightMiddleBar = styled.div `
    
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const TitleStyled = styled.h1 `
    font-size: 50px;
    padding: 20px;
    margin-bottom: 20px;
`

export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;

`

export const InputWrapper =styled.div`
    margin-top: 17px; 

`

export const LoginInput =styled.input`
    width: 340px;
    height: 50px;
    outline: none;
    padding-left: 30px;
    background: #ffffff75;
    border-radius: 30px;
    
    
    ::placeholder {
        color: white;
    }
`

export const RightBottomBar = styled.div `

    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
`

export const BaseButton = styled.button `
    border-radius: 30px;
    width: 155px;
    height: 45px;
    color: white;
    background: none;
    border: solid 4px #14d1d1;
    font-size: small;

    &:hover {
        cursor: pointer;
        background: ${props => props.theme.octoGradientBlueColor};
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
            <RightTopBar>
                <LinkAn><Link to='/form' > Don`t have an account?</Link></LinkAn>
            </RightTopBar>
            <RightMiddleBar>
                <TitleStyled>Sign In</TitleStyled>
            <StyledForm>
                <InputWrapper>
                    
                    <LoginInput type='email' placeholder='Email'/>
                </InputWrapper>
                <InputWrapper>
                    
                    <LoginInput type='password' placeholder='Password'/>
                </InputWrapper>     
            </StyledForm>
            </RightMiddleBar>
            <RightBottomBar>
                <BaseButton type='submit'>SIGN IN</BaseButton>
            </RightBottomBar>
        </LeftContainer>
        <RigthContainer>
            <img src={octo} alt='logo'/>
        </RigthContainer>
        
        </PageContentPicture>



    )
}

export default Login