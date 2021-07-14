import SingleElimination from "../components/SingleElimination";
import RoundRobin from "../components/RoundRobin";
import styled from "styled-components";

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Standing = () => {

    const url = window.location.pathname;
    const url_array = url.split("/");
    const tournament_id = url_array[url_array.length - 2];

    // conditional rendering depending on tournament format

    const format = 'round_robin' // this can be passed by props
    // const tournament_id = 1

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

export default Standing