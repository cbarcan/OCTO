import PageTitle from "../../styles/page-title";
import BracketGeneratorSE from "../BracketGeneratorSE";


const SingleElimination = (props) => {
    return (
        <>
            <PageTitle pageTitle="Name of the tournament" />
            <BracketGeneratorSE tournament_id={props.tournament_id}/>
        </>
    )
}

export default SingleElimination