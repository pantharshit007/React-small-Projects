import React, { useState } from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {

  const course = props.course;
  const likedCourses = props.likedCourses;
  const setLikedCourses = props.setLikedCourses;

  const [readmore, setReadmore] = useState(true);

  function clickHandler(){
    if (likedCourses.includes(course.id)){
        setLikedCourses( (prevLiked) => prevLiked.filter((cid)=> (cid !== course.id) ))
        // console.log("like removed")
        toast.warning("Like Removed")
    }
    else{
      if (likedCourses.length === 0){
        setLikedCourses([course.id]);
        // console.log("like added")
      }
      else{
        setLikedCourses( (prev) => [...prev, course.id]);
      }
      toast.success("Like Successfully");
      
    }
  }

  function readabilityHandler(){
    setReadmore(!readmore);
    
  }

  return (
    <div className='w-[300px] bg-[#034078]  rounded-md overflow-hidden' >

      <div className='relative'>
          <img src={course.image.url} alt="image" />

        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-18px] grid place-items-center">
          <button onClick={clickHandler}>
            {
              likedCourses.includes(course.id) ? 
              <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />
            }
            
          </button>
        </div>

      </div>
      
        <div className='p-4'>
          <p className='text-white font-semibold text-lg leading-6'> {course.title}</p>
          <p className='text-white mt-2'> 
            {
            readmore ?
            course.description.substring(0, 100) + "..." :
            course.description + "..."
            }
            <span className='cursor-pointer text-cyan-400' onClick={readabilityHandler}>
              {readmore ? `Show More `: `Show Less`}
            </span>

          </p>
        </div>


    </div>
  )
}

export default Card