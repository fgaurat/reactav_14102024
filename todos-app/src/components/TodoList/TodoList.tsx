import { Todo } from '../../core/Todo'
import { useDeleteTodo } from '../../hooks/useDeleteTodo'
import { useFetchTodos } from '../../hooks/useFetchTodos'
import TodoRow from './TodoRow'

function TodoList() {
    const { todos, isLoading: isLoadingFetch,setTodos,fetchTodos } = useFetchTodos()
    const { deleteTodo, isLoading: isLoadingDelete } = useDeleteTodo()
    const doDelete = async (todo:Todo)=>{
        await deleteTodo(todo)
        // const t = todos.filter(o =>o.id!=todo.id)
        // setTodos(t)
        fetchTodos()
    }
    return (
        <>
            <h1>TodoList</h1>

            {(isLoadingFetch || isLoadingDelete) && <div>Loading </div>}
            {!isLoadingFetch && !isLoadingDelete &&
                <table className="table">
                    <tbody>
                        {todos.map((todo: Todo) => (
                            <TodoRow todo={todo} doDelete={doDelete} key={todo.id} />
                        ))}
                    </tbody>

                </table>
            }
        </>
    )
}

export default TodoList