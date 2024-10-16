import React from 'react'
import { useTodoContext } from '../../context/TodoContext'
import { Todo } from '../../core/Todo'

function TodoList() {

    const { state, addTodo, deleteTodo } = useTodoContext()

  return (
    <>
    <h1>TodoList</h1>
    <ul>
        {state.todos.map((todo:Todo) =>(
            <li>{todo.title}</li>
        ))}
    </ul>
    </>
  )
}

export default TodoList