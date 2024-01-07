import React from 'react'
import './css/Loader.css';

const Loader = () => {

  return (
    <div className='flex flex-col items-center space-y-9'>

      <div className="spinner"></div>
      <p className="text-[#2945A3] text-xl font-semibold">Loading...</p>
      
    </div>
    
  )
}

export default Loader