import { Fragment, useState } from "react"
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

interface TodoState {
  id: number;
  task: string

}

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoState[]>([])

  const addTodoHandler = (task: string) => {
    console.log(task);
    setTodos(prevTodo => [...prevTodo, { id: Math.random(), task: task }])
  }
  return <Fragment>
    <h1>React with typescript</h1>
    <CreateTodo onAddTodo={addTodoHandler} />
    <TodoList items={todos} />
  </Fragment>
}

export default App;