import {Route, Switch} from "react-router-dom";
import BracketPage from "./BracketPage";


const Home = () => {
    return (
        <Switch>
            <Route path={`/tournament/:id`} component={ BracketPage } />
        </Switch>
    )
}


export default Home