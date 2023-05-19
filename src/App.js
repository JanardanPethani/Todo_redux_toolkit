import { Route, Routes } from "react-router"
import "./App.css"
import Home from "./component/home/Home"
import TodoList from "./component/todo/TodoList"
import Posts from "./component/posts/Posts"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/list" element={<TodoList />} />
    </Routes>
  )
}

export default App
