const filterFunctions = {
    isNeededDateFormat(str){return /^\d{2}\/\d{2}\/\d{4}$/.test(str)},
    isEmpty(el, prop){return [...prop].reduce((prev, curr) => !el[curr] && prev, true);},

    "content-search"(arr, value){return arr.filter(el =>
        this.isEmpty(el, ['title', 'text']) || `${el.title} ${el.text}`.indexOf(value) > -1)},

    "priority-search"(arr, value){return arr.filter(el =>
        this.isEmpty(el, ['priority']) || el.priority.indexOf(value) > -1)},

    "date-from-search"(arr, value){return arr.filter(el =>
        !this.isNeededDateFormat(value) || new Date(el.creationDate) > new Date(value))},

    "date-to-search"(arr, value){return arr.filter(el =>
    !this.isNeededDateFormat(value) || new Date(el.creationDate) < new Date(value))}
};

export  {filterFunctions};