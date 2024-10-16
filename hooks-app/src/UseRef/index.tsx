import React, { forwardRef, useImperativeHandle, useRef } from 'react'

function UseRef(props,ref) {
  const myRef = useRef<HTMLInputElement>(null)


  useImperativeHandle(ref,()=>{
    return{
      getValue:()=>myRef.current?.value
    }
  })
  
  return (
    <>
    <h2>UseRef</h2>
    <input ref={myRef} type="text" />
    </>

  )
}

export default forwardRef(UseRef)