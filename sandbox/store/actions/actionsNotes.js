const setInitialNotes = notes =>({type: "SET_INITIAL_NOTE_STATE", notes});

const removeNote = id =>({type: "REMOVE_NOTE", id});

const editNote = id =>({type: "EDIT_NOTE", id});

const updateNote = data =>({type: "UPDATE_NOTE", data});

export {setInitialNotes, removeNote, editNote, updateNote};