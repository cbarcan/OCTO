import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import React from 'react';

export const LoginContainer = styled.div`
    border: solid yellow;
    height: 100%;
    width: 60%; 
    color: white;
` 

export const RightTopBar = styled.div `
    border: solid white;
    height: 10%;
    padding-top: 4% ;
    padding-right: 2%;
    display: flex;
    justify-content: flex-end;
    align-items: right;
`


export const RightMiddleBar = styled.div `
    border: solid purple;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const TitleStyled = styled.h1 `
    border: solid pink;
    font-size: 40px;
    padding: 20px;
    margin-bottom: 20px;
`

export const StyledForm = styled.div`
    border: solid red;
    display: flex;
    flex-direction: column;

`

export const InputWrapper =styled.div`
    border: solid peru;
    margin-top: 35px; 

    img {
        margin-right: 15px;
    }

`

export const RightBottomBar = styled.div `
    border: solid black;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`



export const Login = () => {
  

    return (
        <LoginContainer>
            <RightTopBar>
                hola
            </RightTopBar>
            <RightMiddleBar>
                <TitleStyled>Sign In</TitleStyled>
            <StyledForm>
                <InputWrapper>
                    
                    hola2
                </InputWrapper>
                <InputWrapper>
                    
                    hola3
                </InputWrapper>     
            </StyledForm>
            </RightMiddleBar>
            <RightBottomBar>
                hola 4
            </RightBottomBar>
        </LoginContainer>



    )
}

export default Login