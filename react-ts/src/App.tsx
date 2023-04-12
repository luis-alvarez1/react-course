import { useState } from 'react';
import './App.css';
import { NewTodo } from './components/NewTodo';
import { Todos } from './components/Todos';
import { Todo } from './types/Todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo('Todo 1'),
    new Todo('Todo 2'),
    new Todo('Todo 3'),
  ]);

  const onAddToDo = (todoText: string) => {
    setTodos((prevTodos: Todo[]) => {
      return [...prevTodos, new Todo(todoText)];
    });
  };
  return (
    <div>
      <NewTodo onAddToDo={onAddToDo} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
