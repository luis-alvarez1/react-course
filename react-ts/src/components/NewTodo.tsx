import React, { useContext, useState } from 'react';
import classes from './NewTodo.module.css';
import { TodoContext } from '../store/todos-context';

export const NewTodo: React.FC = () => {
  const [todoText, setTodoText] = useState<string>('');
  const { addToDo: onAddToDo } = useContext(TodoContext);

  const todoTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target?.value);
  };

  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();

    if (todoText.trim().length === 0) {
      return;
    }

    onAddToDo(todoText);
    setTodoText('');
  };

  return (
    <form className={classes.form} onSubmit={submitForm}>
      <label htmlFor='todoText'>Todo Text</label>
      <input type='text' id='todoText' value={todoText} onChange={todoTextHandler} />
      <button type='submit'>Add To Do</button>
    </form>
  );
};
