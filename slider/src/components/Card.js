import React from 'react'

function Card (props){

    const user = props.userData
  return (
    <div>
        <div className="top-[4rem] left-[25%] absolute">
            <img src={user.img} alt={user.name}  className='rounded-full w-[9rem] h-[9rem] ' /> 
        </div>
        <div className="namePlace">
            {user.name}
        </div>
        <div className="workPlace">
            {user.work}
        </div>
        <div className="descPlace">
            {user.description}
        </div>
    </div>

  )
}

export default Card