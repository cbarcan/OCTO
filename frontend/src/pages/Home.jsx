import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const MiddleContainer = styled.div`
    
    background: ${props => props.theme.backgroundLigthNavy };
    box-shadow: ${props => props.theme.boxShadowDark};
    width: 70%;
    height: 70%;
    margin: 0px auto;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

`

const ButtonContainer = styled.div`
    height: 100%;
    width: 100%;
    border: solid yellow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`




const Home = () => {
    return (
        <Main>
        <MiddleContainer>
            <ButtonContainer>
                <button>press me</button>
            </ButtonContainer>
            <ButtonContainer>
                <button>press me</button>
            </ButtonContainer>
            <ButtonContainer>
                <button>press me</button>
            </ButtonContainer>

        </MiddleContainer>
        </Main>
    )
}


export default Home