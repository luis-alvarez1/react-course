import { Todo } from '../types/Todo';
import { TodoElement } from './Todo';

type Props = {
  items: Todo[];
};

export const Todos: React.FC<Props> = ({ items }) => {
  return (
    <>
      <ul>
        {items.map((todo) => (
          <TodoElement key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};
