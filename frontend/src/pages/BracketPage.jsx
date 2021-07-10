import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import styled from "styled-components";
import SingleElimination from "../components/SingleElimination";

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BracketPage = () => {

    const url = window.location.pathname;
    const url_array = url.split("/");
    const tournament_id = url_array[url_array.length - 2];

    return (
        <Wrapper>
            <Switch>
                <Route path={`/tournament/${tournament_id}/round_robin`} component={ Home } exact />
                <Route path={`/tournament/${tournament_id}/single_elimination`} component={ SingleElimination } exact />
            </Switch>
        </Wrapper>
    )
}

export default BracketPage