import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../core/Todo'


export interface TodoListState{
    todos:Todo[]
    isLoading:boolean
}

const initialState: TodoListState = {
    isLoading:false,
    todos:[ {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
      },
      {
        "userId": 1,
        "id": 11,
        "title": "vero rerum temporibus dolor",
        "completed": true
      },
      {
        "userId": 1,
        "id": 12,
        "title": "ipsa repellendus fugit nisi",
        "completed": true
      }]
  }
  
  export const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {}
  })  

//   export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default todoListSlice.reducer


