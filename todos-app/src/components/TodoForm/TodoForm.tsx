import { useForm, SubmitHandler } from "react-hook-form";
import { Todo } from "../../core/Todo";
import { useSaveTodo } from "../../hooks/useSaveTodo";

function TodoForm() {
  const {saveTodo,isLoading} = useSaveTodo()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Todo>();

  const onSubmit: SubmitHandler<Todo> = async (data) =>{
    saveTodo(data)
    console.log(data)
  };

  return (
    <>
      <h1>TodoForm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
          <input className="form-control" type="text" id="title" {...register("title", { required: true })} />
            {errors.title && <span>Title is required</span>}
        </div>

        <div className="mb-3 form-check">
        <input className="form-check-input" id="completed" type="checkbox" {...register("completed")} />
        <label className="form-check-label" htmlFor="completed">Completed ?</label>
        </div>
        {!isLoading && <input type="submit" value="Ok" className="btn btn-primary"/>}
        </form>
    </>
  );
}

export default TodoForm;

  