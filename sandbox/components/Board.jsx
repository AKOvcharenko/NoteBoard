import React, { Component } from 'react';
import './../styles/board.scss';

class Board extends Component{
    render(){
        return (
                <div className="board container-fluid">
                    <div className="priority-urgent column col-sm-4 col-xs-12"></div>
                    <div className="priority-normal column col-sm-4 col-xs-12"></div>
                    <div className="priority-low column col-sm-4 col-xs-12"></div>
                </div>
            )
    }
}

export default Board;