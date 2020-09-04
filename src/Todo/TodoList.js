import React, { Component } from 'react';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        };
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput:'',
            items: [...this.state.items, this.state.userInput]
        })
    }

    deleteTodo(item) {
        
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div key={item} className="list-group-item my-3">
                    {item}  <button onClick={this.deleteTodo.bind(this, item)}><i className="far fa-trash-alt"></i></button>

                </div>
            )
        });
    }


    render() {
        return(
            <div className="container-todo mt-5  mx-auto">
                <h1 className="text-center mb-5">My Todo List</h1>
                <form className="form-row">
                    <input 
                    value={this.state.userInput} 
                    type="text" 
                    placeholder="Renseignez votre item"
                    className="form-control mb-3"
                    onChange={this.onChange.bind(this)} />
                    <button className="Btn btn-primary btn-lg" onClick={this.addTodo.bind(this)}>Ajouter</button>
                </form>
                <div className="list-group mt-4 list-group-vertical">
                    {this.renderTodos()}
                </div>
            </div>
        )
    }
}

export default TodoList;