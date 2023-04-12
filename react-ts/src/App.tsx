import './App.css';
import { Todos } from './components/Todos';
import { Todo } from './types/Todo';

function App() {
  const TODOS: Todo[] = [new Todo('Todo 1'), new Todo('Todo 2'), new Todo('Todo 3')];
  return (
    <div>
      <Todos items={TODOS} />
    </div>
  );
}

export default App;
