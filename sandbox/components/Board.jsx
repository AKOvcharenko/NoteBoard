import { setInitialNotes } from './../store/actions/actionsNotes';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from './Loader.jsx';
import AddButton from './AddButton.jsx';
import './../styles/add-button.scss';
import Note from './Note.jsx';
import 'whatwg-fetch';

const mapStateToProps = state =>({notes: state.noteState});
const mapDispatchToProps = dispatch =>({
        setInitialNotes(data){
            dispatch(setInitialNotes(data));
        }
    });

class Board extends Component{

    componentWillMount(){
        var data = localStorage.getItem('notes');
        if(data){this.props.setInitialNotes(data); return;}
        fetch('data.json').then(response=>response.json()).then(json => this.props.setInitialNotes(json));
    }

    eachNote(note){
        return <Note {...note} key={note.id}/>
    }

    render(){
        let { notes } = this.props;
        return (
            notes ?
                (<div className="board container-fluid">
                    <div className="priority-high column col-sm-4 col-xs-12"></div>
                    <div className="priority-normal column col-sm-4 col-xs-12"></div>
                    <div className="priority-low column col-sm-4 col-xs-12"></div>
                    <div className="notes-holder">
                        {notes.map(this.eachNote)}
                    </div>
                    <AddButton/>
                </div>) :
                <Loader/>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Board);