import React, { useReducer } from 'react'


interface CounterState{
    count:number
    name:string
}
interface CounterAction{
    type:string
    payload:Object
}

function reducer(state:CounterState, action:CounterAction) {
    switch(action.type){
        case "INCREMENT":
            return {...state,count:state.count+1}
    }
}


const initialState = { count: 0, name: "Fred" }

function UseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h3>UseReducer</h3>
            cpt : {state.count}
            name : {state.name}

            <button onClick={() => dispatch({type:"INCREMENT"})}>increment</button>
        </>
    )
}




export default UseReducer