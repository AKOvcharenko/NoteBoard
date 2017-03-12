import React, { Component } from 'react';
import { setInitialNotes } from './../store/actions/actionSetInitialNotes';
import { connect } from 'react-redux';

class NoteShow extends Component{

    removeNote(){

    }

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

export default connect(mapStateToProps, mapDispatchToProps)(NoteShow);