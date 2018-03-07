import React, { Component } from 'react';
import List from './List';
import TodoForm from './TodoForm'; 

class App extends Component {
  state = {
    todos: [
      {id: 1, name: "Zebra", complete: true },
      {id: 2, name: "Aebra", complete: false },
      {id: 3, name: "Bebra", complete: false },
    ],
  }

  byName = (x,y) => {
    if (x.name > y.name )
      return 1 
    if (x.name  < y.name) 
      return -1 
    return 0 
  } 

  render() {
    const { todos } = this.state
    return (
      <div>
        <TodoForm /> 
        <List items={todos} /> 
      </div>
    );
  }
}

export default App;
