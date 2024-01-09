import React from 'react'
import { useState, useEffect } from 'react';
import './Clock.css';

function Clock() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    },1000)

    return(()=> clearInterval(intervalID));
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    hours = hours % 12 || 12;  //24hours

     return `${padding(hours)}:${padding(minutes)}:${padding(seconds)}`;
  }

  function padding(value) {
    return (value < 10 ? "0" : "" ) + value;
  }

  return (
    <div>
        <div className="container">
          <div className="space">

            <h1>{formatTime()}</h1>

          </div>
             
        </div>
       
    </div>
  )
}

export default Clock