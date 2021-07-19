import styled from 'styled-components';
import React from 'react';


const ParagraphContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //border: red solid; 
`

const Paragraph = styled.p`
    font-weight: 400;
    font-size: 25px;
    font-family: monospace;
    letter-spacing: .1em;
    color: white; 
    text-align: center;
    //justify-content: center;
    //align-self: center;
    //border: solid red; 
    //margin: 40px;
`


const PageParagraph = (props) => {
  return(
    <ParagraphContainer style={{"margin":props.margin || "10px 0"}}>
      <Paragraph>{props.pageParagraph}</Paragraph>
    </ParagraphContainer>
  )
}

export default PageParagraph;