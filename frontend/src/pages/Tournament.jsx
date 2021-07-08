import PageTitle from '../styles/page-title';
import { SectionTitle } from '../styles/section-title';
import styled from 'styled-components';
import Soccer from '../assets/svgs/soccer-ball.svg'

const MainContainer = styled.div`
    width: 100%;
    border: solid pink 2px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    height: 100%;

`

const LeftContainer = styled.div`
    
    border: solid blue 2px;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    img {
        width: 10%;
        border-radius: 50%;
        background-color: ${props => props.theme.octoGreen };
        margin: 10px;
    }



`

const RightContainer = styled.div`
    
    border: solid green 2px;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;

`




const Home = () => {
    return (
            <>
                <PageTitle pageTitle="Tournament Overview"></PageTitle>
                <MainContainer>
                    <LeftContainer>
                        <SectionTitle pageTitle="Details"></SectionTitle>
                        <img src={Soccer} alt="Avatar" />
                        <ul>
                            <li>description</li>
                            <li>format</li>
                        </ul> 
                    </LeftContainer>
                    <RightContainer>

                    </RightContainer>
                </MainContainer>
            </>
    )
}


export default Home