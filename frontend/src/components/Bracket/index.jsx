import styled from "styled-components";
import avatar from "../../assets/svgs/avatar.svg"

const Wrapper = styled.div`
  height: 100px;
  width: 200px;
  display: flex;
  flex-direction: column;

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

const Bracket = () => {
    return (
        <Wrapper>
            <Player1>
                <div className={"name"}>
                    <img src={avatar} alt={"user"}/>
                    <p>Gian</p>
                </div>
                <div className={"points loser"}>
                    <p>2</p>
                </div>
            </Player1>
            <Player2>
                <div className={"name"}>
                    <img src={avatar} alt={"user"}/>
                    <p>Jon</p>
                </div>
                <div className={"points winner"}>
                    <p>3</p>
                </div>
            </Player2>
        </Wrapper>
    )
}

export default Bracket