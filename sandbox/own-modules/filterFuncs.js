import { constants } from './../constants/constants.js';

let { CONTENT_FILTER, PRIORITY_FILTER, DATE_FROM_FILTER, DATE_TO_FILTER } = constants;

const isEmpty = (el, prop) => [...prop].reduce((prev, curr) => !el[curr] && prev, true);

const isNeededDateFormat = (str) => /^\d{2}\/\d{2}\/\d{4}$/.test(str);

const contentFilter = (arr, value) => arr.filter(el => isEmpty(el, ['title', 'text']) || `${el.title} ${el.text}`.indexOf(value) > -1);

const priorityFilter = (arr, value) => arr.filter(el => isEmpty(el, ['priority']) || el.priority.indexOf(value) > -1);

const dateFromFilter = (arr, value) => arr.filter(el => !isNeededDateFormat(value) || new Date(el.creationDate) > new Date(value));

const dateToFilter = (arr, value) => arr.filter(el => !isNeededDateFormat(value) || new Date(el.creationDate) < new Date(value));

const filterFunctions = {
    [CONTENT_FILTER]: contentFilter,
    [PRIORITY_FILTER]: priorityFilter,
    [DATE_FROM_FILTER]: dateFromFilter,
    [DATE_TO_FILTER]: dateToFilter
};

export { filterFunctions}