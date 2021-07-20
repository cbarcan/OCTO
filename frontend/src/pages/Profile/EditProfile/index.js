import React from "react";
import styled from "styled-components";
import {UserProfilePicIcon} from "../ProfileCard";
import avatarWhite from "../../../assets/svgs/avatarWhite.svg"
import icon from '../../../assets/images/faceicon.png'
import {FormContainer, LongInput2 } from "../../CreateTournament/DetailsTournament";
import MovingBackground from "../../../components/MovingBackground";
import {TitleHead3} from "../../CreateTournament/DetailsTournament";
import {LabelText} from "../../Login/SingUp/Verification";
import {BaseButton} from "../../Login";
import camera from "../../../assets/svgs/photo-camera.svg";


const Container = styled(FormContainer)`
  //border: solid yellow;
  border-radius: 25px;
  margin-top: 4%;
  min-width: 65%;
  min-height: 70%;
  display: flex;
  background: none;
  box-shadow: 3px 11px 21px 35px rgba(33,33,33,0.44);

`
const Top = styled.div `
  //border: solid yellow;
  border-radius: 25px;
  //background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 94%;
  padding: 6% 1%;

  img {
    &:hover {
      opacity: 0.4;
      cursor: pointer;
    }
  }
`
const Title = styled(TitleHead3)`
  //border: solid yellow;
  color: black;
  font-weight: bold;
  width: 50%;
  margin-right: 20%;
  margin-bottom: 7%;
  margin-top: 10%;
  font-size: 20px; 
`
const WrapperAvatar = styled.div `
  //border: solid red;
  background: white;
  border-radius: 25px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
    
    /* &:hover {
      img {
        display: inline;
      }
    } 
  
    &:hover ${UserProfilePicIcon}{
      opacity: 0.3;
    }

    img {
      height: 20%;
    }*/
  `
const Wrapper = styled.div`
  //border: solid purple;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  label {
    color: black;
    font-family: monospace;
    margin: 0;
    //margin-left: 36%;
    width: 65%;
  }
`
const ButtonWrapper = styled.div`
  //border: solid green;
  width: 100%;
  text-align: center;
  button {
    color: grey;
    font-weight: bold;
    margin: 5% 0;
    
    
    
    &:hover {
      color: white;
    }
  }
`
const ProfileInput = styled(LongInput2)`
  //border: 1px solid grey;
  height:40px;
  width: 65%; 
  margin: 10px 0;
  background: lightgray;
  color:black;
            
  ::placeholder {
      color: black;
  }
`
/* const Img = styled.img`
  //border: solid grey;
  height: 20%;
  width: 20%; 
  position: absolute;
  margin-top:29px; 
  display:none;    
`*/


const EditProfile = () => {

    const realFileInput = React.useRef(null);
    const replaceFileInput = (e) => {
        e.preventDefault()
        realFileInput.current.click()
    }

    const handleAvatar = (e) => {
        e.preventDefault()
    }
    return (
    <>
        <MovingBackground/>
             <Container>
                <Top>
                 
                 <UserProfilePicIcon src = { icon } alt="avatar" onClick={replaceFileInput}/>
                 <input type="file" style={{display: "none"}} ref={realFileInput} onChange={e => handleAvatar(e)} accept="image/png, image/jpeg" multiple/>
                </Top>

               <WrapperAvatar>
               <Title>Edit your Profile</Title>
               <Wrapper>
                 <LabelText>First name</LabelText>
                 <ProfileInput type="text" />
               </Wrapper>
               <Wrapper>
                 <LabelText>Last name</LabelText>
                 <ProfileInput type="text"/>
               </Wrapper>
               <Wrapper>
                 <LabelText>Company</LabelText>
                 <ProfileInput type="text"/>
               </Wrapper>
               <Wrapper>
                 <LabelText>Location</LabelText>
                 <ProfileInput type="text"/>
               </Wrapper>
               <Wrapper>
                 <LabelText>Email</LabelText>
                 <ProfileInput type="email"/>
               </Wrapper>
               <ButtonWrapper>
                 <BaseButton type="submit">Save Changes</BaseButton>
               </ButtonWrapper>
               </WrapperAvatar>

            </Container>
    </>
    )
};
export default EditProfile