import React, { Component } from 'react';

class NoteEdit extends Component{

    constructor(props) {
        super(props);
        this.priority = this.props.priority;
        ['submitHandler', 'collectData', 'changeRadio'].forEach(func => this[func] = this[func].bind(this));
    }

    changeRadio(event){
        this.priority = event.target.value;
    }

    collectData(){
        let data = {"editing": false, id:this.props.id, priority: this.priority};
        let refs = ['title', 'text', 'creationDate'];

        return refs.reduce((prev, curr) =>{
            (prev[curr] = this.refs[curr].value);
            return prev;
        }, data);
    }

    submitHandler(event){
        event.preventDefault();
        let data = this.collectData();
        this.props.updateNote(data);
    }

    changeHandler(){}

    render(){
        let {id, title, text, priority, creationDate} = this.props;
        return (
            <div className={`note editing priority-${priority}`}>
                <form onSubmit={this.submitHandler}>
                    <input placeholder="Title" type="text" ref="title" className="title form-control" key={`key-title-id-${id}`} onChange={this.changeHandler} defaultValue={title}/>
                    <textarea placeholder="Smth interesting" ref="text" className="form-control" key={`key-text-id-${id}`} defaultValue={text}/>
                    <div className="radio-holder">
                        <label className="radio-inline">
                            <input type="radio" name={id} onChange={this.changeRadio} value="high" key={`key-radio-id-${id}`}  defaultChecked={priority === 'high'} required /> Major
                        </label>
                        <label className="radio-inline">
                            <input type="radio" name={id} onChange={this.changeRadio} value="normal" key={`key-radio-id-${id}`} defaultChecked={priority === 'normal'} required /> Average
                        </label>
                        <label className="radio-inline">
                            <input  type="radio" name={id} onChange={this.changeRadio} value="low" key={`key-radio-id-${id}`} defaultChecked={priority === 'low'} required /> Low
                        </label>
                    </div>
                    <div className="input-group">
                        <input  defaultValue={creationDate} ref="creationDate" key={`key-date-id-${id}`} placeholder="DD/MM/YYYY" className="form-control" type="text" pattern="\d{2}/\d{2}/\d{4}"
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