import PageTitle from '../styles/page-title';
import { SectionTitle } from '../styles/section-title';
import styled from 'styled-components';
import Soccer from '../assets/svgs/soccer-ball.svg'
import Map from '../components/Mapbox'
import Participant from '../components/Tournament/Participant'
import Details from '../components/Tournament/Details'
import {BaseButton} from '../styles/buttons'
import StartButton from '../components/StartButton'
import {CardsContainers, InnerContainer} from '../pages/CreateTournament'


const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    height: 100%;


`

const LeftContainer = styled.div`
    
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: white;

    img {
        width: 10%;
        border-radius: 50%;
        background-color: ${props => props.theme.octoBlue };
    }



`

const RightContainer = styled.div`
    
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 100%;

`

const Invitations = styled.div`  
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    width: 100%; 
    height: 11em;



`
const Counter = styled.div`
    transform: skewX(-15deg);
    border-radius: 30px;
    border: solid 3px #19c5db;
    width: max-content;
    text-align:center;




    div.number {
        font-size: 10em;
        padding-left: 50px;
        padding-right: 50px;

    }

    div.invitation {
        font-size: 2em;
    }




`



const Home = () => {
    return (
                    <LeftContainer>
                    <StartButton text={'INVITE'}/>

                    <Invitations>
                        <Counter>
                            <div className='number'>10 </div> 
                            <div className='invitation'>open invitations</div>
                        </Counter>
                        <Counter>
                            <div className='number'>12 </div> 
                            <div className='invitation'>participants</div>                        
                        </Counter>

                    </Invitations>

                    <img src={Soccer} alt="Avatar" />

                        <Details/>
                        <StartButton text={'START'}/>

                    </LeftContainer>


                /** <Switch>
                <Route path={`/tournament/:id`} component={ BracketPage } />
            </Switch> **/
    )
}


export default Home