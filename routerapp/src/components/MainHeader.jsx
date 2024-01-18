import React from 'react'
import {Outlet} from 'react-router-dom'

function MainHeader () {
  return (
    <div>
        <Outlet/>
        {/* This act as a Home */}
    </div>
  )
}

export default MainHeader