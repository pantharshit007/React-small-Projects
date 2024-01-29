import React from 'react'
import framImage from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import {FcGoogle} from 'react-icons/fc'

function Template({tittle, desc1, desc2, image, formtype, setIsLoggedIn}) {
  return (
    <div className="flex justify-between w-11/12 max-w-[1160px] py-12 gap-x-12 gap-y-0 mx-auto overflow-x-hidden">
        <div className='w-11/12 max-w-[450px]' >
            <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">{tittle}</h1>
            <p className='text-[1.125rem] leading[1.625rem] mt-4' >
                <span className='text-richblack-100'>{desc1}</span><br></br>
                <span className='text-violet-500 italic'>{desc2}</span>
            </p>

            {/* form Type */}
            {formtype === "signup" ?
                (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>):
                (<LoginForm setIsLoggedIn={setIsLoggedIn}/>) 
            }
            {/* Decoration */}
            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] bg-richblack-700 w-full'></div>
                <p className='text-richblack-700 font-medium leading-[1.375rem] '> OR</p>
                <div className='h-[1px] bg-richblack-700 w-full'></div>
            </div>

            <button className='flex w-full justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle/>
                <p>Sign Up with Google</p>
            </button>
            
        </div>

        <div className='relative w-11/12 max-w-[450px] '>
            {/* front image */}
            <img src={image} alt="front-img" width={558} height={504} loading='lazy'
            className='absolute -top-4 right-4'/>
            {/* bg image */}
            <img src={framImage} alt="bg-frame" width={558} height={504} loading='lazy'/>
        </div>

    </div>
  )
}

export default Template