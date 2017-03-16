import {combineReducers, createStore} from 'redux';
import { loadState, saveState } from './../own-modules/localStorage'
import { noteState } from './reducers/reducerNotesState.js';
import { filtersState } from './reducers/reducerFiltersState.js';

const reducers = combineReducers({
    noteState,
    filtersState
});

const persistedState = loadState();

const store = createStore(reducers, persistedState);

store.subscribe(() => saveState({noteState: store.getState().noteState}));

window.store = store;

export default store;