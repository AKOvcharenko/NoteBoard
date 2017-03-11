const initialNoteState = (state, notes) =>{
    return  notes.map(note => ({...note}));
};


const noteState = (state=[], action) =>{
    switch (action.type) {
        case "SetInitialNoteState":
            return initialNoteState(state, action.notes);
        default:
            return state;
    }
};

export { noteState };