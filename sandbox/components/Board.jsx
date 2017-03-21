import { setInitialNotes } from './../store/actions/actionsNotesState.js';
import {filterFunctions} from './../own-modules/filterFuncs.js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from './Loader.jsx';
import AddButton from './AddButton.jsx';
import Filters from './Filters.jsx';
import './../styles/add-button.scss';
import Note from './Note.jsx';
import 'whatwg-fetch';

const mapStateToProps = state => ({notes: state.noteState, filterState: state.filtersState.toJS()});

const mapDispatchToProps = dispatch =>({
    setInitialNotes(data){
        dispatch(setInitialNotes(data));
    }
});

class Board extends Component{

    constructor(props){
        super(props);
        ['filterNotes'].forEach(func => this[func] = this[func].bind(this));
    }

    componentWillMount(){
        const { setInitialNotes, notes } = this.props;
        if(notes.length){setInitialNotes(notes); return;}
        fetch('data.json').then(response=>response.json()).then(json => setInitialNotes(json));
    }

    filterNotes(notes, filters){
        return ["content-search", "priority-search", "date-from-search", "date-to-search"].reduce((prev, curr) =>{
            return filterFunctions[curr].call(filterFunctions, prev, filters[curr]);
        }, [...notes]);
    };

    eachNote(note){
        return <Note {...note} key={note.id}/>
    }

    renderPartOfTable(filteredNotes, priority, eachNote){
        return (
            <div key={priority} className={`priority-${priority} column col-sm-4 col-xs-12`}>
                {filteredNotes.filter(note => note.priority === priority).map(eachNote)}
            </div>
        )
    }

    render(){
        let { notes, filterState } = this.props;
        let filteredNotes = this.filterNotes(notes, filterState);
        return (
            notes ?
                (<div  className="board container-fluid">
                    {['high', 'normal', 'low'].map(priority=>this.renderPartOfTable(filteredNotes, priority, this.eachNote))}
                    {filteredNotes.filter(note => !note.priority).map(this.eachNote)}
                    <div className="interaction-ui-holder">
                        <Filters/>
                        <AddButton/>
                    </div>
                </div>) :
                <Loader/>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Board);