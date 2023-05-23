import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { add } from "./todoSlice"
import "./TodoList.styles.scss"
import TodoItem from "./TodoItem"
import { Link } from "react-router-dom"

function TodoList() {
  const [inputText, setInputText] = useState("")
  const list = useSelector((state) => state.todoList.list)
  const dispatch = useDispatch()

  const inputChange = (e) => {
    setInputText(e.target.value)
  }

  const onSubmit = (e) => {
    inputText && dispatch(add(inputText))
    setInputText("")
  }

  return (
    <>
      <Link to={"/"} className="link">
        Jump to Home
      </Link>
      <div className="todo-list">
        <div className="input-box">
          <input type="text" onChange={inputChange} value={inputText} />
          <button aria-label="Add value" onClick={onSubmit}>
            Add
          </button>
        </div>
        <ul className="list">
          {list?.length === 0 && <li>-- Empty list --</li>}
          {list?.map((obj, idx) => (
            <TodoItem obj={obj} idx={idx} key={idx} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default TodoList
