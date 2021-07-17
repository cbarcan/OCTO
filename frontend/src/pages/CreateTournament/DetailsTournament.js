import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import map from '../../assets/svgs/map.svg';
import bluepin from '../../assets/svgs/map2.svg';
import camara from '../../assets/svgs/photo-camera.svg';
import icon from '../../assets/images/faceicon.png'
import { PageContentPicture2, TitleHead2  } from './PrivateOr';
import { LeftMiddleBar, LeftBottomBar, BaseButton, InputWrapper} from '../Login/index';
import { InputWrapper2, InputsDiv, LongInput, ShortInput, StyledForm2, LabelText} from '../Login/SingUp/Verification';
import MovingBackground from '../../components/MovingBackground';



export const PageContentPicture3 = styled(PageContentPicture2)`
border-left: none;
color: #1a1f36;
box-sizing: border-box;
min-height: 100%;
width: 100%;
overflow: hidden;
flex-grow: 1;
`

export const FormContainer = styled.div`
    position: absolute;
    z-index: 1; 
    background: black;
    color: white;
    height: 80%;
    width: 70%;
    // border: 1px solid white;
    box-shadow: 3px 11px 21px 35px rgba(33,33,33,0.44);
    
`

export const TitleHead3 = styled(TitleHead2)`
    //border: solid blue;
    margin: 0;
    width: 30%;
    font-size: 17px;
    margin: 1.5%;
`


export const InputWrapper4 = styled(InputWrapper2)`
    //border: solid yellow;
    height: 20%;
    padding: 0;
    margin: 0;
    
`
export const LongInput2 = styled(LongInput)`
    // border: solid pink;
    height: 80%;
    margin-top: 1%;

    
`
export const ShortInput2 = styled(ShortInput)`
    // border: solid orange;
    height: 45%;
    padding: 0 5%;
`


export const InputsDiv2 = styled(InputsDiv)`
    // border: solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    height: 80%;
`

export const StyledForm3 = styled(StyledForm2)`
    // border: solid green;
    height: 80%;
    padding: 0;
    margin: 0;

`

export const InputWrapper3 = styled(InputWrapper)`
    //border: solid blue;
    padding: 0;
    margin: 0;
    height: 12%;
    margin-bottom: 15%;
    margin-top: 5%;
    
`

export const LeftMiddleBar2 = styled(LeftMiddleBar)`
    //border: solid purple;
    height: 100%;
    
`

export const LeftBottomBar2 = styled(LeftBottomBar)`
    // border: solid lightblue;
    height: 10%;
    margin-top: 2%;

`

export const SelectTorunament = styled.select`
    width: 100%;
    height: 47%;
    outline: none;
    border: none;
    padding-left: 30px;
    background: #ffffff75;
    border-radius: 30px;
    
    option {
        padding-right: 40%;
    }
`

export const MapImg = styled.img`
    // border: solid lightblue;
    height: 300%;
    position: relative;
    bottom: 435%;

`

export const PinImg = styled.img`
    //border: solid lightblue;
    height: 300%;
    z-index: 1;
    position: relative;
    bottom: 132%;
    cursor: pointer;

    &:hover {

        animation: bounce 1s infinite alternate;
        -webkit-animation: bounce 1s infinite alternate;

        @keyframes bounce {
            from { transform: translateY(0px); }
            to { transform: translateY(-15px);  }
        }

        @-webkit-keyframes bounce {
            from { transform: translateY(0px);}
            to { transform: translateY(-15px);}
        }
    }

`

export const CameraImg = styled.img`
    // border: solid lightblue;
    height: 145%;
    position: relative;
    bottom: 40%;
    cursor: pointer;
    right: 15%;

    &:hover {
        animation: shake 0.82s cubic-bezier(.36, .07, .19, .97) both ;
        transform: translate3d(0, 0, 0);

        @keyframes shake { 
            10%, 90% { transform: translate3d(-1px, 0, 0);}
            20%, 80% { transform: translate3d(2px, 0, 0); }
            30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
            40%, 60% {  transform: translate3d(4px, 0, 0); } 
        }
    }

    &:active {
        transform: translateY(4px);
    }

`

export const IconImg = styled.img`
    // border: solid lightblue;
    position: relative; 
    bottom: 172%;
    width: 30%;
    height: 127%;
    left: 63%;
    right: 0;

`





export const DetailsCreate = () => {


    const realFileInput = React.useRef(null);
    const replaceFileInput = (e) => {
        e.preventDefault()
        realFileInput.current.click()
    }

    const handleAvatar = (e) => {
        e.preventDefault()
        /* setUserImage(e.target.files[0]); */
    }

    return (
    
    <PageContentPicture3>
        
        <MovingBackground/>

        <FormContainer>

            <LeftMiddleBar2>
                <TitleHead3>Complete Tournament Details:</TitleHead3>
            <StyledForm3>

                <InputsDiv2> 
                    <InputWrapper4>
                        <LabelText> Torunament Name</LabelText>
                        <ShortInput2 type="text" />
                    </InputWrapper4>
                    <InputWrapper4>
                        <LabelText> Avatar</LabelText>
                        <input type="file" style={{display: "none"}} ref={realFileInput} onChange={e => handleAvatar(e)} accept="image/png, image/jpeg" multiple/>
                        <CameraImg onClick={replaceFileInput} src={camara} alt='camera'/> 
                        <IconImg src={icon} alt='icon face'/> 
                    </InputWrapper4>
                    <InputWrapper4>
                        <LabelText> Amount of Players</LabelText>
                        <ShortInput2 type="number" />
                    </InputWrapper4>
                    <InputWrapper4>

                        <LabelText> Type of Tournament </LabelText>

                        <SelectTorunament name="Turnament">
                            <option value="Single Elimination">Single Elimination</option>
                            <option value="Round robin">Round Robin</option>
                            <option value="fiaMixed: groups + singlet">Groups + Elimination</option>
                        </SelectTorunament>

                        
                    </InputWrapper4>

                    <InputWrapper4>
                        <LabelText> Location</LabelText>
                        <PinImg src={bluepin} alt='map position'/>
                        <MapImg src={map} alt='map'/>
                    </InputWrapper4>
                    <InputWrapper4>
                        <LabelText> Time Field</LabelText>
                        <ShortInput2  type="datetime-local" />
                    </InputWrapper4> 
                </InputsDiv2>

                <InputWrapper3>
                        <LabelText> Description</LabelText>
                        <LongInput2  type="text" />
                </InputWrapper3>

            </StyledForm3>
            </LeftMiddleBar2>

            <LeftBottomBar2>
                <BaseButton type="submit">COMPLETE</BaseButton>
            </LeftBottomBar2>

        </FormContainer>

        
            
    </PageContentPicture3>

        




    )
}

export default DetailsCreate