import React from 'react'
import {useNavigate} from 'react-router-dom'

function Projects(){

    const navigate = useNavigate();
    function clickHandler(){
        // move to about page
        navigate('/about');
    }
  return (
    <div>
        Projects <br/>
        <button onClick={clickHandler}>About Page</button>
    </div>
  )
}

export default Projects