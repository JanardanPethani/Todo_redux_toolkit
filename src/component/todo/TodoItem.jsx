import React from "react"
import { complete, uncomplete, remove } from "./todoSlice"
import { useDispatch } from "react-redux"

function TodoItem({ obj, idx }) {
  const dispatch = useDispatch()
  const onListItemStatusChange = (obj) => {
    if (obj.status === "done") dispatch(uncomplete(obj.id))
    else dispatch(complete(obj.id))
  }

  const onDelete = (obj) => {
    dispatch(remove(obj.id))
  }
  return (
    <li key={idx}>
      <div className={`${obj.status === "done" ? "task-done" : ""}`}>
        {obj.value}
      </div>
      <div>
        <button onClick={() => onListItemStatusChange(obj)}>
          {obj.status === "done" ? "Undo" : "Make it done"}
        </button>
        <button onClick={() => onDelete(obj)}>X</button>
      </div>
    </li>
  )
}

export default TodoItem
