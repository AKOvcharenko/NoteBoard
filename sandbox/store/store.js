import {combineReducers, createStore} from 'redux';
import { noteState } from './reducers/reducerNote.js';

const reducers = combineReducers({
    noteState
});

const store = createStore(reducers);

window.store = store;

export default store;