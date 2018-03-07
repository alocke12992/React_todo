import React, { Component } from 'react';
import logo from './logo.svg';


class App extends Component {
  state = {
    todos: [
      {id: 1, name: "Learn Rails", complete: true },
      {id: 2, name: "Learn React", complete: false },
      {id: 3, name: "Learn Redux", complete: false },
    ],
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <ul>
          { todos.map( (todo, i) => {
            return <li key={todo.id}>{todo.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default App;
