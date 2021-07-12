import PageTitle from "../../styles/page-title";
import BracketGeneratorRR from "../BracketGeneratorRR";

const RoundRobin = (props) => {
    return (
        <>
            <PageTitle pageTitle="Name of the tournament" />
            <BracketGeneratorRR tournament_id={props.tournament_id}/>
        </>
    )
}

export default RoundRobin