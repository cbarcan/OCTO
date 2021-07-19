import PageTitle from "../../styles/page-title";
import BracketGeneratorSE from "../BracketGeneratorSE";
import {useLocation} from "react-router-dom";
import StandingGeneratorSE from "../StandingGeneratorSE";


const SingleElimination = (props) => {

    const location = useLocation();

    return (
        <>
            <PageTitle pageTitle="Tournament Name" />
            {
                location.pathname === `/tournament/${props.tournament_id}/standing`
                ?
                <StandingGeneratorSE tournament_id={props.tournament_id}/>
                :
                <BracketGeneratorSE tournament_id={props.tournament_id}/>
            }
        </>
    )
}

export default SingleElimination