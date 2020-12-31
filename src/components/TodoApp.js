import React from "react";
import Header from "./layout/Header";

import Todos from "./Todos";
import AddTodo from "./AddTodo";
import {v4 as uuidv4 } from 'uuid';

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
        ]
    }
    
    handleChange = id => {
        this.setState({
            todos : this.state.todos.map(todo => {
                if (id === todo.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    }

    deleteTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return id !== todo.id;
                })
            ]
        });
    }

    addTodo = title => {
        const newTodo = {
            id : uuidv4(),
            title: title,
            completed: false
        }
        this.setState({
            todos : [...this.state.todos, newTodo]
        })
    }

    render() {
        return (
            <div className= "container">
                <Header />
                <AddTodo addTodo= {this.addTodo}/>
                <Todos todos = {this.state.todos} 
                    handleChange= {this.handleChange}
                    deleteTodo = {this.deleteTodo}/>
            </div>
        );
    }
}

export default TodoApp;