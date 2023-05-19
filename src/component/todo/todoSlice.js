import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  list: [],
}

export const counterSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    add: (state, action) => {
      state.list.push({
        id: state.list.length + 1,
        value: action.payload,
        status: "undone",
      })
    },
    remove: (state, action) => {
      state.list = state.list.filter((obj) => obj.id !== action.payload)
    },
    complete: (state, action) => {
      state.list = state.list.map((obj) => {
        if (obj.id === action.payload) {
          return { ...obj, status: "done" }
        }
        return obj
      })
    },
    uncomplete: (state, action) => {
      state.list = state.list.map((obj) => {
        if (obj.id === action.payload) {
          return { ...obj, status: "undone" }
        }
        return obj
      })
    },
  },
})

export const { add, remove, complete, uncomplete } = counterSlice.actions

export default counterSlice.reducer
