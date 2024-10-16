import { useState,useMemo,useCallback, useRef } from "react"
import UseEffect from "./UseEffect"
import UseReducer from "./UseReducer"
import UseMemo from "./UseMemo"
import PureComponent01 from "./PureComponent01"
import PureComponent02 from "./PureComponent02"
import UseRef from "./UseRef"

function App() {

  const [show, setShow] = useState(false)
  const name= "fred"

  // const clickPureComponent02 = ()=>{
  //   console.log("clickPureComponent02")
  // } 
  // const clickPureComponent02 = useMemo(()=>{
  //   return ()=>{
  //     console.log("clickPureComponent02")
  //   }
  // },[])
  const clickPureComponent02 = useCallback(()=>{
      console.log("clickPureComponent02")
  },[])


  const inputRef = useRef<HTMLInputElement>(null)
  const componentRef = useRef(null)
  const clickInput = ()=>{
    console.log(inputRef.current?.value)
  }
  const showRefValue = ()=>{
    console.log(componentRef.current?.getValue())
  }
  return (
    <>
      <h1>Hooks</h1>

      <button onClick={()=>setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

    {show &&
    <>
        <h2>Un truc</h2>
        <UseEffect/>
    </> 
    }
    <UseReducer/>
    <hr />
    <UseMemo/>
    <hr />
    <PureComponent01 name={name}/>
    <hr />
    <PureComponent02 onClick={clickPureComponent02}/>
    <hr />
    <input ref={inputRef} type="text" />
    <button onClick={()=>clickInput()}>click Input</button>
    <hr />
    <UseRef ref={componentRef}/>
    <button onClick={()=>showRefValue()}>showRefValue</button>

    </>
  )
}

export default App
