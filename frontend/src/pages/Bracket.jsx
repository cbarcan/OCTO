import styled from "styled-components";
import SingleElimination from "../components/SingleElimination";
import RoundRobin from "../components/RoundRobin";

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Bracket = () => {

    // conditional rendering depending on tournament format

    const format = 'single_elimination' // this can be passed by props
    const tournament_id = 1

    if (format === 'single_elimination') {
        return (
            <Wrapper>
                <SingleElimination tournament_id={tournament_id}/>
            </Wrapper>
        )
    }
    else if (format === 'round_robin') {
        return (
            <Wrapper>
                <RoundRobin tournament_id={tournament_id}/>
            </Wrapper>
        )
    }
     // else mixed

}

export default Bracket