import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import octo from "../../../assets/images/octopus_poly.png";
import { PageContentPicture, LeftContainer, RightTopBar, LinkAn, RightMiddleBar, TitleStyled, StyledForm, InputWrapper, LoginInput, RightBottomBar, BaseButton, RigthContainer} from '../index';

export const Input2 = styled.input`
    width: 300px;
    height: 20px;
    font-size: ${props => props.theme.textSizeS}; ;
    border: none;
    outline: none;
    border-bottom: 1.5px rgba(212, 208, 208, 0.619) solid;
    margin-bottom: 20px;
    border-radius: 6px;
    color: white;

    :hover {
        outline: none;
        cursor: text;
    }
`

export const OvalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 8%;
`

export const OvalBlack = styled.div`
    background: white;
    height: 10px;
    width: 10px;
    border-radius: 30px;
    margin-right: 7px;
    margin-left: 7px;
`

export const OvalWhite= styled.div`
    border: solid white;
    height: 6px;
    width: 6px;
    border-radius: 30px;
    margin-right: 7px;
    margin-left: 7px;
`
const Form2 = styled.form`
    height: 55%;
`
const RightTopBar2 = styled(RightTopBar)`
    margin-bottom: 15%;
`

const RightMiddleBar2 = styled(RightMiddleBar)`
    margin-bottom: 26%;
`

class EmailSignUp extends React.Component {


    Continuing = (e) => {
        e.preventDefault();
        this.handleSubmit(e)
           
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

            <PageContentPicture>
                <LeftContainer>
                {console.log(values)}
                <RightTopBar2>
                    <LinkAn> <Link to='/Login' >Already have an account?</Link></LinkAn>
                </RightTopBar2>
                
                <Form2 onSubmit={this.handleSubmit}> 
                    <RightMiddleBar2>
                        <TitleStyled>Sign Up</TitleStyled>
                    <StyledForm>
                        <InputWrapper>
                            
                            Heeeeey
                        </InputWrapper>  
                    </StyledForm>
            
                    </RightMiddleBar2>
                    <RightBottomBar>
                        heeeeeeey2
                    </RightBottomBar>
                </Form2>

                <OvalContainer>
                    <OvalBlack />
                    <OvalWhite />
                    <OvalWhite />
                </OvalContainer>
                </LeftContainer>
                <RigthContainer>
                    <img src={octo} alt='logo'/>
                </RigthContainer>

            </PageContentPicture>


        )
    }
}

export default EmailSignUp