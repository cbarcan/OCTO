import React from 'react';
import styled from 'styled-components';
import avatarWhite from "../../../assets/svgs/shark.svg";
import medal from "../../../assets/svgs/medalbluelinear.svg";
//import medal2 from "../../../assets/images/medal2.png"
//import medal3 from "../../../assets/images/medal3.png"
import { BaseButton } from '../../Login';
import { Link } from 'react-router-dom';

const Container = styled.div`
    //border: solid yellow;
    display: flex;
    background-color: black;
    //opacity: 0.4; 
    border-radius: 20px;
    height: 30%;
    width: 82%;
    padding-right: 6%;
    //box-shadow: 1px 1px 20px -5px #14d1d1;
    box-shadow: 3px 11px 21px 35px rgba(33,33,33,0.44);
    
  
`;

const CardLeft = styled.div`
    //background: white;
    width: 30%;
    //border: solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
        //border: solid yellow;
        margin-top: 8%;
        width: 50%;
        

        &:hover {
            width: 65%;
        }

        a {
            text-decoration: none;
            color: white;
            font-weight: bold;
        }
    }
`;

const RigthSide = styled.div`
    //border: solid blue;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
` 

const CardTopRight = styled.div`
    //border: solid lightcoral;
    padding: 5%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 50%;
    border-bottom: solid white 1px;
`;

const CardBottomRight = styled.div`
    //border: solid lightgreen;
    padding-left: 5%;
    display: flex;
    align-items: center;
    height: 50%;
`;

export const UserProfilePicIcon = styled.img`
    margin-top: 14%;
    width: 55%;
    //border: solid yellow;
    //box-shadow: 0px 5px 24px -6px #000000;

`;

const Name = styled.p`
    //border: solid green;
    font-size: 1.5rem;
    margin-top: 10%;
    margin-bottom: 7%;
    color: white; 
`;

const Location = styled.p`
    //border: solid yellowgreen;
    font-family: monospace;
    font-weight: 300;
    font-size: 25px;
    color: white; 
`;

const CompanyName = styled.p`
    //border: solid pink;
    font-family: monospace;
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 1rem;
    color: white; 
`

const Achievement = styled.div `
    //border: solid blue;
    height: 70%;
    width: 40%;
    display: flex;
`

const IconSection = styled.div `
    //border: solid yellow;
    //background: ${props => props.theme.octoGradientBlueColor};
    background: white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    padding-top: 5%;
    height: 100%;
    width: 40%;

    img {
        height: 65%;
        margin-bottom: 9%;
    }
    
    p { 
        color: black;
        font-weight: bold;
        letter-spacing: 0.1m;
    }
    
`

const NumSection = styled.div `
    //border: solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 60%;
    color: white;
    font-family: monospace;
    

    p {
        font-weight: bold;
        font-size: 50px;
        
    }
    
`

const ProfileCard = (props) => {
console.log('inside profilecard', props.user)
    return <>
        <Container>
            <CardLeft>
                <UserProfilePicIcon src={ avatarWhite || "https://via.placeholder.com/50x50" } alt="avatar"/>
                <Name>
                    {props.user.username}
                </Name>
                <BaseButton><Link to="/user/profile/edit"> Edit Profile </Link> </BaseButton>
            </CardLeft>

            <RigthSide>
                <CardTopRight>
                    <CompanyName>
                    Propulsion Academy
                    </CompanyName>
                    <Location>Zurich</Location>
                </CardTopRight>
                <CardBottomRight>

                    <Achievement>
                        <IconSection>
                            <img src={medal} alt="icon"/>
                            <p>1ST</p>
                        </IconSection>

                        <NumSection>
                            <p>0</p>
                            Tournaments won
                        </NumSection>
                    </Achievement>


                </CardBottomRight>
            </RigthSide>
        </Container>
    </>
}

export default ProfileCard
