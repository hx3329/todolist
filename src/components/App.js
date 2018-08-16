import React, { Component } from 'react';
import '../App.css';

import Form from './Form';
import List from './List';


class App extends Component {
    //transfer attribute
    state = {
        inputValue: '',

        todos: [
            {value: 'Clean the kitchen', done: false},
            {value: 'Clean the room', done: true}

        ]

   }
    //transfer function event
    handleChange = (evt) => {
        this.setState({inputValue: evt.target.value});
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const newTodo ={
            value: this.state.inputValue,
            done: false
        };
        const todos = this.state.todos;
        todos.push(newTodo);
        //using setState to update
        //the similar as componentDidUpdate
        //if u found the value todos:todos have the same name
        // this.setState({todos:todos}); u can use 1 todos
        this.setState({ todos,inputValue: ''});//at the same time, update inputValue
    }

    handleClick = (index) => {
        const todos =this.state.todos;
        todos[index].done=!todos[index].done;
        this.setState({todos});
    }

  render() {
    return (
        <div className="App">
        <Form
            //transfer attribute and function as handleChange and inputValue
            // then we an use in the form.js
            handleChange={this.handleChange}
            inputValue={this.state.inputValue}
            handleSubmit={this.handleSubmit}
        />
        <List
            todos={this.state.todos}
            handleClick={this.handleClick}
        />
        </div>
    );
  }
}

export default App;
