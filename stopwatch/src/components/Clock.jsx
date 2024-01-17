import React from 'react'
import { useState, useEffect, useRef } from 'react'

function Clock() {

  // TODO:
  // find the isRunning difference 
  // reset the isRunning
  //update the watch data

  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0);
  const startisRunningRef = useRef(0);
  const intervalIdRef = useRef(null);

  // const startisRunningRef = isRunning.getisRunning();
  function start() {
    setIsRunning(true);
    startisRunningRef.current = Date.now() - elapsedTime;
  }

  function stop() { 
    setIsRunning(false)
  }

  function reset() {
    setIsRunning(false)
    setElapsedTime(0)
  }

  useEffect(()=>{

    if (isRunning) {
  
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startisRunningRef.current);
      }, 10); 
    } 

    return()=>{
      clearInterval(intervalIdRef.current)
    }
    
  },[isRunning])

  function formatTime(){

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / (1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`;
}

  return (
    <div className="box">
        <div className="name">STOP WATCH</div>
        <div className="timer">
            {formatTime()}
        </div>
        <div className="functionality">
            <button className="start" onClick={start}>Start</button> 
            <button className="stop" onClick={stop}>Stop</button>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default Clock