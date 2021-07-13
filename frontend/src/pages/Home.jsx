import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Message from '../pages/CreateTournament/message';

const Main = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    
`

const Links = styled.div`
    margin: 0px auto;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a, a:hover, a:active, a:visited { color: white; }

`


const Home = () => {
    return (
        <Main>
            <Message/>
            <Links>
                <Link to='/Login'>Login</Link>
                <Link to='/registration'>Registration</Link>
                <Link to='/confirmation'>Confirmation</Link>
                <Link to='/verification'>Verification</Link>
                <Link to="/tournaments">Tournaments</Link>
                <Link to='/create'>Create</Link>
                <Link to='/privacy'>Privacy</Link>
                <Link to="/details">DetailsCreate </Link>
                <Link to='/tournament/:id'>Tournament</Link>
                <Link to='/tournament/:id/admin'>Tournament Admin</Link>
                <Link to='/tournament/:id/bracket'>Bracket</Link>
                <Link to="/tournament/:id/standing" >Standing</Link>
                <Link to="/user/profile">Profile</Link>
                <Link to="/user/profile/edit">EditProfile</Link>
            </Links>
        </Main>
    )
}


export default Home