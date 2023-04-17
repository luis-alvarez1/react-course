import { useContext } from 'react';
import { TodoElement } from './TodoElement';
import classes from './Todos.module.css';
import { TodoContext } from '../store/todos-context';

export const Todos: React.FC = () => {
  const { todos: items, removeTodo: onRemoveTodo } = useContext(TodoContext);

  return (
    <>
      <ul className={classes.todos}>
        {items.map((todo) => (
          <TodoElement onRemoveTodo={onRemoveTodo} key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};
