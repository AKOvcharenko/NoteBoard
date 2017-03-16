import { loadState, saveState } from './../own-modules/localStorage';
import { filtersState } from './reducers/reducerFiltersState.js';
import { noteState } from './reducers/reducerNotesState.js';
import {combineReducers, createStore} from 'redux';
import debounce from 'debounce';

const reducers = combineReducers({
    noteState,
    filtersState
});

const persistedState = loadState();

const store = createStore(reducers, persistedState);

store.subscribe(debounce(() => saveState({noteState: store.getState().noteState}), 1000));

window.store = store;

export default store;