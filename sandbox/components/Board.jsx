import { setInitialNotes } from './../store/actions/actionSetInitialNotes';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../styles/board.scss';
import Note from './Note.jsx';
import Loader from './Loader.jsx';
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

    eachNote(note, index){
        //let {id, title, text, priority, creationDate} = note;
        return <Note {...note} />
    }

    render(){
        //let { noteState } = this.props.noteState;
        return (
/*                <div className="board container-fluid">
                    <div className="priority-high column col-sm-4 col-xs-12"></div>
                    <div className="priority-normal column col-sm-4 col-xs-12"></div>
                    <div className="priority-low column col-sm-4 col-xs-12"></div>
                    <div className="notes-holder">
                        //noteState.map(this.eachNote);
                    </div>
                </div>*/
            <Loader/>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Board);