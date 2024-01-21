import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Card from './Card.js'

function Slider(props) {
  const data = props.data;

  function leftHandler(e) {}

  function rightHandler(e) {}

  return (
    <div className='bg-slate-300 w-[700px] h-[500px] mx-auto flex flex-col '>
      
      
      <div className="m-20">
        {data.map((user, index) => (
            <Card key ={index} userData = {user}/>
          ))
        }
      </div>
      
      <div className="flex justify-between relative top-[3%]">
        <button onClick={leftHandler} className='text-[2.5rem] absolute left-0'><IoIosArrowBack /></button>
        <button onClick={rightHandler} className='text-[2.5rem] absolute right-0'><IoIosArrowForward /></button>
      </div>
      

      
      
      
    </div>
  );
}

export default Slider;
