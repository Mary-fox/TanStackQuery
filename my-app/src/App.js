
import './App.css';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';

export default function App() {
  return (
    <div style={{ maxWidth: 700, margin: '24px auto', padding: 16 }}>
      <h2>Todo (TanStack Query)</h2>
      <AddTodo />
      <TodoList />
    </div>
  );
}

