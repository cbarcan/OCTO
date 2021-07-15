import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {  OvalBlue, OvalWhite } from './EmailForm';
import { useHistory } from 'react-router-dom';
import Axios from '../../../axios';
import { decodeMessage } from '../../../lib/helpers';
//import emailIcon from '../../../assets/images/Shape.png';
import { PageContentPicture} from '..';
import OctoWall from '../OctoWall';
import { TitleStyled2, OvalContainer2, LeftBottomBar2} from './CongratsDiv';
import { LeftContainer, LeftTopBar, LeftMiddleBar, StyledForm, InputWrapper, LoginInput, LeftBottomBar, BaseButton} from '..';
import { useDispatch } from 'react-redux';
import { apiUserVerify } from '../../../store/actions/userAction';


const LeftTopBar3 = styled(LeftTopBar)` 
    border: none;
    
`

export const LongInput = styled(LoginInput)`
    width: 100%;
    font-size: ${props => props.theme.textSizeM}; ;
    padding-top: 0.5%;
    padding-right: 2%;
    padding-bottom: 0.5%;
`

export const InputsDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 11%;
    
`

export const ShortInput = styled(LoginInput)`
    width: 100%;
    height: 25px;
`

export const InputWrapper2 = styled(InputWrapper)`
    display: flex;
    flex-direction: column;
    width: 48%;
`

export const StyledForm2 = styled(StyledForm)`
    //border: solid red;
    width: 80%;
    color: white;
`

export const LabelText = styled.label`
    color: white; ;
    font-size: 13px;
    margin-bottom: 2%;
    padding-left: 1%;
`
export const OvalContainer3 = styled(OvalContainer2)`
    //border: solid red;
    height: 5%;
`


const VerificationForm = () => {

    const [code, setValidationCode] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [password_repeat, setPasswordRepeat] = useState('');
    const { push } = useHistory();
    const dispatch = useDispatch();


    const completeButtonHandler = (event) => {
        event.preventDefault();
        dispatch(apiUserVerify(
            email,
            username,
            code,
            password,
            password_repeat,
        ));
        push('/');
    };
    
    
    return (

        <PageContentPicture>
            <LeftContainer>
                <LeftTopBar3 />
                <form onSubmit={completeButtonHandler}>
                    <LeftMiddleBar>
                        <TitleStyled2>Verification</TitleStyled2>
                    <StyledForm2>
                        <InputWrapper>
                            <LabelText> Validation code</LabelText>
                            <LongInput value={code} onChange={(event) => setValidationCode(event.target.value)} type="text" />
                        </InputWrapper>
                        <InputsDiv> 
                            <InputWrapper2>
                                <LabelText> Email</LabelText>
                                <ShortInput  value={email} onChange={(event) => setEmail(event.target.value)} type="email" />
                            </InputWrapper2>
                            <InputWrapper2>
                                <LabelText> Username</LabelText>
                                <ShortInput  value={username} onChange={(event) => setUserName(event.target.value)}type="text" />
                            </InputWrapper2>
                            <InputWrapper2>
                                <LabelText> Password</LabelText>
                                <ShortInput  value={password} onChange={(event) => setPassword(event.target.value)} type="password" />
                            </InputWrapper2>
                            <InputWrapper2>
                                <LabelText> Password Confirmation</LabelText>
                                <ShortInput  value={password_repeat || ''} onChange={(event) => setPasswordRepeat(event.target.value)} type="password" />
                            </InputWrapper2>
                        </InputsDiv>
                    </StyledForm2>
                    </LeftMiddleBar>

                    <LeftBottomBar2>
                        <BaseButton type="submit">COMPLETE</BaseButton>
                    </LeftBottomBar2>
                </form>

                <OvalContainer3>
                    <OvalWhite />
                    <OvalWhite />
                    <OvalBlue />
                </OvalContainer3>

            </LeftContainer>
            <OctoWall/>
        </PageContentPicture>


    )
    
}

export default connect()(VerificationForm)