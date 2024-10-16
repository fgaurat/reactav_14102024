import React from 'react'
import service from "@/services/todoService"
export async function generateStaticParams() {
    const todos = await service.getTodos()
    return todos.map((todo) => ({
        todoId: todo.id?.toString(),
    }))
}


async function Page({ params }:{params:{todoId:number}}) {
    const {todoId} = params
    const todo = await service.getTodo(todoId)
    return (
         
<>
  <h1>Todo</h1>
  <ul>
    <li>id : {todo.id}</li>
    <li>title : {todo.title}</li>
    <li>completed : {todo.completed}</li>
  </ul>
  </>
    )
}

export default Page