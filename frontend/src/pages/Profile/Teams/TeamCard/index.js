import React from "react";
import styled from "styled-components";
import teamAvatar from "../../../../assets/images/teamAvatar.png";



const Container = styled.div`
    height: 50%;
    width: 50%;
    background: #FFFFFF;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin: 2%;
    display: flex;
    flex-direction: column;
    padding: 40px;
    background: ${props => props.theme.backgroundLigthNavy }; 

`
const TeamIcon = styled.img`
    height: 78px;
    width: 78px;
    margin-bottom: 1rem; 
`;

const TeamName = styled.p`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: white; 
`;

const TeamCard = () => {
    return <>
    <Container>
        <TeamIcon src = { teamAvatar || 'https://via.placeholder.com/50x50' }/>
        <TeamName>We are the OCTO!!!</TeamName>
    </Container>
    </>


};

export default TeamCard