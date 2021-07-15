import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { OvalContainer, OvalBlue, OvalWhite  } from './EmailForm';
import checkIcon from '../../../assets/svgs/checked.svg';
import { PageContentPicture} from '..';
import OctoWall from '../OctoWall';
import { LeftContainer, LeftTopBar, LeftMiddleBar, TitleStyled, StyledForm, InputWrapper, LeftBottomBar, BaseButton} from '..';



const CheckRelative = styled.img` 
    position: relative;
    top: 17%; left: 30%;
    width: 45%;
    margin-bottom: 5%;
    animation-name: rotate;
    animation-duration: 0.7s;


    @keyframes rotate {
        0% { transform: rotate(0);}
        100% { transform: rotate(360deg);}
    }

`

export const OvalContainer2 = styled(OvalContainer)` 
    //border: solid yellow;
    height: 0;
    margin: 0;
    
`


export const TitleStyled2 = styled(TitleStyled)` 
    padding: 0;
    margin-top: 10px;
    margin-bottom: 0;
    padding-right: 10px;
    font-size: 40px;
    
`

const InputWrapper2 = styled(InputWrapper)` 
    padding: 0;
    margin-top: 0px;
    margin-bottom: 30px;
    
`

const ParagraphText = styled.p` 
    color: rgb(110, 110, 110);
    text-align: center;
    padding-left: 1%;

`

const LeftTopBar2 = styled(LeftTopBar)` 
    //border: solid blue;
    margin-bottom: 0.5%;
`

const LeftMiddleBar2 = styled(LeftMiddleBar)` 
    //border: solid green;
    height: 50.5%;
`

export const LeftBottomBar2 = styled(LeftBottomBar)` 
    //border: solid red;
    height: 10%;
    margin-bottom: 1%;
`

const Link2 = styled(Link)`
    //border: solid blue;
    width: 100%;
    text-align: center;
`



const CongratsMessage = () => {
    
        
    return (
        <PageContentPicture>

            <LeftContainer>
                
                <LeftTopBar2 />
                
                
                <LeftMiddleBar2>
                    <TitleStyled2>Congratulations!</TitleStyled2>
                    <StyledForm>
                        <InputWrapper2>
                            <CheckRelative src={ checkIcon } alt='check icon'/>
                        </InputWrapper2>

                        <ParagraphText>We've sent a confirmation code to your email. </ParagraphText>
                        <ParagraphText>tina@mail.com</ParagraphText>

                    </StyledForm>
                </LeftMiddleBar2>

                <LeftBottomBar2>
                    <Link2 to="/verification"><BaseButton>CONTINUE</BaseButton></Link2>
                </LeftBottomBar2>
                

                <OvalContainer2>
                    <OvalWhite />
                    <OvalBlue />
                    <OvalWhite />
                </OvalContainer2>

            </LeftContainer>

            <OctoWall/>
        </PageContentPicture>

    )
}
 
export default CongratsMessage;