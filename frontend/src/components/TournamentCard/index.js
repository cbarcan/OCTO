import React, { useEffect } from "react";
import styled from "styled-components";
import soccer from  "../../assets/svgs/soccer-ball.svg"
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addTournamentData } from '../../store/actions/tournamentAction'


const Container = styled.div`
    margin: 0 auto;
    background-color: black;
    border-radius: 5px;
    height: 350px;
    width: 18%;
    box-shadow: 1px 1px 20px -5px #ffffff75;
    display: grid;
    grid-template-rows: 150px auto auto;
    grid-template-areas: 
      "top"
      "middle"
      "bottom"
      ;
      
     &:hover {
        cursor: pointer;
        box-shadow: 1px 1px 20px -5px #14d1d1;
    }

    &:active {
        transform: translateY(4px);
    }
    `
const Top = styled.div `
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
    margin-bottom: 1rem;
    background-color: white; 
`;

const Name = styled.p`
    font-size: 0.85rem;
    margin: 0.5rem;
    color: white; 
`;

const SportType = styled.p `
    font-weight: 300;
    font-size: 0.85rem;
    color: white; 
`

const Location = styled.p`
    font-weight: 300;
    font-size: 0.85rem;
    color: white; 
`;

const Status = styled.p `
    font-weight: 300;
    font-size: 0.85rem;
    color: white; 
`
const TournamentCard = (props) => {

    // update current Tournament id

    const dispatch = useDispatch();


    const history = useHistory();

    const handleClick = () => {
        history.push(`/tournament/${props.id}/overview`);
        dispatch(addTournamentData(props.id))
    }
  
    return <>
        <Container onClick={handleClick}>
            <Top>
                <Icon src={ soccer || 'https://via.placeholder.com/50x50' } alt="soccer">
                </Icon>
                <Status>Status: On going</Status>
            </Top>
            <Middle>
                 <SportType>Type: Soccer</SportType>
                 <Name>Team: OCTO</Name>
            </Middle>
            <Bottom>
                <Location>Location: Zurich</Location>
            </Bottom>
        </Container>
    </>
};

export default TournamentCard