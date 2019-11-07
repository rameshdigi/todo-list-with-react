import React, { Component } from 'react'
import Todos from '../Todos'
import AddTodo from '../AddTodo'

class Home extends Component {
    state = {
        todos: [
            { id: 1, content: 'buy a some milk' },
            { id: 2, content: 'play a kart' }
        ],

    }
    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        });
        this.setState({
            todos
        })
    }
    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo]
        this.setState({
            todos
        })
    }
    
    render() {
           

    return(
           
            <div className = "container">

            <div className="todo-app container">
                <h4 className="center"> Home</h4>
                <h3>What is Lorem Ipsum?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quo? Itaque dolorum dolores delectus cum fugiat. Hic ad numquam aut natus saepe doloremque nihil, nulla recusandae alias quia, accusamus suscipit!</p>

                <h1 className="center blue-text">Todo's</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                <AddTodo addTodo={this.addTodo} />
            </div>
            </div>





        )


    }
}

export default Home;