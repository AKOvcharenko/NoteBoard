const initialNoteState = (state, notes) => notes.map(note => ({...note}));

const removeNote = (state, id) => state.filter(note => note.id !== id);

const editNote = (state, id) => {
    let editable;
    let subArray = state.filter(note =>{if(note.id === id){editable = note} return note.id !== id});
    editable.editing = true;
    return [...subArray, editable];
};

const updateNote = (state, data) =>[...(state.filter(note =>{return note.id !== data.id})), data];

const addNote = (state, data) =>[...state, data];





const noteState = (state=[], action) =>{
    switch (action.type) {
        case "SET_INITIAL_NOTE_STATE":
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