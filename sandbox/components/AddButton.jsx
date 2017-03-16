import { addNote } from './../store/actions/actionsNotesState';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../styles/board.scss';

const mapStateToProps = state =>({notes: state.noteState, filters: state.filtersState});
const mapDispatchToProps = dispatch =>({dispatch});


class AddButton extends Component{

    constructor(props){
        super(props);
        this.addNote = this.addNote.bind(this);
    }

    convertDate(d){
        const pad = s => s < 10 ? '0' + s : s;
        return [pad(d.getMonth()+1), pad(d.getDate()), d.getFullYear()].join('/');
    }

    addNote(){
        const {notes, filters, dispatch} = this.props;
        let id = notes.reduce((prev, curr) => curr.id > prev ? curr.id : prev  , 0) + 1; // find biggest present id and +1
        let creationDate = this.convertDate(new Date());
        dispatch(addNote({id, creationDate, editing:true}));
    }

    render(){
        return (
            <button onClick={this.addNote} type="button" className="btn btn-lg btn-success add-note"><i className="glyphicon glyphicon-plus"/></button>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);