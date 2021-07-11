import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import OctoWall from './RigthContainer';
// import octoLogo from "../../assets/svgs/octo-text-outline_2p.svg";
// import { apiUserLogin } from '../../store/user';
// import octo from "../../assets/svgs/octopus_poly_white.svg";
// import octo from "../../assets/images/octopus_poly.png";
import ball from "../../assets/svgs/Ball.svg";
import tennis from "../../assets/svgs/tennis.svg";
import tennisBall from "../../assets/svgs/tennisBall.svg";
import pingpong from "../../assets/svgs/pingpong.svg";


export const PageContentPicture = styled.div`
    // border: solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    height: 100%; 
    width: 100%; 
    margin: 0;

    a {
        color: white;
    }
    
    
    
`

export const TitleHead = styled.div`
    // border: solid green;
    width: 22ch;
    color: white;
    animation: typing 2s steps(22), blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 2em;
    margin: 0;

    @keyframes typing {
        from { width: 0
        }
    }
    
    @keyframes blink {
        50% { border-color: transparent
        }
    }
    
`




export const CardsContainers = styled.div`
    // border: solid yellow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 27%;
    margin: 0;
    padding: 0;
    transform: scale(0.48);
    

    &:hover {
        transform: scale(0.54);
    }
    
`

export const InnerContainer = styled.div`
    // border: solid red;
    padding-top: 30%;
    cursor: pointer;
    height: 80%;
    position: absolute;
    
    
    
`

/* export const Divider = styled.div`
    background-color: white;
    height: 1px;
    width: 200px;
`

export const Name = styled.div`
    color: white;
    font-size: 36px;
    font-weight: 600;
    margin-top: 16px;
    text-align: center;
` */

export const Futball = styled.img`
    height: 100%;
    margin: 0;
    transition: transform .2s;
    position: relative;
    z-index: 1;
    bottom: 10%;
    transform-origin: 50% bottom;
    
    
    

    &:hover {
        transform: scale(2);
       
    }
`


export const RacketImg = styled.img`
    height: 80%;
    margin: 0;
    transition: transform .2s;
    position: relative;
    z-index: 1;
    bottom: 10%;
    transform-origin: 50% bottom;
    
    

    &:hover {
        transform: scale(2);

    }
   
`

export const BallImg = styled.img`
    height: 20%;
    margin: 0;
    transition: transform .2s;
    position: relative;
    z-index: 1;
    bottom: 30%;
    left: 50%;
    transform-origin: 50% bottom;
  
    &:hover {
        transform: scale(2);

    }
   
`

export const InnerDiv = styled.div`
    // border: solid pink;
    height: 100%;
    width: 100%;
    display: flex;
    margin: 0;
    padding-left: 10%;
`










export const CreateTournament = () => {

    return (
        <>
        <TitleHead>Select a sport:</TitleHead>
        <PageContentPicture>

            
        
            <CardsContainers>
                <InnerContainer>
                <Futball src={ball} alt='logo'/>
                
                </InnerContainer>
            </CardsContainers>
            <CardsContainers>
            <InnerContainer>
                <RacketImg src={tennis} alt='logo'/>
                <BallImg src={tennisBall} alt='logo'/>
                
                </InnerContainer>
            </CardsContainers>
            <CardsContainers>
            <InnerContainer>
                <RacketImg src={pingpong} alt='logo'/>
                
                </InnerContainer>
            </CardsContainers>
            <Link to='/privacy'> --- </Link>
        </PageContentPicture>
        </>


    )
}

export default CreateTournament