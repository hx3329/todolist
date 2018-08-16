import React, { Component } from 'react';
import '../App.css';

import Form from './Form';
import List from './List';


class App extends Component {
    //transfer attribute
    state = {
        inputValue: "",

        todos: [
            {value: 'Clean the kitchen', done: false},
            {value: 'Clean the room', done: true}

        ]

   }
    //transfer function
    handleChange = (evt) => {
        this.setState({inputValue: evt.target.value});
    }

  render() {
    return (
        <div className="App">
        <Form
            //transfer attribute and function as handleChange and inputValue
            // then we an use in the form.js
            handleChange={this.handleChange}
            inputValue={this.state.inputValue}
        />
        <List
            todos={this.state.todos}
        />
        </div>
    );
  }
}

export default App;
