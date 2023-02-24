import { useState } from "react"

export default function UseState() {

    const [count, setCount] = useState(0);

    function clickPlus() {
        setCount(count+1);
    }
    return(
        <div className="box">
            <p>{count}</p>
            <button onClick={clickPlus}>click</button>
        </div>
    )
    
}