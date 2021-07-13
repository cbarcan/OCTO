import { SectionTitle } from '../styles/section-title';
import styled from 'styled-components';
import Map from '../components/Mapbox'
import Participant from '../components/Tournament/Participant'
import Details from '../components/Tournament/Details'
import TournamentCard from "../components/TournamentCard";


const BaseButton = styled.button `
    border-radius: 30px;
    width: 310px;
    height: 90px;
    color: #ecebeb;
    background: linear-gradient(90deg, rgba(0,142,210,1) 1%, rgba(33,246,255,0.9192051820728291) 100%);
    border: solid 4px #14d1d1;
    font-size: large;
    margin-top: 100px;
    border: none;


    &:hover {
        cursor: pointer;
    }

    &:active {
        transform: translateY(4px);
    }
    
`


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
    justify-content: space-around;
    color: white;




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
                        <TournamentCard/>
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
    )
}


export default Home