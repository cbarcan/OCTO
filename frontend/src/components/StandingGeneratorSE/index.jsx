import Participant from "../Tournament/Participant";
import styled from "styled-components";
import octo_victory from "../../assets/svgs/octo-victory-transparent.svg"

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  padding: 0 10%;
  align-items: center;

  .place {
    margin: 1% 0;
    font-size: 28px;
  }

  div {

    width: 100%;

    div:first-child {
      width: 100%;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      * {
        margin: 0;
      }
      
      img {
        margin-right: 5%;
      }
      
      p {
        margin-right: 5%;
      }
    }
  }
`

const Left = styled.div`
  height: fit-content;
  width: 50%;
  display: flex;
  flex-direction: column;
`

const Right = styled.div`
  height: 547px;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 5%;
`

const StandingGeneratorSE = () => {
    return (
        <Wrapper>
            <Left>
                <p className={"place"}>First place</p>
                <Participant name={'Tina'} location={'Bed'}/>
                <p className={"place"}>Second place</p>
                <Participant name={'Tina'} location={'Bed'}/>
                <p className={"place"}>Third place</p>
                <Participant name={'Tina'} location={'Bed'}/>
            </Left>
            <Right>
                <img src={octo_victory} alt={"octo victory"}/>
            </Right>
        </Wrapper>
    )
}

export default StandingGeneratorSE