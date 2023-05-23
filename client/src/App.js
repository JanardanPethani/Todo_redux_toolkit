import { Route, Routes } from "react-router"
import "./App.css"
import Home from "./pages/home/Home"
import TodoList from "./pages/todo/TodoList"
import Posts from "./pages/posts/Posts"

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
