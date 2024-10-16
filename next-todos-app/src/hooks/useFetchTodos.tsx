import  { useEffect, useState } from 'react'

import service from '../services/todoService'
import { Todo } from '../core/Todo'

const useFetchTodos = ()=>{

    const [todos, setTodos] = useState<Todo[]>([])

    const [isLoading,setIsLoading] = useState<boolean>(true)
    
    const fetchTodos = async ()=>{
        setIsLoading(true)
        const values = await service.getTodos();
        setIsLoading(false)
        setTodos(values)
    }

    useEffect( ()=> {
        fetchTodos()
    },[])

    return {todos,isLoading,setTodos,fetchTodos}
}


export {useFetchTodos}