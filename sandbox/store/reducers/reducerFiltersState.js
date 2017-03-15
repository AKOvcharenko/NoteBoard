const changeShowFiltersState = state => ({ ...state, hide: !state.hide });

const changeFiltersState = (state, id, value) => ({ ...state, [id]: value });

const dropFilters = state => ({ ...state, "content-search": '', "priority-search": '', "date-from-search": '', "date-to-search": ''});




const filtersState = (state={ 
                            hide: true,
                            "content-search": '',
                            "priority-search": '',
                            "date-from-search": '',
                            "date-to-search": ''
                        }, action) =>{
    switch (action.type) {
        case "HIDE_SHOW":
            return changeShowFiltersState(state);
        case "FILTER_CHANGED":
            return changeFiltersState(state, action.id, action.value);
        case "FILTERS_DROPPED":
            return dropFilters(state);
        default:
            return state;
    }
};

export { filtersState };