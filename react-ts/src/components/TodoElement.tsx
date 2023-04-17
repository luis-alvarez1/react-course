import React from 'react';
import { Todo } from '../types/Todo';
import classes from './TodoElement.module.css';

type Props = {
  todo: Todo;
  onRemoveTodo: (id: string) => void;
};

export const TodoElement: React.FC<Props> = ({ todo, onRemoveTodo }) => {
  const removeTodoHandler = () => {
    onRemoveTodo(todo.id);
  };
  return (
    <li onClick={removeTodoHandler} className={classes.element}>
      {todo.text}
    </li>
  );
};
