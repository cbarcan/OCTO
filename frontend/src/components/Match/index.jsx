import styled from "styled-components";
import avatar from "../../assets/svgs/avatar.svg";
import {useState} from "react";
import MatchModal from "../MatchModal";

const Wrapper = styled.div`
  height: 70px;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  box-shadow: ${props => props.theme.boxShadowDarkRight};
  transform: perspective(100px) translateZ(0px);
  transition: transform 100ms linear;
  font-weight: bold;
  

  :hover {
    cursor: pointer;
    transform: perspective(100px) translateZ(10px);
  }

  .name {
    height: 100%;
    width: 80%;
    display: flex;
    align-items: center;
    color: black;
    font-weight: bold;
    

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
      font-weight: bold;
      color: black;
    }
  }
`

const Player1 = styled.div`
  //border: solid blue;
  height: 35px;
  width: 100%;
  background: white;
  color: white;
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
  }

  .normal {
    background: ${props => props.theme.mediumGrey60};
    border-radius: 0 5px 0 0;
    opacity: 0.5;
  }
`

const Player2 = styled.div`
  //border: solid green;
  height: 35px;
  width: 100%;
  background: white;
  color: white;
  border-radius: 0 0 5px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .winner {
    background: ${props => props.theme.octoLightBlue};
    border-radius: 0 0 5px 0;
    color: white;
  }

  .loser {
    background: black;
    border-radius: 0 0 5px 0;
    //opacity: 0.5;
    color: white;
  }

  .normal {
    background: ${props => props.theme.mediumGrey60};
    border-radius: 0 0 5px 0;
    opacity: 0.5;
  }
`

const Match = (props) => {

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
            <MatchModal modalIsOpen={modalIsOpen} openModal={openModal} closeModal={closeModal}/>
        </>
    )
}

export default Match