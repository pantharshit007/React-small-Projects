import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { CiLight, CiDark } from "react-icons/ci";

function Header() {
  const {isDark, setIsDark} = useContext(AppContext);
  // console.log(isDark)

  return (
    <div className={`flex  items-center shadow-md py-3 w-full fixed top-0  ${isDark ? 'dark-mode border-b-2 border-gray-300' : 'light-mode'}`}>
        <header className='flex-1'>
          <h1 className="font-bold text-2xl uppercase text-center" >Pant Blogs</h1>  
        </header>

        <label htmlFor="" className='flex-none mr-2'>
          <button className=' w-8 h-8'
            onClick={() => setIsDark(!isDark)} >
            {
              isDark ?
              (<CiLight className='w-6 h-6'/>) :
              (<CiDark className='w-6 h-6' />)
            } 
          </button>
          

        </label>
        
    </div>

  )
}

export default Header