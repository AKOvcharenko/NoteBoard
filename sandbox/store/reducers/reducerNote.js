const initialNoteState = (state, notes) => notes.map(note => ({...note}));

const removeNote = (state, id) => state.filter(note => note.id !== id);

const editNote = (state, id) => {
    let editable;
    let subArray = state.filter(note =>{if(note.id === id){editable = note} return note.id !== id});
    editable.editing = true;
    return [...subArray, editable];
};



const noteState = (state=[], action) =>{
    switch (action.type) {
        case "SET_INITIAL_NOTE_STATE":
            return initialNoteState(state, action.notes);
        case "REMOVE_NOTE":
            return removeNote(state, action.id);
        case "EDIT_NOTE":
            return editNote(state, action.id);
        default:
            return state;
    }
};

export { noteState };