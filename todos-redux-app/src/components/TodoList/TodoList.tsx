import { useSelector } from 'react-redux'
import { Todo } from '../../core/Todo'
import TodoRow from './TodoRow'
import type { RootState } from '../../app/store'

function TodoList() {

    const todos = useSelector((state: RootState) => state.theTodos.todos)

    const doDelete = async (todo:Todo)=>{
        console.log("doDelete",todo)
    }
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
            }
        </>
    )
}

export default TodoList