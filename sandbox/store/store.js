import { loadState, saveState } from './../own-modules/localStorage';
import { filtersState } from './reducers/reducerFiltersState.js';
import { addingState } from './reducers/reducerAddingState';
import { noteState } from './reducers/reducerNotesState.js';
import {combineReducers, createStore} from 'redux';
import debounce from 'debounce';

const reducers = combineReducers({
    noteState,
    filtersState,
    addingState
});

const persistedState = loadState();

const store = createStore(reducers, persistedState);

store.subscribe(debounce(() => saveState({ noteState: store.getState().noteState,
                                           addingState: store.getState().addingState
                                }), 1000));


export default store;