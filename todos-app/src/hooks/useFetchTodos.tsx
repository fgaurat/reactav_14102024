import React, { useEffect, useState } from 'react'

import service from '../services/todoService'
import { Todo } from '../core/Todo'

const useFetchTodos = ()=>{

    const [todos, setTodos] = useState<Todo[]>([])

    const [isLoading,setIsLoading] = useState<boolean>(true)

    useEffect( ()=> {

        (async ()=>{
            const values = await service.getTodos();
            setIsLoading(false)
            setTodos(values)
        })()
        
        
    },[])

    return {todos,isLoading}
}


export {useFetchTodos}