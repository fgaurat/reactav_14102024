import React from 'react'
import TodoList from '../../components/TodoList/TodoList'
import TodoForm from '../../components/TodoForm'

function Home() {
    return (
        <>
            <h1>Home</h1>
            <TodoForm/>
            <hr />
            <TodoList/>
        </>
    )
}

export default Home