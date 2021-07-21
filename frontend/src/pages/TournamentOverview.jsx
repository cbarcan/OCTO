import { SectionTitle } from '../styles/section-title';
import styled from 'styled-components';
// import Map from '../components/Map/Map'
// import Map from '../components/Mapbox'
import octo from '../assets/svgs/octopusWhite.svg';
//import octoLogo from '../assets/svgs/octopusWhite.svg';
import Participant from '../components/Tournament/Participant';
import { LabelText } from './Login/SingUp/Verification';
import { BaseButton } from './Login/index';
//import SideMenu from '../components/Menus/LoginUserMenu';
import { TitlePage } from './Tournaments/index';
import Header from './TournamentHeader'
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTournamentByID } from '../store/actions/tournamentAction';
import Axios from '../axios';
import {useState} from "react";


const GameDetailsCard = styled.div`
    //border: solid purple;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10% 3%;
    padding-bottom: 0;
    width: 85%;
    height: 78%;
    overflow: hidden;
    background: white;
    color: black;
    box-shadow: 3px 11px 21px 35px rgba(33,33,33,0.44);
    border-radius: 15px;
    transition: transform .45s ease;

    &:hover {
        //transition: background-color .05s ease-out;
        //background-color: white;
        transform: scale(1.04);
        //color: black;
        //transition: transform .45 ease;
        //transition: color .45s ease;

        img {
            filter: invert(48%) sepia(0%) saturate(5476%) hue-rotate(0deg) brightness(0%) contrast(119%);
        }

        /* label {
            color: black;
        } 


        input {
            background: whitesmoke;
            color:black;
            
            ::placeholder {
                color: black;
            }
            
        }

        select {
            background: whitesmoke;
            color: black;
            
        }*/
        
    }

    img {
        
        height: 30%;
        margin-bottom: 5%;
        filter: invert(48%) sepia(0%) saturate(5476%) hue-rotate(0deg) brightness(0%) contrast(119%);
        
        &:hover {
            filter: invert(48%) sepia(70%) saturate(8000%) hue-rotate(180deg) brightness(145%) contrast(119%);
        }
    }

    button {
        margin-top: 5%;
        color: grey;
        font-weight: bold;
        font-size: 11px;

        &:hover {
            color: white;
        }
    }

`

const ParagTitle = styled.h1`
    //border: solid red;
    font-weight: bold;
    font-size: 30px;
    letter-spacing: 0.1em;
    padding-bottom: .5em;
    border-bottom: 2px solid #000000;
`


const MainContainer = styled.div`
    //border: solid red;
    width: 100%;
    height: 100%;
    display: flex;
    

`

export const LeftContainer = styled.div`
    //border: solid yellow;
    margin-top: 6%;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
  
`

export const RightContainer = styled.div`
    //border: solid blue;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 85%;

`

const FormContainer = styled.div`
    //border: solid blue;
    height: 60%;
    width: 100%;
    margin-top: 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
    
`

const ButtonContainer = styled.div`
    //border: solid blue;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7%;

    button {
        font-family: monospace;
        font-size: 11px;
        margin: 0;
        margin: 0 3%;
    }
    
`



/* const SelectBox = styled.select`
    //border: solid blue;
    
    height: 50%;
    width: 75%;
    cursor: pointer;    
    outline: none;
    padding-left: 30px;
    background: #ffffff75;
    border-radius: 30px;
    color: white;
    font-size: 80%;
    
` */


const ParticipantsContainer = styled.div`
    //border: solid red;
    height: 85%;
    width:100%;
    padding: 2%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    overflow: none;

`

/* const InputStyle = styled(LoginInput)`
    height: 50%;
    width: 75%;
    margin-left: 0.5%;
    border: 0.5px solid grey;

` */

const LabelText2 = styled(LabelText)`
    //border: solid blue;
    width: 100%;
    color: black;
    //margin-right: 3%;
    margin: 0;
    margin-bottom: 2%;
    padding: 0;
    font-family: monospace;
`

const InputContainer = styled.div`
    //border: solid yellow;
    height: auto;
    width: 70%;
    display: flex;
    margin-left: 5%;
    flex-direction: column;
    //margin-bottom: 2%;
    

    label {
        :active {
            color: black;
        }
    }
`

const TitlePage2 = styled(TitlePage)`
    //border: solid pink;
    margin-left: 1%;
    width: 70%;
    font-weight: bold;
    font-size: 1.5em;
`



const Home = () => {
    const dispatch = useDispatch();
    const url = window.location.pathname;
    const url_array = url.split("/");
    const tournament_id = url_array[url_array.length - 2];
    const tournament = useSelector((state) => state.tournament); 
    const [joined, setJoined] = useState(false)
    const my_id = useSelector((state) => state.user.userData.id);



    useEffect(() => {
        dispatch(getTournamentByID(tournament_id));
    }, [tournament_id, dispatch])

    // check if already in tournament
    useEffect(() => {
        if (tournament.participants)
        {
            tournament.participants.forEach(participant => {
                if (participant === my_id){
                    setJoined(true)
                }
            })
        }
    }, [tournament, my_id, joined])


    const joinHandler = () => {
        const url = `/tournament/${tournament_id}/join/`;
        const auth = 'Bearer ' + localStorage.userToken;
        const configs = { headers: { Authorization: auth } };
    
        Axios.post(url, {}, configs)
            .then((response) => {
                console.log('Tournament joined!');
                setJoined(true);

            })
            .catch((error) => {
                console.log('Tournament join error', error.response.data);
            }); 
    };


    const cancelHandler = () => {
        console.log('cancel my participation')
    };
    
    
    return (
        <>
        {(tournament.id) ?
        (
            <>
                <Header name={tournament.name}/>
                <MainContainer>
                    
                    <LeftContainer>
                        <GameDetailsCard>
                            <img src={tournament.picture ?  tournament.picture : octo} alt="logo"/>
                            <ParagTitle>Details of <br/> the Game:</ParagTitle>
                            <FormContainer>

                                <InputContainer>
                                    <LabelText2>Tournament Name</LabelText2>
                                    <TitlePage2>{tournament.name}</TitlePage2>
                                </InputContainer>


                                <InputContainer>
                                    <LabelText2> Selected Game Type</LabelText2>
                                    <TitlePage2>{tournament.sport}</TitlePage2>
                                </InputContainer>

                                <InputContainer>
                                    <LabelText2> Location</LabelText2>
                                    <TitlePage2>{tournament.location}</TitlePage2>
                                </InputContainer>


                                <ButtonContainer>
                                    { joined ?
                                    <BaseButton onClick={cancelHandler}>CANCEL</BaseButton>
                                    :                                 
                                    <BaseButton onClick={joinHandler}>READY TO JOIN?</BaseButton>
                                    }
                                </ButtonContainer>
                            </FormContainer>

                        </GameDetailsCard>

                    </LeftContainer>
                    <RightContainer>
                        <SectionTitle pageTitle="PARTICIPANTS"></SectionTitle>
                            <ParticipantsContainer>
                            { tournament ?
                            tournament.participants.map((participant, index) => (                
                                <Participant key={index} id={participant}/>
                            )): null
                            }
                            </ParticipantsContainer>
                        
                        <SectionTitle pageTitle="Location:   Propulsion Academy,   Heinrichstrasse 200,   8005 Zürich"></SectionTitle>


                    </RightContainer>


                </MainContainer>
            </>
        ) : null }

        </>


    )
}

export default Home