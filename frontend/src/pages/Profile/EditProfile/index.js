import React from "react";
import styled from "styled-components";
import {UserProfilePicIcon} from "../ProfileCard";
import avatarWhite from "../../../assets/svgs/avatarWhite.svg"
import {FormContainer, LongInput2} from "../../CreateTournament/DetailsTournament";
import MovingBackground from "../../../components/MovingBackground";
import {TitleHead3} from "../../CreateTournament/DetailsTournament";
import {LabelText} from "../../Login/SingUp/Verification";
import {BaseButton} from "../../Login";
import camera from "../../../assets/svgs/photo-camera.svg"


const Container = styled(FormContainer)`
  //border: solid yellow;
  width: 60%;
  height: 80%;
  display: flex;
`
const Top = styled.div `
  //border: solid blue;
  text-align: center;
  width: 70%;
  padding: 6% 1%;
`
const Title = styled(TitleHead3)`
  //border: solid yellow;
  width: 100%;
  font-size: 25px; 
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
    //font-family: monospace;
    margin: 0;
  }
`
const ButtonWrapper = styled.div`
  //border: solid green;
  width: 100%;
  text-align: center;
  button {
    color: black;
  }
`
const ProfileInput = styled(LongInput2)`
  border: solid peru;
  height:40px;
  width: 350px; 
  margin: 10px 0;
  color: black; 
`
const Img = styled.img`
  border: solid grey;
  height: 20%;
  width: 20%; 
  /* position: absolute;
  margin-top:29px; 
  display:none;  */  
`

/* const RigthWrapper = styled.div`
  border: solid grey;
  display: flex;
  flex-direction: column;
` */

const EditProfile = () => {

    const realFileInput = React.useRef(null);
    const replaceFileInput = (e) => {
        e.preventDefault()
        realFileInput.current.click()
    }

    const handleAvatar = (e) => {
        e.preventDefault()
    }
    return <>
        <MovingBackground/>
             <Container>
                <Top>
                 <Title>Edit your Profile</Title>
                 <UserProfilePicIcon src = { avatarWhite } alt="avatar"/>
                 <Img onClick={replaceFileInput} src={camera} alt="camera"/>
                 <input type="file" style={{display: "none"}} ref={realFileInput} onChange={e => handleAvatar(e)} accept="image/png, image/jpeg" multiple/>
                </Top>

               <WrapperAvatar>
               <Wrapper>
                 <LabelText>First name</LabelText>
                 <ProfileInput />
               </Wrapper>
               <Wrapper>
                 <LabelText>Last name</LabelText>
                 <ProfileInput/>
               </Wrapper>
               <Wrapper>
                 <LabelText>Company</LabelText>
                 <ProfileInput/>
               </Wrapper>
               <Wrapper>
                 <LabelText>Location</LabelText>
                 <ProfileInput/>
               </Wrapper>
               <Wrapper>
                 <LabelText>Email</LabelText>
                 <ProfileInput/>
               </Wrapper>
               <ButtonWrapper>
                 <BaseButton type="submit">Save changes</BaseButton>
               </ButtonWrapper>
               </WrapperAvatar>

            </Container>
    </>
};
export default EditProfile