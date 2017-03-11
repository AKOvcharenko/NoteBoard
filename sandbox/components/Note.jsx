import React, { Component } from 'react';
import './../styles/note.scss';

class Note extends Component{
    render(){
        return (
                <div className="note">
                    <h2>Title #1</h2>
                    <p>Text Content #1</p>
                </div>
        )
    }
}

export default Note;