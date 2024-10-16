import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../core/Todo'
import service from '../services/todoService'


// const fetchTodoList = createAsyncThunk(
//     'todos/fetch',
//     async () => {
//         const data = await service.getTodos()
//         return data
//     },
// )
export const fetchTodoList = createAsyncThunk(
    'todos/fetch', service.getTodos
)
export const deleteAndReloadTodo = createAsyncThunk(
    'todos/deleteAndReloadTodo', async (todo:Todo, thunkAPI:any)=>{
        await service.deleteTodo(todo)
        thunkAPI.dispatch(fetchTodoList())

    }
)

export interface TodoListState {
    todos: Todo[]
    isLoading: boolean
}

const initialState: TodoListState = {
    isLoading: false,
    todos: []
}

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodoList.fulfilled, (state, action) => {
            state.todos = action.payload
        })

    }
})

//   export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default todoListSlice.reducer


