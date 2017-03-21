import { constants } from './../../constants/constants.js';

const filterChanged = (id, value) => ({ type: constants.FILTER_CHANGED, id, value});

const dropFilters = () => ({ type: constants.FILTERS_DROPPED});

const hideShow = () => ({type: constants.HIDE_SHOW_FILTERS});

export { hideShow, filterChanged, dropFilters};