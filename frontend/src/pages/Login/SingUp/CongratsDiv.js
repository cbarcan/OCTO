import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { OvalContainer, OvalBlue, OvalWhite  } from './EmailForm';
import checkIcon from '../../../assets/svgs/checked.svg';
import { PageContentPicture} from '../LeftContainer';
import OctoWall from '../RigthContainer';
import { LeftContainer, LeftTopBar, LeftMiddleBar, TitleStyled, StyledForm, InputWrapper, LeftBottomBar, BaseButton} from '../LeftContainer';



const CheckRelative = styled.img` 
    position: relative;
    top: 17%; left: 38%;
    width: 25%;
    margin-bottom: 5%;
    animation-name: rotate;
    animation-duration: 0.7s;


    @keyframes rotate {
        0% { transform: rotate(0);}
        100% { transform: rotate(360deg);}
    }

`

export const OvalContainer2 = styled(OvalContainer)` 
    padding-top: 6%;
`

const LeftTopBar2 = styled(LeftTopBar)` 
    margin-bottom: 1%;
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


const CongratsMessage = () => {
    
        
    return (
        <PageContentPicture>

            <LeftContainer>
                
                <LeftTopBar2 />
                
                
                <LeftMiddleBar>
                    <TitleStyled2>Congratulations!</TitleStyled2>
                    <StyledForm>
                        <InputWrapper2>
                            <CheckRelative src={ checkIcon } alt='check icon'/>
                        </InputWrapper2>

                        <ParagraphText>We've sent a confirmation code to your email. </ParagraphText>
                        <ParagraphText> {this.props.values.email}</ParagraphText>

                    </StyledForm>
                </LeftMiddleBar>

                <LeftBottomBar>
                    <Link to="/verification"><BaseButton>CONTINUE</BaseButton></Link>
                </LeftBottomBar>
                

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