import React from "react";
import styled from "styled-components";
import TournamentCard from "../../components/TournamentCard";
// import ball from  "../../assets/svgs/Ball.svg"
// import tennis from "../../assets/svgs/tennis.svg"
import join from "../../assets/svgs/join.svg"
import { TitleHead } from "../CreateTournament/index"



const Container = styled.div`
  display: flex; 
  flex-flow: row wrap;
  width: 100%; 
  margin: 20px; 
  padding: 0 5%;
  gap:40px; 
`
const Create = styled.div `
    margin: 0;
    background-color: black;
    border-radius: 15px;
    padding: 3.5% 2%;
    height: 350px;
    width: 21.5%;
    box-shadow: 3px 11px 21px 35px rgba(33,33,33,0.44);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

      
     &:hover {
        box-shadow: 1px 1px 20px -5px #14d1d1;
        transition: background-color .05s ease-out;
        background-color: white;
        transform: scale(1.04);
        color: black;
        transition: transform .45 ease;
        transition: color .45s ease;

        div {
          color: black;
          font-weight: bold;

        }

        img {
            filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(200%);
            
            &:hover {
              filter: invert(48%) sepia(70%) saturate(8000%) hue-rotate(180deg) brightness(135%) contrast(119%);
            }
        }

        button {
            background: ${props => props.theme.octoGradientBlueColor};
            border: none;


            &:hover {
                color: white;
            }
        }
      }
`


export const TitlePage = styled.h1`
    //border: solid yellow;
    width: 25%;
    margin-right: 72%;
    margin-left: 12%;
    margin-bottom: 2%;
    padding-bottom: 1%;
    font-family: monospace;
    font-size: 2em;
    border-bottom: 1px solid white;
`;


const TitleHead4 = styled(TitleHead)`
    //border: solid yellow;
    height: 35%;
    width: 80%;
    font-size:20px;
`;

const Icon = styled.img`
    //border: solid red;
    height: 50%;
    
    color: white;
    margin-bottom: 15%; 

    
`;

const Button = styled.button `
    border-radius: 30px;
    width: 50%;
    height: 45px;
    color: white;
    background: none;
    border: solid 3px #19c5db;
    font-size: small;
    transition: width 1s, height 0.2s;

    &:hover {
        cursor: pointer;
        background: ${props => props.theme.octoGradientBlueColor};
        width: 60%;
        border: none;
    }

    &:active {
        transform: translateY(4px);
        background: ${props => props.theme.octoGradientBlueColor};
        border: none;
    }
`

const Tournaments = ({ history }) => {

  const CreateTournamentHandler = /**async**/ e => {
        e.preventDefault();
        //const response = await loginAction(loginData);
        //if (response.status === 200) history.push('/create');
        history.push("/create");
    };

  return <>
  <TitlePage>Tournaments</TitlePage>
  <Container>
    <TournamentCard id={1} />
    <TournamentCard id={2} />
    <TournamentCard id={3} />
    <TournamentCard id={4} />
    <TournamentCard id={5} />
    <TournamentCard id={6} />
    <TournamentCard id={7} />
    <Create>
      <TitleHead4>Create your <br/>tournament:</TitleHead4>
      <Icon src={join} alt="logo join"/>
      <Button onClick={CreateTournamentHandler}>Ready?</Button>
    </Create> 
  </Container>
  </>
}
export default Tournaments
