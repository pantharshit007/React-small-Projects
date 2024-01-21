import React, { useState, useEffect , useRef} from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Card from './Card.js';

function Slider(props) {
  const data = props.data;

  const [slideIdx, setSlideIdx] = useState(0);
  const intervalIdRef = useRef();

  function leftHandler() {
    const isFirst = slideIdx === 0;
    const newIdx = isFirst ? data.length - 1 : slideIdx - 1;
    setSlideIdx(newIdx);
    restartInterval();
  }

  function rightHandler() {
    const newIdx = (slideIdx + 1) % data.length;
    setSlideIdx(newIdx);
    restartInterval();
  }

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [data.length]);

  function startInterval() {
    intervalIdRef.current = setInterval(() => {
      setSlideIdx(prevSlideIdx => (prevSlideIdx + 1) % data.length);
    }, 5000);
  }

  function restartInterval() {
    clearInterval(intervalIdRef.current);
    startInterval();
  }  

  return (
    <div className='bg-slate-300 w-[700px] h-[500px] mx-auto flex flex-col relative group rounded-md z-20'>
      <div className="m-20">
        {data.map((user, index) => (
          <Card key={index} activeIndex={slideIdx} currentIndex={index} userData={user} />
        ))}
      </div>

      <div className='w-[9rem] h-[9rem] bg-sky-400 rounded-full absolute -top-[3.4rem] left-[4rem] -z-10'></div>

      <div className="absolute left-5 top-1/2 transform -translate-y-1/2 hidden group-hover:block transition-all duration-500 z-0">
        <button onClick={leftHandler} className='text-[2.5rem] text-blue-900'><IoIosArrowBack /></button>
      </div>

      <div className="absolute right-5 top-1/2 transform -translate-y-1/2 hidden group-hover:block transition-all duration-500">
        <button onClick={rightHandler} className='text-[2.5rem] text-blue-900'><IoIosArrowForward /></button>
      </div>
    </div>
  );
}

export default Slider;
