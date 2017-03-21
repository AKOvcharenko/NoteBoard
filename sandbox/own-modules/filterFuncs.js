import { constants } from './../constants/constants.js';

const filterFunctions = {
    isNeededDateFormat(str){return /^\d{2}\/\d{2}\/\d{4}$/.test(str)},
    isEmpty(el, prop){return [...prop].reduce((prev, curr) => !el[curr] && prev, true);},

    [constants.CONTENT_SEARCH_FILTER](arr, value){return arr.filter(el =>
        this.isEmpty(el, ['title', 'text']) || `${el.title} ${el.text}`.indexOf(value) > -1)},

    [constants.PRIORITY_SEARCH_FILTER](arr, value){return arr.filter(el =>
        this.isEmpty(el, ['priority']) || el.priority.indexOf(value) > -1)},

    [constants.DATE_FROM_SEARCH](arr, value){return arr.filter(el =>
        !this.isNeededDateFormat(value) || new Date(el.creationDate) > new Date(value))},

    [constants.DATE_TO_SEARCH](arr, value){return arr.filter(el =>
    !this.isNeededDateFormat(value) || new Date(el.creationDate) < new Date(value))}
};

export  {filterFunctions};