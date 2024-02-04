import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Spinner() {

  const {isDark} = useContext(AppContext)
  return (
    <div className={` absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] `}>
      <div className={`spinner ${isDark ? 'dark-mode ' : 'light-mode'}`}>
      </div>
    </div>
    
  )
}

export default Spinner