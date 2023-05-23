import { configureStore } from "@reduxjs/toolkit"
import todoSlice from "../component/todo/todoSlice"
import { postApi } from "../services/posts"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

export const store = configureStore({
  reducer: { todoList: todoSlice, [postApi.reducerPath]: postApi.reducer },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
