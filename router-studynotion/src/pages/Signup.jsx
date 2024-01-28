import React from 'react'
import Template from '../components/Template'
import signupImg from '../assets/signup.png'

function Signup({setIsLoggedIn}) {
  return (
    <Template 
      tittle= "Join the millions learning to code with LearningHub for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup