import React from 'react'

function PureComponent01({name}:{name:string}) {
    console.log("PureComponent01")
    return (
        <>
            <h3>PureComponent01</h3>
            Bonjour {name}
        </>
    )
}
const c = React.memo(PureComponent01)
export default c