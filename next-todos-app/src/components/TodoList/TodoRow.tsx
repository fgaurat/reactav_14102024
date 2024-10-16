import { Todo } from '../../core/Todo'


interface TodoRowProps{
    todo:Todo,
    doDelete:(todo:Todo)=>void
 }
function TodoRow({todo,doDelete}:TodoRowProps) {

    return (

        <tr >
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.completed}</td>
            <td>
                <button className="btn btn-danger" onClick={() => doDelete(todo)}>Delete</button>
            </td>
        </tr>
    )
}

export default TodoRow