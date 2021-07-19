import BracketGeneratorRR from "../BracketGeneratorRR";
import {useLocation} from "react-router-dom";
import StandingGeneratorRR from "../StandingGeneratorRR";

const RoundRobin = (props) => {

    const location = useLocation();

    console.log(location)

    return (
        <>
            {
                location.pathname === `/tournament/${props.tournament_id}/standing`
                ?
                <StandingGeneratorRR tournament_id={props.tournament_id}/>
                :
                <BracketGeneratorRR tournament_id={props.tournament_id}/>
            }
        </>
    )
}

export default RoundRobin