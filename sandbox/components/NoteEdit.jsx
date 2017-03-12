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
                    <input placeholder="Title" type="text" className="title form-control" key={`key-title-id-${id}`} onChange={this.changeHandler} value={title}/>
                    <textarea placeholder="Smth interesting" className="form-control" key={`key-text-id-${id}`} defaultValue={text}/>
                    <div className="radio-holder">
                        <label className="radio-inline">
                            <input type="radio" name={id} onChange={this.changeHandler} key={`key-radio-id-${id}`}  defaultChecked={priority === 'high'} /> Major
                        </label>
                        <label className="radio-inline">
                            <input type="radio" name={id} onChange={this.changeHandler} key={`key-radio-id-${id}`} defaultChecked={priority === 'normal'}/> Average
                        </label>
                        <label className="radio-inline">
                            <input  type="radio" name={id} onChange={this.changeHandler} key={`key-radio-id-${id}`} defaultChecked={priority === 'low'}/> Low
                        </label>
                    </div>
                    <div className="input-group">
                        <input  defaultValue={creationDate} key={`key-date-id-${id}`} placeholder="DD/MM/YYYY" className="form-control" type="text" pattern="\d{2}/\d{2}/\d{4}"
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