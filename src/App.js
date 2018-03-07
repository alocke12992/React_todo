import React, { Component } from 'react';
import logo from './logo.svg';


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
        <ul>
          { todos.sort(this.byName).map( (todo, i) => {
            return <li key={todo.id}>{todo.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default App;
