import React from 'react'
import framImage from '../assets/frame.png'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

function Template({tittle, desc1, desc2, image, formtype, setIsLoggedIn}) {
  return (
    <div>
        <div>
            <h1>{tittle}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {/* form Type */}
            {formtype === "signup" ?
                (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>):
                (<LoginForm setIsLoggedIn={setIsLoggedIn}/>) 
            }
            {/* Decoration */}
            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>
                <p>Sign Up with Google</p>
            </button>
            
        </div>

        <div>
            {/* front image */}
            <img src={image} alt="front-img" width={558} height={504} loading='lazy'/>
            {/* bg image */}
            <img src={framImage} alt="bg-frame" width={558} height={504} loading='lazy'/>
        </div>

    </div>
  )
}

export default Template