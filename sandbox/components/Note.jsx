import React, { Component } from 'react';
import './../styles/note.scss';

class Note extends Component{
    
    render(){
        let {id, title, text, priority, creationDate} = this.props;
        return (
                <div className={`note priority-${priority}`}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <span className="button-holder">
                      <button className="btn btn-default">EDIT</button>
                      <button className="btn btn-default">X</button>
                    </span>
                </div>
        )
    }
}

export default Note;