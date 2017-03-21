import { Map } from 'immutable';

const loadState = () =>{
    try{
        const serializedState = localStorage.getItem('state');
        let state;
        if(serializedState !== null){
            state = JSON.parse(serializedState);
            return { ...state, addingState: Map(state.addingState)};
        }
    }catch(e){}
};

const saveState = state => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }catch(e){}
};

export { loadState, saveState };