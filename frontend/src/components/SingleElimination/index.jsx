import PageTitle from "../../styles/page-title";
import BracketGeneratorSE from "../BracketGeneratorSE";
import {useLocation} from "react-router-dom";


const SingleElimination = (props) => {

    const location = useLocation();

    return (
        <>
            <PageTitle pageTitle="Name of the tournament" />
            {
                location.pathname === `/tournament/${props.tournament_id}/standing`
                ?
                <h1>bla</h1>
                :
                <BracketGeneratorSE tournament_id={props.tournament_id}/>
            }
        </>
    )
}

export default SingleElimination