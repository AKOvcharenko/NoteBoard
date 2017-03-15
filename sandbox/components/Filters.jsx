import { hideShow, filterChanged, dropFilters } from './../store/actions/actionsFiltersState.js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../styles/filters.scss';

const mapStateToProps = state =>({filters: state.filtersState, notes: state.noteState});
const mapDispatchToProps = dispatch =>({dispatch});


class Filters extends Component{

    constructor(props){
        super(props);
        ['dropFilters', 'hideShow', 'filterChanged', 'setValuesToZero'].forEach(func => this[func] = this[func].bind(this));
    }

    setValuesToZero(){
        Object.keys(this.refs).forEach(key => this.refs[key].value= '');
    }

    hideShow(){
        this.dropFilters();
        this.props.dispatch(hideShow());
    }

    dropFilters(){
        this.setValuesToZero();
        this.props.dispatch(dropFilters());
    }

    filterChanged(event){
        const {id, value} = event.target;
        this.props.dispatch(filterChanged(id, value));
    }

    render(){
       const { filters } = this.props;
       const { dropFilters, hideShow, filterChanged } = this;
       [dropFilters, hideShow, filterChanged].forEach(func => {func.bind(this)});
       return (
            <div className="form-inline" id="filters-holder">
                <div id="filters" className={filters.hide ? 'hide' : ''}>
                    <button onClick={dropFilters} type="submit" className="btn btn-lg  btn-default ">
                        <i className="glyphicon glyphicon-remove"/>
                    </button>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="content-search">Search by note content</label>
                        <input ref="content-search" type="text" onChange={filterChanged} className="form-control" id="content-search" placeholder="Search by note content"/>
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="priority-search">Search by priority</label>
                        <select ref="priority-search" className="form-control" onChange={filterChanged} id="priority-search">
                            <option value="">Filter by priority</option>
                            <option value="low">Low</option>
                            <option value="normal">Average</option>
                            <option value="high">Mayor</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="date-from-search">Created since</label>
                        <input type="text" ref="date-from-search" className="form-control" onChange={filterChanged} id="date-from-search" placeholder="Created since"/>
                        <label className="sr-only" htmlFor="date-to-search">Created before</label>
                        <input type="text" ref="date-to-search" className="form-control" onChange={filterChanged} id="date-to-search" placeholder="Created before"/>
                    </div>
                </div>
                <button onClick={hideShow} type="submit" className="btn btn-lg  btn-default ">
                    <i className="glyphicon glyphicon-filter"/>
                </button>
            </div>
        )
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);