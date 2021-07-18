import styled from "styled-components";
import {FormContainer, MapImg, PinImg} from "./CreateTournament/DetailsTournament";
import {PageTitleContainer, PageTitleText} from "../styles/page-title";
import {SectionTitle, SectionTitleText} from "../styles/section-title";
import bluepin from "../assets/svgs/map2.svg";
import map from "../assets/svgs/map.svg";
import React from "react";
import email from "../assets/svgs/email.svg"


export const Container = styled(FormContainer)`
  //border: red solid;
  width: 75%;
  display: grid;
    grid-template-columns: 750px  auto;
    grid-template-rows:  250px 150px auto auto;
    grid-template-areas: 
      "top top"
      "left-top right-top"
      "left-middle right-middle"
      "left-bottom right-bottom"
      ;
  `

export const Top = styled.div `
  grid-area: top;
  //border: solid red;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const LeftTop = styled.div `
  grid-area: left-top;
  //border: solid red;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
export const LeftMiddle = styled.div `
  grid-area: left-middle;
  //border: solid red;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const LeftBottom = styled.div `
  grid-area: left-bottom;
  //border: solid yellow;
  display: flex;
   align-items: flex-start;
  justify-content: center;
`
export const RightTop = styled.div `
  grid-area: right-top;
  //border: solid green;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const RightMiddle = styled.div `
  grid-area: right-middle;
  //border: solid green;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const RightBottom = styled.div `
  grid-area: right-bottom;
  //border: solid yellow;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
export const Wrapper = styled.div`
  display: flex; 
  align-items:center;
  flex-direction: column;
  height: 70%;
  padding: 0;
  margin: 0;
  //border: solid green; 
`
const EmailImg = styled.img `
  height: 100%;
  &:hover {
        animation: shake 0.82s cubic-bezier(.36, .07, .19, .97) both ;
        transform: translate3d(0, 0, 0);

        @keyframes shake { 
            10%, 90% { transform: translate3d(-1px, 0, 0);}
            20%, 80% { transform: translate3d(2px, 0, 0); }
            30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
            40%, 60% {  transform: translate3d(4px, 0, 0); } 
        }
`
export const PageTitleCont = styled(PageTitleContainer)`
  height: 20%
`
export const PageTitleTxt = styled(PageTitleText)`
  margin-bottom: 30px; 
`
export const SectionTitleBig = styled(SectionTitleText)`
  font-weight: bold;
  font-size: 35px;
`
const ContactUs = () => {
 const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};
  return <>
  <Container>
    <Top>
      <PageTitleCont>
        <PageTitleTxt> Contact Us</PageTitleTxt>
      </PageTitleCont>
    </Top>
    <LeftTop>
      <Wrapper>
        <PinImg src={bluepin} alt='map position'/>
        <MapImg src={map} alt='map'/>
      </Wrapper>
    </LeftTop>
    <LeftMiddle>
       <SectionTitleBig>ADDRESS</SectionTitleBig>
    </LeftMiddle>
    <LeftBottom>
       <SectionTitle pageTitle="Heinrichstrasse 200,8005 Zürich"></SectionTitle>
    </LeftBottom>
    <RightTop>
         <EmailImg src={email} alt={"email"}/>
    </RightTop>
    <RightMiddle>
      <SectionTitleBig>EMAIL</SectionTitleBig>
    </RightMiddle>
    <RightBottom>
      <Mailto email={"octo.tournament@gmail.com"}><SectionTitle pageTitle="octo.tournament@gmail.com"></SectionTitle></Mailto>
    </RightBottom>
  </Container>
  </>
}
export default ContactUs