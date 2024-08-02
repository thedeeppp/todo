import * as react from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";


function App() {

  return (
    <react.Stack h="100vh">
      <Navbar/>
      <react.Container>
        <TodoForm/>
        <TodoList/>
      </react.Container>
    </react.Stack>
  )
}

export default App
