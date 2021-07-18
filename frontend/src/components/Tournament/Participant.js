import React from 'react';
import styled from 'styled-components'
import avatar from "../../assets/svgs/shark.svg"

const Container = styled.div`
    //border: solid pink;
    margin: 0;
    background-color: black;
    opacity: 90%; 
    border-radius: 15px;
    padding: 1%;
    width: 80%;
    height: 95%;
    display: flex;
    justify-content: center;
    box-shadow: 3px 11px 21px 35px rgba(33,33,33,0.44);
    cursor: pointer;

    &:hover {
        background: ${props => props.theme.octoGradientBlueColor};
    }
`;

const CardLeft = styled.div`
    padding: 2%;
    //border: solid blue;
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
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: white; 
`;

const Location = styled.p`
    font-weight: 300px;
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
