import React, { Component } from 'react';
import NoteEdit from './NoteEdit.jsx';
import NoteShow from './NoteShow.jsx';
import './../styles/note.scss';
class Note extends Component{   

    render(){
        let {editing} = this.props;
        return (
                editing ? <NoteEdit {...this.props}/> : <NoteShow {...this.props}/>
        );
    }
}

export default Note;