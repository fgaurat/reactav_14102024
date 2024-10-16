import { Todo } from "../core/Todo";

const getTodos = async (): Promise<Todo[]> => {
    const r = await fetch(process.env.NEXT_PUBLIC_TODOS_URL!)
    return r.json();
}

const deleteTodo = async (todo: Todo) => {
    const url = `${process.env.NEXT_PUBLIC_TODOS_URL!}/${todo.id}`;
    return await fetch(url, {
        method: "DELETE",
    });
};

  
const saveTodo = async (todo: Todo) => {
    const url = process.env.NEXT_PUBLIC_TODOS_URL!;
    return await fetch(url, {
      method: "POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(todo)
    });
  };

  const getTodo = async (id:number) => {
    const url = `${process.env.NEXT_PUBLIC_TODOS_URL}/${id}`;
    const response = await fetch(url);
    return await response.json();
  };

export default {
    getTodos,
    deleteTodo,
    saveTodo,
    getTodo
}