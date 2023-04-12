import React, { useState } from 'react';

type Props = {
  onAddToDo: (todoText: string) => void;
};

export const NewTodo: React.FC<Props> = ({ onAddToDo }) => {
  const [todoText, setTodoText] = useState<string>('');

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
    <form onSubmit={submitForm}>
      <label htmlFor='todoText'>Todo Text</label>
      <input type='text' id='todoText' value={todoText} onChange={todoTextHandler} />
      <button type='submit'>Add To Do</button>
    </form>
  );
};
