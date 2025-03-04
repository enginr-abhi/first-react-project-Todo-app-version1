import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import './components/App.css';

function App() {
  return (
    <center className="todo-conatiner">
      <AppName />
      <AddTodo />
      <div className="items-conatiner">
      <TodoItem1 />
      <TodoItem2 />
      </div>
      
    </center>
  );
}

export default App;
