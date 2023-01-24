import React from 'react';
import { useStore } from 'effector-react';
import DeleteIcon from "@mui/icons-material/Delete";
import {Button , List, ListItem} from '@mui/material';

import { $todos, addTodo, delTodo } from './store/todos';

import './app.css'

function App() {
  const [inputValue, setInputValue] = React.useState('')
  const todos = useStore($todos);

  const handleAddTodo = () => {
    if (inputValue) {
      addTodo({id: Math.floor(Math.random() * 100), name: inputValue})
    }
  }

  return (
    <div className="app">
      <div>
        <div className="header">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={handleAddTodo}>add todo</Button>
        </div>
        <div className="todo">
          <List>
            {todos.map((todo) => (
              <ListItem>
                <span>{todo.name}</span>
                <DeleteIcon onClick={() => delTodo(todo.id)} />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
}

export default App;
