import React from 'react'
import {useNavigate} from 'react-router-dom'

function About() {

    const navigate = useNavigate();

    function clickHandler() {
        navigate('/contact');
    }
    function backHandler() {
        navigate(-1);
    }
    // function forwardHandler() {
    //     \
    // }
  return (
    <div>
        About <br />
        <button onClick={clickHandler}>Contact Page</button>
        <button onClick={backHandler}>Back</button>
        {/* <button onClick={forwardHandler}>Forward</button> */}
    </div>
  )
}

export default About