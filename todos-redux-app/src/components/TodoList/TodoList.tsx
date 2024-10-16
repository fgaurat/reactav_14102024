import { useDispatch, useSelector } from 'react-redux'
import { Todo } from '../../core/Todo'
import TodoRow from './TodoRow'
import type { AppDispatch, RootState } from '../../app/store'
import { useEffect } from 'react'
import { fetchTodoList,deleteAndReloadTodo } from '../../app/todoListSlice'

function TodoList() {

    const todos = useSelector((state: RootState) => state.theTodos.todos)
    const dispatch = useDispatch<AppDispatch>()

    const doDelete = async (todo:Todo)=>{
        dispatch(deleteAndReloadTodo(todo))
    }
    useEffect(()=>{
        dispatch(fetchTodoList())

    },[])
    return (
        <>
            <h1>TodoList</h1>

                <table className="table">
                    <tbody>
                        {todos.map((todo: Todo) => (
                            <TodoRow todo={todo} doDelete={doDelete} key={todo.id} />
                        ))}
                    </tbody>

                </table>
        </>
    )
}

export default TodoList