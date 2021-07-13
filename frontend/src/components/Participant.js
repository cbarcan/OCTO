import React from 'react';
import styled from 'styled-components'
import avatar from "../assets/svgs/avatar.svg"

const Container = styled.div`
    margin: 0 auto;
    background-color: black;
    opacity: 90%; 
    border-radius: 4px;
    padding: 20px;
    width: 80%;
    display: flex;
    justify-content: center;
    box-shadow: ${props => props.theme.boxShadowOcto};
`;

const CardLeft = styled.div`
    grid-area: left;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;

const UserProfilePicIcon = styled.img`
    height: 78px;
    width: 78px;
    margin-bottom: 1rem;
`;

const Name = styled.p`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: white; 
`;

const Location = styled.p`
    font-weight: 300;
    font-size: 0.85rem;
    color: white; 
`;


const Participant = (props) => {
    return <>
        <Container>
            <CardLeft>
                <UserProfilePicIcon src={ avatar || "https://via.placeholder.com/50x50" } />
                <Name>{props.name}</Name>
                <Location>{props.location}</Location>
            </CardLeft>
        </Container>
    </>
}

export default Participant
