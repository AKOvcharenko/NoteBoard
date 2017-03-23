import { constants } from './../../constants/constants.js';


const dragChangePriority = (id, priority, position) => ({type: constants.DRAG_CHANGE_PRIORITY_NOTE, id, priority, position});

const setInitialNotes = notes =>({type: constants.SET_INITIAL_NOTES_STATE, notes});

const dragNote = (id, position) => ({type: constants.DRAG_NOTE, id, position});

const updateNote = data =>({type: constants.UPDATE_NOTE, data});

const removeNote = id =>({type: constants.REMOVE_NOTE, id});

const addNote = data => ({type: constants.ADD_NOTE, data});

const editNote = id =>({type: constants.EDIT_NOTE, id});


export {setInitialNotes, removeNote, editNote, updateNote, addNote, dragNote, dragChangePriority};