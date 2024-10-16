import React from 'react'

function PureComponent02({onClick}) {
    console.log("PureComponent02")
    return (
        <>
            <h3>PureComponent02</h3>
            <button onClick={onClick}>click</button>
        </>
    )
}
const c = React.memo(PureComponent02)
export default c