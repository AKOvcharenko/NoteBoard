import React, { Component } from 'react';

class NoteEdit extends Component{

    submitHandler(event){
        event.preventDefault();        
    }

    changeHandler(){}

    render(){
        let {id, title, text, priority, creationDate} = this.props;
        return (
            <div className={`note editing priority-${priority}`}>
                <form onSubmit={this.submitHandler}>
                    <input placeholder="Title" type="text" className="title form-control" defaultValue={title}/>
                    <textarea placeholder="Smth interesting" className="form-control" defaultValue={text}></textarea>
                    <div className="radio-holder">
                        <label className="radio-inline">
                            <input type="radio" name={id} onChange={this.changeHandler} defaultChecked={priority === 'high'} /> Major
                        </label>
                        <label className="radio-inline">
                            <input type="radio" name={id} onChange={this.changeHandler} defaultChecked={priority === 'normal'}/> Average
                        </label>
                        <label className="radio-inline">
                            <input  type="radio" name={id} onChange={this.changeHandler} defaultChecked={priority === 'low'}/> Low
                        </label>
                    </div>
                    <div className="input-group">
                        <input  defaultValue={creationDate} placeholder="DD/MM/YYYY" className="form-control" type="text" pattern="\d{2}/\d{2}/\d{4}"
                               title="DD/MM/YYYY"/>
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Save</button>
                      </span>
                    </div>
                </form>
            </div>
        )
    }
}

export default NoteEdit;