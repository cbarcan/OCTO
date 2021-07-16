import styled from 'styled-components';
import StartButton from '../components/StartButton'
import {useState} from "react";
import InvitationModal from "../components/Tournament/InvitationModal";



const MainContainer = styled.div`
    
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: white;
`


const Invitations = styled.div`  
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    width: 100%; 
    transform: skewX(-15deg);



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

    const openModal = () =>  {
        console.log('click')
        setIsOpen(true);
    }

    const closeModal = () => setIsOpen(false);


    return (
            <>
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
                    <StartButton text={'START'}/>
                </MainContainer>
                <InvitationModal modalIsOpen={modalIsOpen} openModal={openModal} closeModal={closeModal}/>
            </>
    )
}


export default Admin