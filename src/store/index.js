import { legacy_createStore as createStore, combineReducers, compose } from 'redux';
import counter from './counter';
import auth from './auth';

/**
 *  Helper function provided by Redux to handle combining
 *  multiple pieces of state in our store
 */
const reducers = combineReducers({
    auth,
    counter,
});

/**
 *  Adding Redux Devtools Extension support,
 *  {@link https://github.com/zalmoxisus/redux-devtools-extension Redux Devtools Extension}
 */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(reducers, composeEnhancer());

export default store;
