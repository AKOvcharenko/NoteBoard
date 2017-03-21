import { constants } from './../../constants/constants.js';
import { Map } from 'immutable';


let initialState = Map({
    hide: true,
    "content-search": '',
    "priority-search": '',
    "date-from-search": '',
    "date-to-search": ''
});

const changeShowFiltersState = state => state.set('hide', !state.get('hide'));

const changeFiltersState = (state, id, value) => state.set(id, value);

const dropFilters = state =>{
    return ['content-search', 'priority-search', 'date-from-search', 'date-to-search'].reduce((prev, curr) =>{
        return prev.set(curr, '');
    }, state);
};

const filtersState = (state=initialState, action) =>{
    switch (action.type) {
        case constants.HIDE_SHOW_FILTERS:
            return changeShowFiltersState(state);
        case constants.FILTER_CHANGED:
            return changeFiltersState(state, action.id, action.value);
        case constants.FILTERS_DROPPED:
            return dropFilters(state);
        default:
            return state;
    }
};

export { filtersState };