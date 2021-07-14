import styled from "styled-components";

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container = styled.div`
  margin: 0.3% 0;
  background-color: black;
  opacity: 90%;
  border-radius: 4px;
  padding: 15px;
  width: 80%;
  display: flex;
  box-shadow: ${props => props.theme.boxShadowOcto};

  p {
    white-space: nowrap;
    height: 100%;
    width: 10%;
    display: flex;
    justify-content: center;
    
    :first-child {
      width: 3%;
      justify-content: center;
    }
    
    :nth-child(2) {
      width: 17%;
      justify-content: flex-start;
    }
  }
  
  :first-child {
      p:nth-child(2) {
        margin-left: 3%;
        width: 14%;
      }
  }
`


const Player = (props) => {
    return (
        <Container>
            <p>{props.index + 1}.</p>
            <p>{props.player.user.first_name} {props.player.user.last_name}</p>
            <p>{props.player.matches_played}</p>
            <p>{props.player.wins}</p>
            <p>{props.player.draws}</p>
            <p>{props.player.loses}</p>
            <p>{props.player.score_for}</p>
            <p>{props.player.score_against}</p>
            <p>{props.player.score_diff}</p>
            <p>{props.player.points}</p>
        </Container>
    )
}

const StandingGeneratorRR = () => {

    const standing = [
        {
            id: "0",
            user: {
                first_name: "Jon",
                last_name: "Name"
            },
            matches_played: 2,
            wins: 2,
            draws: 0,
            loses: 0,
            score_for: 5,
            score_against: 2,
            score_diff: 3,
            points: 6,
        },
        {
            id: "0",
            user: {
                first_name: "Jon",
                last_name: "Name"
            },
            matches_played: 2,
            wins: 2,
            draws: 0,
            loses: 0,
            score_for: 5,
            score_against: 2,
            score_diff: 3,
            points: 6,
        },
        {
            id: "0",
            user: {
                first_name: "Jon",
                last_name: "Name"
            },
            matches_played: 2,
            wins: 2,
            draws: 0,
            loses: 0,
            score_for: 5,
            score_against: 2,
            score_diff: 3,
            points: 6,
        },
        {
            id: "0",
            user: {
                first_name: "Jon",
                last_name: "Name"
            },
            matches_played: 2,
            wins: 2,
            draws: 0,
            loses: 0,
            score_for: 5,
            score_against: 2,
            score_diff: 3,
            points: 6,
        },
    ]


    return (
        <Wrapper>
            <Container>
                <p>No.</p>
                <p>Player name</p>
                <p>Matches played</p>
                <p>Wins</p>
                <p>Draws</p>
                <p>Loses</p>
                <p>Score for</p>
                <p>Score against</p>
                <p>Score difference</p>
                <p>Points</p>
            </Container>
            {standing.map((item, index) => <Player key={`${item}-${index}`} index={index} player={item}/>)}
        </Wrapper>
    )
}

export default StandingGeneratorRR