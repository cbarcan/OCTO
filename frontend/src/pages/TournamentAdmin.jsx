import styled from 'styled-components';
import StartButton from '../components/StartButton'
import {useState} from "react";
import InvitationModal from "../components/Tournament/InvitationModal";
import Axios from '../axios';
import { useHistory } from "react-router-dom";
import Header from './Tournament'



const MainContainer = styled.div`
    
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: white;
    font-family: monospace;
    font-size: 2em;
`


const Invitations = styled.div`  
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    width: 100%; 



`
const Counter = styled.div`
    border-radius: 30px;
    border: solid 3px #19c5db;
    width: max-content;
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
`

const Tournament = styled.div`
    border-radius: 30px;
    width: max-content;
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
        const tournamentData = new FormData();    
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
            });
    };


    return (
            <>
                <Header/>
                <MainContainer>
                    <div onClick={openModal}>
                        <StartButton text={'INVITE'}/>
                    </div>
                    <Invitations>
                        <Counter>
                            <div className='number'>10 </div> 
                            <div className='invitation'>open invitations</div>
                        </Counter>
                        <Tournament/>
                        <Counter>
                            <div className='number'>12 </div> 
                            <div className='invitation'>participants</div>                        
                        </Counter>
                    </Invitations>
                    <StartButton clickHandler={startTournamentHandler} text={'START'}/>
                </MainContainer>
                <InvitationModal modalIsOpen={modalIsOpen} openModal={openModal} closeModal={closeModal}/>
            </>
    )
}


export default Admin