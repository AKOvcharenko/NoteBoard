import { removeNote, editNote, updateNote } from './../store/actions/actionsNotesState';
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
    }, 
});

class Note extends Component{

    mouseOverHandler(event){
        console.log(Math.floor(window.innerWidth/event.pageX))
    }

    getX(){
        let random = Math.ceil(Math.random() * (window.innerWidth/3 - 200));
        return this.props.position.x || random;
    }

    getY(){
        let random = Math.ceil(Math.random()*(window.innerHeight - 200));
        return this.props.position.y || random;
    }

    render(){
        let {editing} = this.props;
        let position ={x:this.getX(), y: this.getY()};
        return (
            <Draggable defaultPosition={position}  onStop  = {this.mouseOverHandler}  axis="both" disabled={editing} >
                <div>
                    {editing ? <NoteEdit {...this.props} position={position} /> : <NoteShow {...this.props}/>}
                </div>
            </Draggable>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);