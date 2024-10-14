import { Todo } from '../../core/Todo'
import { useDeleteTodo } from '../../hooks/useDeleteTodo'
import { useFetchTodos } from '../../hooks/useFetchTodos'
import TodoRow from './TodoRow'

function TodoList() {
   const {todos,isLoading:isLoadingFetch} = useFetchTodos()
   const {deleteTodo,isLoading:isLoadingDelete} = useDeleteTodo()
    
    return (
        <>
            <h1>TodoList</h1>

            {(isLoadingFetch || isLoadingDelete) &&  <div>Loading </div>}
            {!isLoadingFetch && !isLoadingDelete &&
            <table className="table">
                <tbody>
                {todos.map((todo:Todo) =>(
                    <TodoRow todo={todo} doDelete={deleteTodo} key={todo.id}/>
                ))}
                </tbody>

            </table>
            }
        </>
    )
}

export default TodoList