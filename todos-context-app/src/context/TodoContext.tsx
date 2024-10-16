import React, { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { Todo } from "../core/Todo";


interface TodoState {
    todos: Todo[];
}

interface TodoContextType {
    state: TodoState;
    addTodo: (todo: Todo) => Promise<void>;
    deleteTodo: (todo: Todo) => Promise<void>;
}

const TodoContext = createContext<TodoContextType|undefined>(undefined)

const todoReducer = (state: TodoState, action: { type: string; payload?: any }): TodoState => {
    switch (action.type) {
      case 'SET_TODOS':
        return { ...state, todos: action.payload };
      case 'ADD_TODO':
        return { ...state, todos: [...state.todos, action.payload] };
      case 'DELETE_TODO':
        return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload.id) };
      default:
        return state;
    }
  };

  const initialState:TodoState={
    todos:[]
  }


  export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
  
    useEffect(() => {
      const fetchTodos = async () => {
        const response = await fetch(import.meta.env.VITE_TODOS_URL);
        const data: Todo[] = await response.json();
        dispatch({ type: 'SET_TODOS', payload: data });
      };
  
      fetchTodos();
    }, []);
  
    const addTodo = async (todo: Todo) => {
      const response = await fetch(import.meta.env.VITE_TODOS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      });
      const newTodo: Todo = await response.json();
      dispatch({ type: 'ADD_TODO', payload: newTodo });
    };
  
    const deleteTodo = async (todo: Todo) => {
      await fetch(`${import.meta.env.VITE_TODOS_URL}/${todo.id}`, {
        method: 'DELETE',
      });
      dispatch({ type: 'DELETE_TODO', payload: todo });
    };
  
    return (
      <TodoContext.Provider value={{ state, addTodo, deleteTodo }}>
        {children}
      </TodoContext.Provider>
    );
  };

  export const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (!context) {
      throw new Error('useTodoContext must be used within a TodoProvider');
    }
    return context;
  };