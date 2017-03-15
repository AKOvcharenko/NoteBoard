const hideShow = () => ({type: "HIDE_SHOW"});

const filterChanged = (id, value) => ({ type: "FILTER_CHANGED", id, value});

const dropFilters = () => ({ type: "FILTERS_DROPPED"});

export { hideShow, filterChanged, dropFilters};