import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    height: 1000px;
    width: 100%;
    border: solid yellow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a, a:hover, a:active, a:visited { color: white; }

`




const Home = () => {
    return (
        <Main>
        <MiddleContainer>
            <ButtonContainer>
                <Link to='/tournament/:id'>Tournament</Link>
                <Link to='/tournament/:id/admin'>Tournament Admin</Link>
                <Link to='/tournament/:id/bracket'>Bracket</Link>
                <Link to='/Login'>Login</Link>
                <Link to='/registration'>Registration</Link>
                <Link to='/confirmation'>Confirmation</Link>
                <Link to='/verification'>Verification</Link>
                <Link to='/create'>Create</Link>
                <Link to='/privacy'>Privacy</Link>
                <Link to='/user/profile'>User Profile</Link>
            </ButtonContainer>

        </MiddleContainer>
        </Main>
    )
}


export default Home