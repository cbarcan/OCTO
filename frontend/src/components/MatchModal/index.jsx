import {useState} from "react";
import BackgroundImg from "../../assets/images/background3.jpg";
import PageTitle from "../../styles/page-title";
import Participant from "../Tournament/Participant";
import Modal from "react-modal";
import styled from "styled-components";
import {BaseButton} from "../../pages/Login";
import calendar_icon from "../../assets/svgs/calendar.svg"

const ScoreWrapper = styled.div`
  height: 70vh;
  width: 70vw;
  display: flex;
  flex-direction: column;

  //close button div
  .close {
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }

  //match content div
  .result {
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .date_time {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: white;
      padding: 0 2%;

      p {
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
      height: 50%;
      width: 100%;
      margin: 0 2%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .draw_on {
        writing-mode: vertical-rl;
        letter-spacing: 10px;
        text-orientation: upright;
        color: white;
        font-weight: 700;
        font-size: 24px;
        margin-top: 4%;
      }

      .draw_off {
        display: none;
      }

      .points {
        height: 25%;
        width: 8%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme.mediumGrey60};
        border-radius: 5px;
        margin-top: 4%;
      }

      .winner {
        background: ${props => props.theme.octoLightBlue};
      }

      .loser {
        background: ${props => props.theme.accentColorLight};
        opacity: 0.5;
      }

      input {
        height: 30px;
        width: 40px;
        outline: none;
        border: none;
        background: none;
        font-size: 30px;
        font-weight: 700;
        text-align: center;
        color: ${props => props.theme.backgroundLigthNavy};
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
  margin-top: 4%;
  font-weight: 700;
  font-size: 24px;
`

const MatchModal = (props) => {

    const [value1, setValue1] = useState(null);
    const [value2, setValue2] = useState(null);

    const changeValue1 = (e) => {
        setValue1(e.target.value)
    }

    const changeValue2 = (e) => {
        setValue2(e.target.value)
    }

    const closeModal = () => {
        setValue1(null);
        setValue2(null);
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
            background: `url(${BackgroundImg})`,
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
                    <PageTitle pageTitle={"Bolor VS Valentina"} margin={"none"}/>
                    <div className={"date_time"}>
                        <p>time</p>
                        <button type={"button"}><img src={calendar_icon} alt={"calendar_icon"}/></button>
                    </div>
                    <div className={"wrapper_score"}>
                        <Player>
                            <h1 className={value1 > value2 ? "on" : "off"}>WINNER</h1>
                            <Participant name={'Tina'} location={'Bed'}/>
                        </Player>
                        <div className={value1 === value2 ? "points" : value1 > value2 ? "points winner" : "points loser"}>
                            <input type={"text"} placeholder={0} value={value1} onChange={changeValue1}/>
                        </div>
                        <p className={value1 === value2 ? "draw_on" : "draw_off"}>DRAW</p>
                        <div className={value1 === value2 ? "points" : value1 < value2 ? "points winner" : "points loser"}>
                            <input type={"text"} placeholder={0} value={value2} onChange={changeValue2}/>
                        </div>
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