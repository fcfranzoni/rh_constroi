/*
 src/reducers/rootReducer.js
*/

import { combineReducers } from 'redux';

import simpleReducer from './simple.reducer';

export default combineReducers({
    simpleReducer
});