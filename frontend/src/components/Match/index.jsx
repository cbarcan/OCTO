import styled from "styled-components";
import avatar from "../../assets/svgs/avatar.svg";
import Modal from 'react-modal';
import {useState} from "react";
import PageTitle from "../../styles/page-title";

const Wrapper = styled.div`
  height: 70px;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  box-shadow: ${props => props.theme.boxShadowDarkRight};
  transform: perspective(100px) translateZ(0px);
  transition: transform 100ms linear;

  :hover {
    cursor: pointer;
    transform: perspective(100px) translateZ(10px);
  }

  .name {
    height: 100%;
    width: 80%;
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      margin: 0 10px;
    }
  }

  .points {
    height: 100%;
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.backgroundLigthNavy};

    p {
      font-weight: ${props => props.theme.textWeightBold};
    }
  }
`

const Player1 = styled.div`
  height: 35px;
  width: 100%;
  background: ${props => props.theme.backgroundLigthNavy};
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;

  .winner {
    background: ${props => props.theme.octoGreen};
    border-radius: 0 5px 0 0;
  }

  .loser {
    background: ${props => props.theme.accentColorLight};
    border-radius: 0 5px 0 0;
    opacity: 0.5;
  }

  .normal {
    background: ${props => props.theme.mediumGrey60};
    border-radius: 0 5px 0 0;
    opacity: 0.5;
  }
`

const Player2 = styled.div`
  height: 35px;
  width: 100%;
  background: ${props => props.theme.backgroundLigthNavy};
  border-radius: 0 0 5px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .winner {
    background: ${props => props.theme.octoGreen};
    border-radius: 0 0 5px 0;
  }

  .loser {
    background: ${props => props.theme.accentColorLight};
    border-radius: 0 0 5px 0;
    opacity: 0.5;
  }

  .normal {
    background: ${props => props.theme.mediumGrey60};
    border-radius: 0 0 5px 0;
    opacity: 0.5;
  }
`

const ScoreWrapper = styled.div`
  height: 70vh;
  width: 50vw;  
  box-shadow: ${props => props.theme.boxShadowDark};
  background: ${props => props.theme.backgroundDarkNavy};
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
  }
`

Modal.setAppElement("#root");
Modal.defaultStyles.overlay.backgroundColor = "rgb(145, 145, 145, 0.6)";
Modal.defaultStyles.content.border = "none";

const Button = styled.button`
  outline: none;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  margin-right: 3%;
  margin-top: 3%;
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

const Match = (props) => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: "#1A1C2C",
            padding: "2%",
        },
    };

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);

    const closeModal = () => setIsOpen(false);

    return (
        <>
            <Wrapper onClick={openModal}>
                <Player1>
                    <div className={"name"}>
                        <img src={avatar} alt={"user"}/>
                        <p>{props.match.players[0].first_name} {props.match.players[0].last_name}</p>
                    </div>
                    <div className={"points loser"}>
                        <p>2</p>
                    </div>
                </Player1>
                <Player2>
                    <div className={"name"}>
                        <img src={avatar} alt={"user"}/>
                        <p>{props.match.players[1].first_name} {props.match.players[1].last_name}</p>
                    </div>
                    <div className={"points winner"}>
                        <p>3</p>
                    </div>
                </Player2>
            </Wrapper>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Match"
            >
                <ScoreWrapper>
                    <div className={"close"}>
                        <Button onClick={closeModal}>X</Button>
                    </div>
                    <div className={"result"}>
                        <PageTitle pageTitle={"Bolor VS Valentina"}/>
                    </div>
                </ScoreWrapper>
            </Modal>
        </>
    )
}

export default Match