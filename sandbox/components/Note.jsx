import { removeNote, editNote, updateNote } from './../store/actions/actionsNotes';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteEdit from './NoteEdit.jsx';
import NoteShow from './NoteShow.jsx';
import './../styles/note.scss';

import Draggable from 'react-draggable';



const mapStateToProps = state =>({});
const mapDispatchToProps = dispatch =>({
    removeNote(){
        dispatch(removeNote(this.props.id));
    },    
    editNote(){
        dispatch(editNote(this.props.id));
    },
    updateNote(data){
        dispatch(updateNote(data));
    }
});

class Note extends Component{

    render(){
        let {editing} = this.props;
        return (
            <Draggable axis="both" disabled={editing} bounds="body">
                <div>
                    {editing ? <NoteEdit {...this.props}/> : <NoteShow {...this.props}/>}
                </div>
            </Draggable>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);