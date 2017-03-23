import { constants } from './../../constants/constants.js';
import { List } from 'immutable';

let initialState = List([]);

const initialNoteState = (state, notes) => List(notes);

const removeNote = (state, id) => state.filter(note => note.id !== id);

const editNote = (state, id) => state.update(
                                        state.findIndex(note => note.id === id),
                                        note => ({...note, editing : true}));

const updateNote = (state, data) => state.set(state.findIndex(note => note.id === data.id), data);

const addNote = (state, data) => state.push(data);

const dragNote = (state, id, position) => state.update(
                                                    state.findIndex(note => note.id === id),
                                                    note => ({...note, position}));

const dragChangePriority = (state, id, priority, position) => state.update(
                                                                        state.findIndex(note => note.id === id),
                                                                        note => ({...note, priority, position}));

const noteState = (state=initialState, action) =>{
    switch (action.type) {
        case constants.SET_INITIAL_NOTES_STATE:
            return initialNoteState(state, action.notes);
        case constants.REMOVE_NOTE:
            return removeNote(state, action.id);
        case constants.EDIT_NOTE:
            return editNote(state, action.id);
        case constants.UPDATE_NOTE:
            return updateNote(state, action.data);
        case constants.ADD_NOTE:
            return addNote(state, action.data);
        case constants.DRAG_NOTE:
            return dragNote(state, action.id, action.position);
        case constants.DRAG_CHANGE_PRIORITY_NOTE:
            return dragChangePriority(state, action.id, action.priority, action.position);
        default:
            return state;
    }
};

export { noteState };