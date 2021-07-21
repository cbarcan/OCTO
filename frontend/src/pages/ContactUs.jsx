import styled from "styled-components";
//import {FormContainer, MapImg, PinImg} from "./CreateTournament/DetailsTournament";
import {PageTitleContainer, PageTitleText} from "../styles/page-title";
import {SectionTitle, SectionTitleText} from "../styles/section-title";
import letter from "../assets/svgs/letter1.svg";
import direction from "../assets/svgs/direction2.svg";
import React from "react";

//import map from '../assets/svgs/map.svg';
//import bluepin from '../assets/svgs/map2.svg';



export const Container = styled.div`
  //border: red solid;
  width: 90%;
  height: 90%;
  //margin-top: 1%;
  //margin-bottom: 0;
  background: black;
  overflow: hidden;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: solid 4px #19c5db;
  box-shadow: 0px 20px 35px -16px rgba(125, 249, 255, 0.4);
`


export const Wrapper = styled.div`
  //border: solid orange;
  display: flex; 
  align-items:center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 3%;

  img {
    height: 27%;
    margin-bottom: 10%;
  }
`

export const InfoBox = styled.div`
    //border: solid green;
    display: flex;
    height:69%;
    width: 63%;
    
`
export const PageTitleTxt = styled(PageTitleText)`
  //border: solid yellow;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-weight: normal;
  height: 27%;
  width: 75%;
  padding-bottom: 2%;
  border-bottom: 1px solid white;
  
  
  
`
export const SectionTitleBig = styled(SectionTitleText)`
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 3%;
`

/* export const MapImg = styled.img`
    border: solid lightblue;
    height: 300%;
    position: relative;
    bottom: 435%;

`

export const PinImg = styled.img`
    border: solid lightblue;
    height: 300%;
    z-index: 1;
    position: relative;
    bottom: 132%;
    cursor: pointer;

    &:hover {

        animation: bounce 1s infinite alternate;
        -webkit-animation: bounce 1s infinite alternate;

        @keyframes bounce {
            from { transform: translateY(0px); }
            to { transform: translateY(-15px);  }
        }

        @-webkit-keyframes bounce {
            from { transform: translateY(0px);}
            to { transform: translateY(-15px);}
        }
    }

` */



const ContactUs = () => {
 const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a style={{textDecoration:"none"}} href={`mailto:${email}${params}`}>{children}</a>;
};
  return (
  
  <>
    <Container>
    
    
      <PageTitleTxt> Contact Us</PageTitleTxt>

      <InfoBox>
        <Wrapper>

          <img src={direction} alt=""/>
          <SectionTitleBig>ADDRESS</SectionTitleBig>
          <SectionTitle pageTitle="Heinrichstrasse 200,8005 Zürich."></SectionTitle>
        </Wrapper>
    
        <Wrapper>
          <img src={letter} alt=""/>
          <SectionTitleBig>EMAIL</SectionTitleBig>
          <Mailto email={"octo.tournament@gmail.com"}><SectionTitle pageTitle="octo.tournament@gmail.com"></SectionTitle></Mailto>
        </Wrapper>
      </InfoBox>

  
  </Container>
</>
)
}

export default ContactUs

