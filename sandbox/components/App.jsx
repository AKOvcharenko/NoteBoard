import React, { Component } from 'react';
import store from './../store/store.js'
import { Provider } from 'react-redux';
import Board from './Board.jsx';

class App extends Component{

    render(){
        return (
            <Provider store={store}>
                <div>
                    <Board></Board>
                </div>
            </Provider>
        )
    }
}


export default App;