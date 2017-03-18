import { List } from 'immutable';

let initialState = List([]);

const initialNoteState = (state, notes) => List(notes);

const removeNote = (state, id) => state.filter(note => note.id !== id);

const editNote = (state, id) => state.update(state.findIndex(note => note.id === id), note => {return {...note, editing : true};});

const updateNote = (state, data) => state.set(state.findIndex(note => note.id === data.id), data);

const addNote = (state, data) => state.push(data);

const noteState = (state=initialState, action) =>{
    switch (action.type) {
        case "SET_INITIAL_NOTES_STATE":
            return initialNoteState(state, action.notes);
        case "REMOVE_NOTE":
            return removeNote(state, action.id);
        case "EDIT_NOTE":
            return editNote(state, action.id);
        case "UPDATE_NOTE":
            return updateNote(state, action.data);
        case "ADD_NOTE":
            return addNote(state, action.data);
        default:
            return state;
    }
};

export { noteState };