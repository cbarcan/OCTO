import styled from 'styled-components';
import StartButton from '../components/StartButton'
import {useState} from "react";
import InvitationModal from "../components/Tournament/InvitationModal";
import Axios from '../axios';
import { useHistory } from "react-router-dom";
import Header from './TournamentHeader';
import { BaseButton } from './Login';
import add from '../assets/svgs/message2.svg';
//import PageTitle from "../styles/page-title";
import {LeftContainer, RightContainer} from './TournamentOverview'
import {TitlePage} from './Tournaments/index';



const MainContainer = styled.div`
    //border: solid red;
    width: 80%;
    height: 80%;
    display: flex;
    color: white;
    font-family: monospace;
    font-size: 2em;
    margin-right: 8%;
    //padding-right: 10%;
`


const Invitations = styled.div`  
    //border: solid blue;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 6% 0;
    width: 60%;
    height: 70%;

`
const Counter = styled.div`
    border-radius: 25px;
    border-right: solid 4px #19c5db;
    background: black;
    padding: 10% 0;
    width: 100%;
    text-align:center;
    height: 15em;
    margin: 6% 0;
    box-shadow: 0px 20px 35px -16px rgba(125, 249, 255, 0.6);

    div.number {
        
        font-size: 8em;
        color: white;
    }

    div.invitation {
        font-size: 1.3em;
        color: white;
        width: 65%;
        margin-left: 15%;
        border-bottom: 1px solid white;
        padding-bottom: 5%;
        

    }
`

/* const Tournament = styled.div`
    border: solid red;
    border-radius: 30px;
    width: 100%;
    text-align:center;
    height: 11em;
 

    div.number {
        font-size: 10em;
        padding-left: 50px;
        padding-right: 50px;

    }

    div.invitation {
        font-size: 2em;
        
    }
` */

const ButtonDiv = styled.div`
    height: 55%;
    //border: solid orange;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    cursor: pointer;
    border-radius: 25px;
    border-right: solid 4px #19c5db;
    background: white;
    padding: 10% 0;
    margin: 3% 0;
    box-shadow: 0px 20px 35px -16px rgba(125, 249, 255, 0.6);
    animation: shake 0.82s cubic-bezier(.36, .07, .19, .97) both ;
    transform: translate3d(0, 0, 0);
        

    @keyframes shake { 
        10%, 90% { transform: translate3d(-1px, 0, 0);}
        20%, 80% { transform: translate3d(2px, 0, 0); }
        30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
        40%, 60% {  transform: translate3d(4px, 0, 0); } 
    }

    &:hover {
        opacity: 0.5;
    }

    :active {
        transform: translateY(4px);
    }

    p {
        font-weight: bold;
        letter-spacing: 0.1em;
        margin-top: 10%;
        color: black;
    }
    
    

    img {
        
        height: 80%;
        //padding-right: 2%;
    }

`

const LeftContainer2 = styled(LeftContainer)`
    //border: solid yellow;
    height: 90%;
    margin: 0;
    padding-top: 5%;
`

const RightContainer2 = styled(RightContainer)`
    //border: solid blue;
    height: 90%;
    margin: 0;
`


const Admin = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const [id, setId] = useState(1);


    const openModal = () =>  {
        setIsOpen(true);
    }

    const history = useHistory();


    const closeModal = () => setIsOpen(false);

    const startTournamentHandler = () => {
        /* const tournamentData = new FormData();    
        tournamentData.append('status', 'OG')
        const url = `/tournament/${id}/`;
        const auth = 'Bearer ' + localStorage.getItem('userToken');
        const headers = {
            headers: { Authorization: auth, 'Content-Type': 'multipart/form-data' },
        };
        Axios.patch(url, tournamentData, headers)
            .then((response) => {
                console.log('Tournament started!');
                console.log(response);
                history.push(`/tournament/${id}/overview`);
            })
            .catch((error) => {
                console.log('Tournament Start error', error.response.data);
            }); */
    };


    return (
            <>
                <TitlePage> Admin</TitlePage>
                <MainContainer>
                    
                    <LeftContainer2>

                        <Invitations>
                            <Counter>
                                <div className='invitation'>Open Invitations</div>
                                <div className='number'>10 </div> 
                                
                            </Counter>
                            
                            <Counter>
                                <div className='invitation'>Participants</div> 
                                <div className='number'>12 </div> 
                                                       
                            </Counter>
                        </Invitations>

                    </LeftContainer2>

                    <RightContainer2>
                    
                        <ButtonDiv onClick={openModal}>
                            <img src={add} alt="add"/>
                            <p>SEND INVITATIONS</p>
                        </ButtonDiv>

                        
                        <StartButton clickHandler={startTournamentHandler} text={'START'}/>
                        

                    </RightContainer2>

                </MainContainer>
                <InvitationModal modalIsOpen={modalIsOpen} openModal={openModal} closeModal={closeModal}/>
            </>
    )
}


export default Admin
