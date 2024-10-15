import React, { useEffect, useState } from 'react'
import service from '../services/todoService'
import { Todo } from '../core/Todo'

const useSaveTodo = ()=>{
    const [isLoading,setIsLoading] = useState<boolean>(false)

    const saveTodo = async (todo:Todo)=>{
        setIsLoading(true)
        await service.saveTodo(todo)
        setIsLoading(false)
    }


    return {saveTodo,isLoading}
}

export {useSaveTodo}