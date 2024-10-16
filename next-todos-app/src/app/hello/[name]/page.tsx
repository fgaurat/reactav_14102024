import React from 'react'

function HelloName({ params }:{params:{name:string}}) {
  return (
    <>
      <h2>
        Hello {params.name}
      </h2>
      
    </>
  )
}

export default HelloName