import { createContext } from 'react';
import { Todo } from '../types/Todo';

export type TodoContextType = {
  todos: Todo[];
  addToDo: (todoText: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addToDo: () => {},
  removeTodo: (id: string) => {},
});
