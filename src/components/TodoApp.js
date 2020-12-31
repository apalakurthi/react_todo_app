import React from "react";
import {v4 as uuidv4 } from 'uuid';
import axios from "axios";

import Header from "./layout/Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";


class TodoApp extends React.Component {

    state = {
        todos: [
            {
                id : uuidv4(),
                title : "Setup development environment",
                completed : true
            },
            {
                id : uuidv4(),
                title : "Develop website and add component",
                completed : false
            },
            {
                id : uuidv4(),
                title : "Deploy to Live server",
                completed : false
            }
        ],
        show : false
    }
    
    handleChange = id => {
        this.setState({
            todos : this.state.todos.map(todo => {
                if (id === todo.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
            show : !this.state.show            
        });
    }

    deleteTodo = id => {
        
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then( 
            response => this.setState({
                todos: [
                    ...this.state.todos.filter(todo => {
                        return id !== todo.id;
                    })
                ]
            })
        )
    }

    addTodo = title => {
        axios.post("https://jsonplaceholder.typicode.com/todos", {
            title: title,
            completed: false
        }).then(
            response => this.setState({
                todos : [...this.state.todos, response.data]
            })
        )
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(response => this.setState({
                todos : response.data
            }));
    }

    render() {
        return (
            <div className= "container">
                <Header headerSpan= {this.state.show} />
                <AddTodo addTodo= {this.addTodo}/>
                <Todos todos = {this.state.todos} 
                    handleChange= {this.handleChange}
                    deleteTodo = {this.deleteTodo}/>
            </div>
        );
    }
}

export default TodoApp;