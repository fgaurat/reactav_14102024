import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
     const t = setInterval(()=>{
        setCount(lastCount => lastCount+1)
        console.log("inc")
     },1000)
    
     return ()=>{
        clearInterval(t)
     }

    }, [])
    
  return (
    <>
    <h3>UseEffect</h3>
    <strong>{count}</strong>
    </>
  )
}

export default UseEffect