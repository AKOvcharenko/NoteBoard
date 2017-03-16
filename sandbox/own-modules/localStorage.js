const loadState = () =>{
    try{
        const serializedState = localStorage.getItem('state');
        if(serializedState !== null){return JSON.parse(serializedState);}
    }catch(e){}
};

const saveState = state => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }catch(e){}
};

export { loadState, saveState };