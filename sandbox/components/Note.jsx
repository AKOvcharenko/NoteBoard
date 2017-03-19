import { removeNote, editNote, updateNote, dragNote, dragChangePriority } from './../store/actions/actionsNotesState';
import React, { Component } from 'react';
import Draggable from 'react-draggable';
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
    },
    updateNote(data){
        dispatch(updateNote(data));
    },
    dragNote(id, position){
        dispatch(dragNote(id, position));
    },
    dragChangePriority(id, newPriority, position){
        dispatch(dragChangePriority(id, newPriority, position));
    }
});

class Note extends Component{

    constructor(props){
        super(props);
        this.stopHandler = this.stopHandler.bind(this);
    }

    stopHandler(event, data){
        let newPositionX;
        let priorities = ['high', 'normal', 'low'];
        let { dragNote, id, priority, dragChangePriority } = this.props;
        let newPriority = priorities.find((el, i) => event.clientX < ((i+1) * window.innerWidth/3));

        if(newPriority === priority) return dragNote(id, {x:data.x, y:data.y});

        newPositionX = data.x - (priorities.indexOf(newPriority) - priorities.indexOf(priority)) * window.innerWidth/3;

        // i put timeout here because when i change component priority - it unmount in moment onDragStop
        // and after it tryes change own state and throws error
        setTimeout(() => dragChangePriority(id, newPriority, {x:newPositionX, y:data.y}));
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
            <Draggable defaultPosition={position}  onStop  = {this.stopHandler}  axis="both" disabled={editing} >
                <div>
                    {editing ? <NoteEdit {...this.props} position={position} /> : <NoteShow {...this.props}/>}
                </div>
            </Draggable>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);