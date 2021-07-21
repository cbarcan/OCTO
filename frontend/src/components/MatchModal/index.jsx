import {useState} from "react";
import BackgroundImg from "../../assets/images/background3.jpg";
import PageTitle from "../../styles/page-title";
import Participant from "../Tournament/Participant";
import Modal from "react-modal";
import styled from "styled-components";
import {BaseButton} from "../../pages/Login";
import calendar_icon from "../../assets/svgs/calendar.svg"

const ScoreWrapper = styled.div`
  //border: solid yellow;
  border-radius: 30px;
  height: 60vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  color: black;
  padding: 5%;

  //close button div
  .close {
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    
    button {
      color: black;
    }
  }

  //match content div
  .result {
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      text-align: center;
      width: 80%;
      letter-spacing: 0.1em;
      color: black;
      border-bottom: 1px solid black;
      padding-bottom: 3%;
      //padding-right: 15%;
    }
    

    .date_time {
      border: solid blue;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: black;
      padding: 0 2%;

      p {
        font-weight: bold;
        margin-right: 2%;
      }

      button {
        height: 40px;
        width: 40px;
        background: none;
        border: none;
        outline: none;
        display: flex;
        transform: perspective(100px) translateZ(0px);
        transition: transform 100ms linear;

        :hover {
          cursor: pointer;
          transform: perspective(100px) translateZ(20px);
        }

        :active {
          transform: translateY(2px);
        }

      }
    }

    .wrapper_score {
      //border: solid blue;
      height: 50%;
      width: 100%;
      margin: 0 2%;
      margin-top: 2%;
      display: flex;
      //flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      .draw_on {
        //writing-mode: vertical-rl;
        letter-spacing: 10px;
        text-orientation: upright;
        color: black;
        font-weight: 1000;
        font-size: 40px;
        margin: 0 4%;
        margin-top: 4%;
        text-shadow: -3px 2px 8px #707070;
      }

      .draw_off {
        display: none;
      }

      .points {
        height: 80%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme.mediumGrey60};
        border-right: solid 4px #19c5db;
        box-shadow: 0px 20px 35px -16px rgba(125, 249, 255, 0.6);
        border-radius: 6px;
        margin-top: 4%;
        color: black;
        
        :hover {
          cursor: text;
        }
      }

      .winner {
        background: ${props => props.theme.octoLightBlue};
      }

      .loser {
        background: ${props => props.theme.accentColorLight};
        opacity: 0.5;
      }

      input {
        border: solid red;
        height: 55%;
        width: 100%;
        outline: none;
        border: none;
        background: none;
        font-size:100px;
        font-weight: 700;
        text-align: center;
        color: white;
      }
    }
  }
`

const Player = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    color: white;
    font-weight: 700;
    font-size: 28px;
    opacity: 0;
  }

  .on {
    opacity: 1;
  }

  .off {
    opacity: 0;
  }
`

Modal.setAppElement("#root");
Modal.defaultStyles.overlay.backgroundColor = "rgb(145, 145, 145, 0.6)";
Modal.defaultStyles.content.border = "none";
Modal.defaultStyles.content.padding = "none";

const CloseButton = styled.button`
  outline: none;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  margin-right: 2%;
  margin-top: 2%;
  transform: perspective(100px) translateZ(0px);
  transition: transform 100ms linear;

  :hover {
    cursor: pointer;
    transform: perspective(100px) translateZ(20px);
  }

  :active {
    transform: translateY(2px);
  }
`

const SubmitButton = styled(BaseButton)`
  margin-top: 7%;
  font-weight: 700;
  font-size: 24px;
  color: grey;
  

  &:hover {
    color: white;
  }


`

const MatchModal = (props) => {

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);

    const changeValue1 = (e) => {
        if (parseInt(e.target.value)){
            console.log(e.target.value)
            setValue1(parseInt(e.target.value));
        }
        else if (e.target.value===""){
            setValue1(0);
        }
        else {
            console.log(e.target.value)
            e.preventDefault();
        }
    }

    const changeValue2 = (e) => {
        if (parseInt(e.target.value)) {
            console.log(e.target.value)
            setValue2(parseInt(e.target.value));
        }
        else if (e.target.value===""){
            setValue2(0);
        }
        else {
            console.log(e.target.value)
            e.preventDefault()
        }
    }

    const closeModal = () => {
        setValue1(0);
        setValue2(0);
        props.closeModal();
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            borderRadius: '30px',
            padding: '2%',
        },
    };

    return (
        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Match"
        >
            <ScoreWrapper>
                <div className={"close"}>
                    <CloseButton onClick={closeModal}>X</CloseButton>
                </div>
                <form className={"result"}>
                    <PageTitle pageTitle={"BOLOR VS TINA"} margin={"none"}/>
                    
                    <div className={"wrapper_score"}>
                        <Player>
                            <h1 className={value1 > value2 ? "on" : "off"}>WINNER</h1>
                            <Participant name={'Tina'} location={'Bed'}/>
                        </Player>
                        <label className={value1 === value2 ? "points" : value1 > value2 ? "points winner" : "points loser"}>
                            <input type={"text"} placeholder={0} value={value1} onChange={changeValue1}/>
                        </label>
                        <p className={value1 === value2 ? "draw_on" : "draw_off"}>DRAW</p>
                        <label className={value1 === value2 ? "points" : value1 < value2 ? "points winner" : "points loser"}>
                            <input type={"text"} placeholder={0} value={value2} onChange={changeValue2}/>
                        </label>
                        <Player>
                            <h1 className={value1 < value2 ? "on" : "off"}>WINNER</h1>
                            <Participant name={'Tina'} location={'Bed'}/>
                        </Player>
                    </div>
                    {/*<textarea/>*/}
                    <SubmitButton type={"submit"}>SAVE</SubmitButton>
                </form>
            </ScoreWrapper>
        </Modal>
    )
}

export default MatchModal

{/* <div className={"date_time"}>
  <p>time</p>
  <button type={"button"}><img src={calendar_icon} alt={"calendar_icon"}/></button>
</div> */}