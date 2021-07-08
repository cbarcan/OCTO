import React from 'react';
import styled from 'styled-components';
import {  OvalBlue, OvalWhite,  Input2 } from './EmailForm';
//import emailIcon from '../../../assets/images/Shape.png';
import { TitleStyled2, OvalContainer2 } from './CongratsDiv';
import { LeftContainer, LeftTopBar, LefttMiddleBar, StyledForm, InputWrapper, LoginInput, LeftBottomBar, BaseButton} from '../LeftContainer';


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
    margin-bottom: 14.5%;
    
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

const StyledForm2 = styled(StyledForm)`

    width: 80%;
    color: white;
`
export const LabelText = styled.label`
    color: white; ;
    font-size: 13px;
    margin-bottom: 2%;
    padding-left: 1%;
`



class VerificationForm extends React.Component {

    Continuing = (e) => {
        e.preventDefault();
        this.props.Continue();   
    } 


    handleSubmit = async (e) => {
        e.preventDefault();


        const url = "";
        const config = {
            method: "PATCH",
            headers: new Headers({
            "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                code: this.props.values.code,
                email: this.props.values.email,
                username: this.props.values.username,
                password: this.props.values.password,
                password_repeat: this.props.values.passwordRepeat,

            })
        }
        console.log(config)   
        const res = await fetch(url, config);
        console.log(res)
        if (res.status === 200) {
            console.log(res.status)
            this.props.Continue();

        } else if (res.status === 400) {
            
            const resData = await res.json();
        
            for (const [key, value] of Object.entries(resData)) {
                alert(`Error 400.\n${key}: ${value}`)
            }
        
        }


        }

    render() {
        const { values, handleChange } = this.props;
        return (
    
            <LeftContainer>
                {console.log(values)}
                <LeftTopBar3 />
                <form onSubmit={this.handleSubmit}>
                    <LefttMiddleBar>
                        <TitleStyled2>Verification</TitleStyled2>
                    <StyledForm2>
                        <InputWrapper>
                            <LabelText> Validation code</LabelText>
                            <LongInput  onChange={handleChange('code')} defaultValue={values.code} type="text" />
                        </InputWrapper>
                        <InputsDiv> 
                            <InputWrapper2>
                                <LabelText> Email</LabelText>
                                <ShortInput  onChange={handleChange('email')} defaultValue={values.email} type="text" />
                            </InputWrapper2>
                            <InputWrapper2>
                                <LabelText> Username</LabelText>
                                <ShortInput  onChange={handleChange('username')} defaultValue={values.username} type="text" />
                            </InputWrapper2>
                            <InputWrapper2>
                                <LabelText> Password</LabelText>
                                <ShortInput  onChange={handleChange('password')} defaultValue={values.password} type="password" />
                            </InputWrapper2>
                            <InputWrapper2>
                                <LabelText> Password Confirmation</LabelText>
                                <ShortInput  onChange={handleChange('passwordRepeat')} defaultValue={values.passwordRepeat} type="password" />
                            </InputWrapper2>
                        </InputsDiv>
                    </StyledForm2>
                    </LefttMiddleBar>

                    <LeftBottomBar>
                        <BaseButton onClick={this.Continuing} type="submit">COMPLETE</BaseButton>
                    </LeftBottomBar>
                </form>

                <OvalContainer2>
                    <OvalWhite />
                    <OvalWhite />
                    <OvalBlue />
                </OvalContainer2>

            </LeftContainer>


        )
    }
}

export default VerificationForm