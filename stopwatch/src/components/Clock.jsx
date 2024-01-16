import React from 'react'
import { useState, useEffect } from 'react'

function Clock() {

  // TODO:
  // find the time difference 
  // reset the time
  //update the watch data

  const [time, setTime] = useState(new Date())
  
  const startTime = time.getTime();
  function start() {
   
    console.log(time.getTime())
  }
  function stop() { 
    setTime(new Date())
    const elapsedTime = time.getTime() - startTime ;
    console.log(elapsedTime)
  }
  function reset() {}

  useState(()=>{
    setInterval(()=>{
        // setTime(new Date());
    },100)
  },[])


  return (
    <div className="box">
        <div className="name">StopWatch</div>
        <div className="container">
            00:00:00
        </div>
        <div className="functionality">
            <button className="start" onClick={start}>Start</button>
            <button className="reset" onClick={reset}>Reset</button>
            <button className="stop" onClick={stop}>Stop</button>
        </div>
    </div>
  )
}

export default Clock