import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LeftContainer, LeftTopBar, LinkAn, LefttMiddleBar, TitleStyled, StyledForm, InputWrapper, LoginInput, LeftBottomBar, BaseButton} from '../LeftContainer';




export const OvalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 4%;
    
`

export const OvalBlue = styled.div`
    background: #19c5db;
    height: 10px;
    width: 10px;
    border-radius: 30px;
    margin-right: 1%;
    margin-left: 1.5%;
`

export const OvalWhite= styled.div`
    border: solid white;
    height: 6px;
    width: 6px;
    border-radius: 30px;
    margin-right: 1%;
    margin-left: 1.5%;
`
const Form2 = styled.form`
    height: 47.4%;
    
`
 const LeftTopBar2 = styled(LeftTopBar)`
    margin-bottom: 15%;
`

const LeftBottomBar2 = styled(LeftBottomBar)`
    margin-top: 23.5%;
    padding: 0;

` 



class EmailSignUp extends React.Component {


    Continuing = (e) => {
        e.preventDefault();
        this.props.Continue();
    } 


    handleSubmit = async (e) => {
        e.preventDefault();


        const url = "";
        const config = {
            method: "POST",
            headers: new Headers({
            "Content-Type": "application/json"
            }),
            body: JSON.stringify({
            email: this.props.values.email
            })
        }
        
        /* const resData = await res.json(); */

        const res = await fetch(url, config);
        if (res.status === 200) {
            console.log(res.status)
            this.props.Continue();
        } else if (res.status === 400) {
                alert("Error 400.\nMissing Email address or the Email is already taken.")
        
        }
        

    }



    render() {
        const { values, handleChange } = this.props;
        return (

            <LeftContainer>
                {console.log(values)}
                <LeftTopBar2>
                    <LinkAn> <Link to='/Login' >Already have an account?</Link></LinkAn>
                </LeftTopBar2>
                
                <Form2 onSubmit={this.handleSubmit}> 
                    <LefttMiddleBar>
                        <TitleStyled>Sign Up</TitleStyled>
                    <StyledForm>
                        <InputWrapper>
                            
                            <LoginInput onChange={handleChange('email')} defaultValue={values.email} type='email' placeholder='Email'/>
                        </InputWrapper>  
                    </StyledForm>
            
                    </LefttMiddleBar>
                    <LeftBottomBar2>
                        <BaseButton  onClick={this.Continuing} type='submit'>CONTINUE</BaseButton>
                    </LeftBottomBar2>
                </Form2>

                <OvalContainer>
                    <OvalBlue />
                    <OvalWhite />
                    <OvalWhite />
                </OvalContainer>

            </LeftContainer>

        )
    }
}

export default EmailSignUp