import styled from "styled-components";
import SingleElimination from "../components/SingleElimination";
import RoundRobin from "../components/RoundRobin";
import Header from './TournamentHeader'


const Wrapper = styled.div`
  height: fit-content;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Bracket = () => {

    const url = window.location.pathname;
    const url_array = url.split("/");
    const tournament_id = url_array[url_array.length - 2];

    // conditional rendering depending on tournament format

    const format = 'single_elimination' // this can be passed by props
    // const tournament_id = 1

    if (format === 'single_elimination') {
        return (
            <Wrapper>
                <Header/>
                <SingleElimination tournament_id={tournament_id}/>
            </Wrapper>
        )
    }
    else if (format === 'round_robin') {
        return (
            <Wrapper>
                <Header/>
                <RoundRobin tournament_id={tournament_id}/>
            </Wrapper>
        )
    }
     // else mixed

}

export default Bracket