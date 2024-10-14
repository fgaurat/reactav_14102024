import { Todo } from "../core/Todo";

const getTodos = async (): Promise<Todo[]> => {
    const r = await fetch(import.meta.env.VITE_TODOS_URL)
    return r.json();
}

const deleteTodo = async (todo: Todo) => {
    const url = `${import.meta.env.VITE_TODOS_URL}/${todo.id}`;
    return await fetch(url, {
        method: "DELETE",
    });
};


export default {
    getTodos,
    deleteTodo
}