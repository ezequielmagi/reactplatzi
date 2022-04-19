import './App.css';
import TodoButton from './TodoButton';
import {TodoCounter} from './TodoCounter';
import { TodoItem } from './TodoItem';
import TodoList from './TodoList';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Ver el curso de react', completed: false },
  { text: 'Llorar con la llorona', completed: false }
]

function App() {
  return (
      <>
        <TodoCounter />
        {/* <TodoSearch /> */}
        <input placeholder="cebolla" />
        <TodoList>
          { todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} />
          )) }
        </TodoList>
        <TodoButton />
      </>
  );
}

export default App;
