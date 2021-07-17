import { SectionTitle } from '../styles/section-title';
import styled from 'styled-components';
// import Map from '../components/Map/Map'
// import Map from '../components/Mapbox'
import octo from '../assets/svgs/octopusWhite.svg';
//import octoLogo from '../assets/svgs/octopusWhite.svg';
import Participant from '../components/Tournament/Participant';
import { LabelText } from './Login/SingUp/Verification';
import { BaseButton, LoginInput } from './Login/index';
//import SideMenu from '../components/Menus/LoginUserMenu';
//import { TitlePage } from './Tournaments/index';



const GameDetailsCard = styled.div`
    //border: solid purple;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12% 3%;
    width: 85%;
    height: 75%;
    background: black;
    color: white;
    box-shadow: 3px 11px 21px 35px rgba(33,33,33,0.44);
    border-radius: 15px;
    transition: transform .45s ease, background-color .45s ease;

    &:hover {
        transition: background-color .05s ease-out;
        background-color: white;
        transform: scale(1.04);
        color: black;
        transition: transform .45 ease;
        transition: color .45s ease;

        img {
            filter: invert(48%) sepia(0%) saturate(5476%) hue-rotate(0deg) brightness(0%) contrast(119%);
        }

        label {
            color: black;
        }

        button {
            color: black;

            &:hover {
                color: white;
            }
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
            
        }
        
    }

    img {
        
        height: 38%;
        padding-bottom: 2%;
        
        &:hover {
            filter: invert(48%) sepia(70%) saturate(8000%) hue-rotate(180deg) brightness(145%) contrast(119%);
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

const LeftContainer = styled.div`
    //border: solid yellow;
    margin-top: 3%;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;


  
`

const RightContainer = styled.div`
    //border: solid blue;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 85%;

`

const FormContainer = styled.form`
    //border: solid blue;
    height: 100%;
    width: 100%;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const SelectBox = styled.select`
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
    
`


const ParticipantsContainer = styled.div`
    //border: solid red;
    height: 85%;
    width:100%;
    padding: 2%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    overflow: none;

`

const InputStyle = styled(LoginInput)`
    height: 50%;
    width: 75%;
    margin-left: 0.5%;
    border: 0.5px solid grey;

`

const LabelText2 = styled(LabelText)`
    color: white;
`

const InputContainer = styled.div`
    //border: solid yellow;
    height: 30%;
    width: 100%;
    display: flex;
    padding-left: 19%;
    flex-direction: column;
    margin-top: 2%;
    margin-bottom: 2%;
    

    label {
        :active {
            color: black;
        }
    }
`

/* const BaseButton2 = styled(BaseButton)`
    margin-top: 2%;
    background: black;
` */



const Home = () => {


    return (

                <MainContainer>
                    
                    <LeftContainer>
                        <GameDetailsCard>
                            <img src={octo} alt="logo"/>
                            <ParagTitle>Details of <br/> the Game:</ParagTitle>
                            <FormContainer>

                                <InputContainer>
                                    <LabelText2> Team Name</LabelText2>
                                    <InputStyle type="text" placeholder="Octo Team?"/>
                                </InputContainer>


                                <InputContainer>
                                    <LabelText2> Select the Game Type</LabelText2>
                                    <SelectBox name="Turnament">

                                        <option value="Futball">Futball</option>
                                        <option value="Ping Pong">Ping Pong</option>
                                        <option value="Tennis">Tennis</option>

                                    </SelectBox>
                                </InputContainer>
                                <BaseButton>JOIN</BaseButton>
                            </FormContainer>

                        </GameDetailsCard>

                    </LeftContainer>
                    <RightContainer>
                        <SectionTitle pageTitle="PARTICIPANTS"></SectionTitle>
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
                            </ParticipantsContainer>
                        
                        <SectionTitle pageTitle="Location:   Propulsion Academy,   Heinrichstrasse 200,   8005 Zürich"></SectionTitle>


                    </RightContainer>


                </MainContainer>
    )
}


export default Home