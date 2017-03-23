import { constants } from './../../constants/constants.js';
import { Map } from 'immutable';

//i create map instead boolean here
// because if i will have another update i will need just add new property instead rewriting logic
let initialState = Map({
    adding: false
});

const changeAddingState = (state, adding) => state.set('adding', adding);

const addingState = (state=initialState, action) =>{
    switch (action.type) {
        case constants.CHANGE_ADDING_STATE:
            return changeAddingState(state, action.adding);
        default:
            return state;
    }
};

export { addingState };