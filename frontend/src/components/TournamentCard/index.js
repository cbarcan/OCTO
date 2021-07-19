import React, { useEffect } from "react";
import styled from "styled-components";
import shark from  "../../assets/svgs/shark.svg"
//import soccer from  "../../assets/svgs/soccer-ball.svg"
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getTournamentByID } from '../../store/actions/tournamentAction'


const Container = styled.div`
    //border: solid red;
    margin: 0 auto;
    background-color: black;
    padding: 3%;
    border-radius: 15px;
    height: 350px;
    width: 21%;
    box-shadow: 3px 11px 21px 35px rgba(33,33,33,0.44);;
    display: grid;
    grid-template-rows: 150px auto auto;
    grid-template-areas: 
      "top"
      "middle"
      "bottom"
      ;
      
     &:hover {
        cursor: pointer;
        background: ${props => props.theme.octoGradientBlueColor};
        box-shadow: 0px 15px 19px -6px rgba(33,115,122,0.6);

        img {
            transform: translateY(-4px);
            
        }
    }

    &:active {
        transform: translateY(4px);
    }
    `
const Top = styled.div `
    margin: 0;
    grid-area: top;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`

const Middle = styled.div `
    grid-area: middle;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`

const Bottom = styled.div `
    grid-area: bottom;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center; 
    align-items: center; 
`
const Icon = styled.img`
    height: 78px;
    width: 78px;
    border-radius: 50px;
    margin: 0;
    background-color: white; 
`;

const Name = styled.p`
    font-weight: bold;
    font-size: 0.90rem;
    margin: 0.5rem;
    color: white;
    margin-left: 2%;
    margin-right: 8%;
`;

const SportType = styled.p `
    //border: solid pink;
    font-weight: bold;
    font-size: 0.90rem;
    color: white;
    margin-left: 2%;
    margin-right: 8%;
`

const Location = styled.p`
    font-weight: bold;
    font-size: 0.90rem;
    color: white;
    margin-left: 3%;
    margin-right: 8%;
`;

const Status = styled.p `
    font-weight: bold;
    font-size: 0.90rem;
    color: white; 
    margin-left: 2%;
    margin-right: 8%;
`
const ParagContainer = styled.div `
    //border: solid yellow;
    display: flex;
    align-items: center;
    width: 80%;
    
     
    
`



const TournamentCard = (props) => {

    // update current Tournament id

    const dispatch = useDispatch();


    const history = useHistory();

    const handleClick = () => {
        history.push(`/tournament/${props.id}/overview`);
        dispatch(getTournamentByID(props.id))
    }
  
    return <>
        <Container onClick={handleClick}>
            <Top>
                <Icon src={ shark || 'https://via.placeholder.com/50x50' } alt="shark"/>    
            </Top>
            <Middle>

                
                <ParagContainer>
                    <SportType>Type:</SportType> Soccer
                </ParagContainer>
                <ParagContainer>
                    <Name>Team:</Name> OCTO
                </ParagContainer>
                <ParagContainer>
                    <Status>Status:</Status> On going
                </ParagContainer>
                 
            </Middle>
            <Bottom>
                <ParagContainer>
                    <Location>Location:</Location> Zurich
                </ParagContainer>
            </Bottom>
        </Container>
    </>
};

export default TournamentCard