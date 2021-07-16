import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { user } from './reducers/userReducer'
import { tournament } from './reducers/tournamentReducer'

const middlewares = [thunk];
const reducers = combineReducers({
    user,
    tournament
});

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(...middlewares),
    ));

export default store;
