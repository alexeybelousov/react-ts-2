import React from 'react';
import { ITodo } from '../interfaces';

interface TodoListProps {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  if (!todos.length) {
    return (
      <p className="center">Empty list</p>
    )
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  }

  return (
    <ul>
      {todos.map(todo => {
        const classes = ['todo'];

        if (todo.completed) {
          classes.push('completed');
        }

        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                onClick={(e) => removeHandler(e, todo.id)}
                className="material-icons red-text"
              >delete</i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}