import React, { Component } from 'react';

class NoteShow extends Component{

    render(){
        let {id, title, text, priority, creationDate, removeNote, editNote} = this.props;
        return (
                <div onDoubleClick={editNote.bind(this)} className={`note priority-${priority}`}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <span className="date-holder">{creationDate}</span>
                    <span className="button-holder">
                        <button className="btn btn-default" onClick={editNote.bind(this)}>EDIT</button>
                        <button className="btn btn-default" onClick={removeNote.bind(this)}>X</button>
                    </span>
                </div>
        )
    }
}

export default NoteShow;