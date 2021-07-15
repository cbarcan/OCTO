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
   width: 40%; 
`
const Top = styled.div `
    display: flex; 
    align-items:center; 
    justify-content: center; 
`
const Title = styled(TitleHead3)`
    width: 45%;
    font-size: 30px;
    margin: 40px; 
`
const WrapperAvatar = styled.div `
    display: flex; 
    align-items:center; 
    flex-direction: column;  
    
    &:hover {
      img {
        display: inline;
      }
    }
  
    &:hover ${UserProfilePicIcon}{
      opacity: 0.3;
    }
  `
const Wrapper = styled.div`
    display: flex; 
    align-items:center; 
    flex-direction: column;
`
const ButtonWrapper = styled.div`
    display: flex; 
    align-items:center; 
    flex-direction: column;
    margin: 20px; 
`
const ProfileInput = styled(LongInput2)`
    height:40px;
    width: 350px; 
    margin: 10px 0; 
`
const Img = styled.img`
    height: 20px;
    width: 20px; 
    position: absolute;
    margin-top:29px; 
    display:none;   
`
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
               <Top><Title>Edit your Profile</Title></Top>
               <WrapperAvatar>
                 <UserProfilePicIcon src = { avatarWhite } alt="avatar"/>
                 <Img onClick={replaceFileInput} src={camera} alt="camera"/>
                 <input type="file" style={{display: "none"}} ref={realFileInput} onChange={e => handleAvatar(e)} accept="image/png, image/jpeg" multiple/>
               </WrapperAvatar>
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
            </Container>
    </>
};
export default EditProfile