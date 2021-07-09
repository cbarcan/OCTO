import React from 'react';
import styled from 'styled-components'
import avatar from "../../../assets/svgs/avatar.svg"

const Container = styled.div`
    margin: 0 auto;
    background-color: black;
    opacity: 90%; 
    border-radius: 4px;
    height: 200px;
    width: 90%;
    box-shadow: 1px 1px 20px -5px #14d1d1;
  
    display: grid;
    grid-template-columns: 325px auto auto;
    grid-template-rows: auto auto 100px;
    grid-template-areas: 
      "left top-right top-right top-right"
      "left top-right top-right top-right"
      "left bottom-right bottom-right bottom-right"
      ; 
`;

const CardLeft = styled.div`
    grid-area: left;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;

const CardTopRight = styled.div`
    grid-area: top-right;
    padding: 2rem;
    padding-bottom: 0.5rem;
`;

const CardBottomRight = styled.div`
    grid-area: bottom-right;
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

const CompanyName = styled.p`
      font-weight: 700;
      margin-bottom: 1rem;
      color: white; 
`

const Achievement = styled.p `
    font-weight: 300;
    font-size: 0.85rem;
    color: white; 
`

const ProfileCard = () => {
    return <>
        <Container>
            <CardLeft>
                <UserProfilePicIcon src={ avatar || "https://via.placeholder.com/50x50" } />
                <Name>
                    Bolor Munkhbold
                </Name>
                <Location>Zurich</Location>
            </CardLeft>
            <CardTopRight>
                <CompanyName>
                    Propulsion Academy
                </CompanyName>
            </CardTopRight>
            <CardBottomRight>
                <Achievement>
                    🏆🏆🏆 times winner of table tennis!!!
                </Achievement>
            </CardBottomRight>
        </Container>
    </>
}

export default ProfileCard
