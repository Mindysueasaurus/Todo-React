import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Search from './components/TodoComponents/Search';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: 'Make Soap',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Play merge dragons',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Yell at kids',
          id: 1528817084358,
          completed: false
        },
        {
          task: 'Text mom back',
          id: 1528817084358,
          completed: false
        },
        
      ],      
      newTodo: '',
      inputSearch: '',
    };
  }


  addNewTodo = event => {
    event.preventDefault();

      this.setState({
        todos: [
          ...this.state.todos,
          {task: this.state.newTodo,
          id: Date.now(),
          completed: false}
        ],
        newTodo: ''
      })
      
  }

  changeHandler = event => {
      this.setState({ [event.target.name]: event.target.value })
      localStorage.setItem([event.target.name], event.target.value)
  }

  changeCompletedHandler = id => {
    this.setState({
      todos: this.state.todos.map(todo =>{
        if(todo.id !== id) {
          return todo;
        } else {
          return {
            ...todo,
            completed: todo.completed === 'false' ? 'true' : 'false'
          }
        }
      })
    })
  }
 
  searchTodos = event => {
    let input = event.target.value;
    if (input) {
      let filtered = this.state.todos.filter(
        item => 
        item.task.slice(0, input.length).toLowerCase() === input.toLowerCase()
      )
      this.setState({inputSearch: input, todos: filtered})
     
      }
    
  }

  filterCompleted = event => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.map(todo => {
        return todo.completed !== 'true'? todo : null;
      })
    })
  }

  render() {
    return (
    <div className="container">
        <h1>Todo List:</h1>
        <Search 
          changeHandler={this.changeHandler}
          inputSearch={this.state.inputSearch}
          todos={this.state.todos}
          search={this.searchTodos}
        />
        <TodoList 
          todos={this.state.todos} 
          changeCompletedHandler={this.changeCompletedHandler}
        />
        <TodoForm 
          changeHandler={this.changeHandler} 
          addNewTodo={this.addNewTodo} 
          newTodo={this.state.newTodo} 
          todos={this.state.todos} 
          filterCompleted={this.filterCompleted}
        />
      </div>
    );
  }
}

export default App;
