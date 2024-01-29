import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import {toast} from 'react-hot-toast'

function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto '>

      <Link to='/'>
      {/* #BF40BF */}
        <img src={logo} alt="Logo" width={160} height={32} loading='lazy' className=''/>
      </Link>

      <nav>
        <ul className="text-richblack-100 flex gap-x-6">
          <li>
            <Link to="/"> Home</Link>
          </li>

          <li>
            <Link to="/"> About</Link>
          </li>

          <li>
          <Link to="/"> Contact</Link>
          </li>

        </ul>
      </nav>

      {/* button: Login-SignUp || LogOut-DashBoard */}
      <div className='flex items-center gap-x-4 '>
        {/* If you are Logged In */}
        { !isLoggedIn &&  
          <Link to="/login"> 
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700"
            >Log In</button>
          </Link>
        }

        { !isLoggedIn &&
          <Link to="/signup"> 
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700" 
            > Sign Up</button>
          </Link>
        }

        { isLoggedIn &&
          <Link to="/"> 
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700"
            onClick={()=>{
              setIsLoggedIn(false);
              toast.success("LogOut Successfully!");
            }}>Log Out</button>
          </Link>
        }

        { isLoggedIn &&
          <Link to="/dashboard">  
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700"
            >Dashboard</button>
          </Link>
        }

      </div>

    </div>
  )
}

export default Navbar