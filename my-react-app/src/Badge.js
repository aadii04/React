import { useState } from "react"

function Badge(props){

    const [count, setCount] = useState(0)

    const incrementCount = ()=>{
        setCount(count + 1);
    }

    return (
        <button type="button" onClick={incrementCount} className="btn btn-primary">
        {props.caption} <span className="badge badge-light">{count}</span>
        </button>
    )
}
export default Badge