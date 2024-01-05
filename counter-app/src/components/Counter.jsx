import React, { useState } from 'react';
import '../css/Counter.css';

function Counter(){
    const [count, setCount] = useState(0);
    
    function updateAdd(){
        setCount(count+1);
    }

    function updateSub(){
        setCount(count-1);
    }
    
    function reset(){
        setCount(0);
    }

    return(
        <>
        <div className="wrapper">
            <div>{count}</div>
            <div className="buttons">
                <button onClick={updateSub} className=" bg-red-600 w-7 rounded-sm">-</button>
                <button onClick={reset} className="bg-cyan-400  w-fit rounded-sm px-[4px]">Reset</button>
                <button onClick={updateAdd} className=" bg-green-600 w-7 rounded-sm">+</button>
            </div>
            
            
        </div>
        </>
    )
}

export default Counter;