import {combineReducers, createStore} from 'redux';
import { noteState } from './reducers/reducerNotesState.js';
import { filtersState } from './reducers/reducerFiltersState.js';

const reducers = combineReducers({
    noteState,
    filtersState
});

const store = createStore(reducers);

window.store = store;

export default store;