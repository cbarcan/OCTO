import PageTitle from '../styles/page-title';
import { SectionTitle } from '../styles/section-title';
import styled from 'styled-components';
import Soccer from '../assets/svgs/soccer-ball.svg'
import Map from '../components/Mapbox'
import Participant from '../components/Tournament/Participant'
import Details from '../components/Tournament/Details'
import {Route, Switch} from "react-router-dom";
import BracketPage from "./BracketPage";
import {BaseButton} from '../styles/buttons'


const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
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
    color: white;

    img {
        width: 20%;
        border-radius: 50%;
        background-color: ${props => props.theme.octoBlue };
        margin-bottom: 100px;
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

const LocationContainer = styled.div`
    height: 50%;
`


const ParticipantsContainer = styled.div`
    height: 50%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    overflow: scroll;

`




const Home = () => {
    return (
                <MainContainer>
                    <LeftContainer>
                        <SectionTitle pageTitle="My awesome Tournament"></SectionTitle>
                        <img src={Soccer} alt="Avatar" />
                        <Details/>
                        <BaseButton>JOIN</BaseButton>
                    </LeftContainer>
                    <RightContainer>
                    <SectionTitle pageTitle="Participants"></SectionTitle>
                        <ParticipantsContainer>
                                <Participant name={'Tina'} location={'Bed'}/>
                                <Participant name={'Jon'} location={'Lake'}/>
                                <Participant name={'Catalin'} location={'Online'}/>
                                <Participant name={'Gian'} location={'Aarau'}/>
                                <Participant name={'Bolor'} location={'Zurich'}/>
                                <Participant name={'Tina'} location={'Bed'}/>
                                <Participant name={'Jon'} location={'Lake'}/>
                                <Participant name={'Catalin'} location={'Online'}/>
                                <Participant name={'Gian'} location={'Aarau'}/>
                                <Participant name={'Bolor'} location={'Zurich'}/>
                        </ParticipantsContainer>
                        <SectionTitle pageTitle="Location: Propulsion Academy, Heinrichstrasse 200, 8005 Zürich"></SectionTitle>
                        <LocationContainer>
                            <Map />
                        </LocationContainer>
                    </RightContainer>
                </MainContainer>

                /** <Switch>
                <Route path={`/tournament/:id`} component={ BracketPage } />
            </Switch> **/
    )
}


export default Home