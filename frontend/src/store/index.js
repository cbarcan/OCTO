import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { user } from './reducers/userReducer'
import { team } from './reducers/teamReducer'
import { tournament } from './reducers/tournamentReducer'

const middlewares = [thunk];
const reducers = combineReducers({
    user,
});

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(...middlewares),
    ));

export default store;
