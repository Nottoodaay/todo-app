import { TodoFrom } from "./components/TodoFrom";
import { TodoList } from "./components/TodoList";
import './styles.scss'

function App() {
  return(
    <div className="container">
      <h1>Todo App</h1>
      <TodoFrom/>
      <TodoList/>
    </div>
  );
}

export default App;
