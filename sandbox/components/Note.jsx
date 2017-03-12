import { removeNote, editNote } from './../store/actions/actionsNotes';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteEdit from './NoteEdit.jsx';
import NoteShow from './NoteShow.jsx';
import './../styles/note.scss';


const mapStateToProps = state =>({});
const mapDispatchToProps = dispatch =>({
    removeNote(){
        dispatch(removeNote(this.props.id));
    },    
    editNote(){
        dispatch(editNote(this.props.id));
    }
});

class Note extends Component{   

    render(){
        let {editing} = this.props;
        return (
                editing ? <NoteEdit {...this.props}/> : <NoteShow {...this.props}/>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);