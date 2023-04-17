import { PropsWithChildren, useState } from 'react';
import { Todo } from '../types/Todo';
import { TodoContext, TodoContextType } from './todos-context';

export const TodoContextProvider: React.FC<PropsWithChildren> = (props) => {
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

  const onRemoveTodo = (id: string) => {
    setTodos((prevTodos: Todo[]) => {
      const fitleredTodos = prevTodos.filter((t) => t.id !== id);

      return fitleredTodos;
    });
  };

  const context: TodoContextType = {
    todos,
    addToDo: onAddToDo,
    removeTodo: onRemoveTodo,
  };
  return <TodoContext.Provider value={context}>{props.children}</TodoContext.Provider>;
};
