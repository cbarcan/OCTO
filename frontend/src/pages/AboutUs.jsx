import styled from "styled-components";
import {Container, PageTitleTxt, PageTitleCont, Top, LeftTop, RightTop, Wrapper} from "../pages/ContactUs"
import React from "react";
import PageParagraph from "../styles/section-pragraph";
import octoText from "../assets/svgs/octo-text-outline.svg"
import octoPoly from "../assets/svgs/octopus_poly_white.svg"

const ContainerAboutUs = styled(Container) `
   grid-template-columns: 750px  auto;
    grid-template-rows:  250px 150px auto auto;
    grid-template-areas: 
      "top top"
      "left right"
      "left right"
      "left right"
      ;
`
const Left = styled.div`
  grid-area: left;
  //margin-left: 30px; 
  
  //border: solid red; 
`
const Right = styled.div`
  grid-area: right;
  margin-right: 100px; 
  //border: solid red;
`
const OctoTxtImg = styled.img`
  height: 8%;
  display: flex;
  justify-content: center;
  align-self: center;
`
const OctoImg = styled.img`
  height: 35%;
  display: flex;
  justify-content: center;
  align-self: center;
`

const AboutUs = () => {
  return <>
    <ContainerAboutUs>
      <Top>
        <PageTitleCont>
          <PageTitleTxt> About OCTO </PageTitleTxt>
        </PageTitleCont>
      </Top>
      <Left>
        <Wrapper>
          <OctoTxtImg src={octoText} />
          <OctoImg src={octoPoly}/>
        </Wrapper>
      </Left>
      <Right>
        <PageParagraph pageParagraph="We are group of students that developing OCTO tournament web-based application as our final project.
         OCTO stands for Organize Create Tournament Online. Currently, OCTO was build to organize and track three different sports which includes
         football, tennis, and table tennis. Our goal is to grow, modify OCTO into all sorts of sport competition tracking application for the users.">
        </PageParagraph>
      </Right>
    </ContainerAboutUs>
  </>
}
export default AboutUs