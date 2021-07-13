import PageTitle from "../../styles/page-title";
import BracketGeneratorRR from "../BracketGeneratorRR";
import {useLocation} from "react-router-dom";

const RoundRobin = (props) => {

    const location = useLocation();

    console.log(location)

    return (
        <>
            <PageTitle pageTitle="Name of the tournament" />
            {
                location.pathname === `/tournament/${props.tournament_id}/standing`
                ?
                <h1>bla</h1>
                :
                <BracketGeneratorRR tournament_id={props.tournament_id}/>
            }
        </>
    )
}

export default RoundRobin