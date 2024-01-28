import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import {toast} from 'react-hot-toast'

function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-evenly'>

      <Link to='/'>
      {/* #BF40BF */}
        <img src={logo} alt="Logo" width={160} height={32} loading='lazy' className='bg-slate-700'/>
      </Link>

      <nav>
        <ul className="flex gap-3">
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
      <div className='flex ml-5 gap-3 '>
        {/* If you are Logged In */}
        { !isLoggedIn &&
          <Link to="/login"> 
            <button onClick={()=>{
              setIsLoggedIn(true);
              // toast.success("Login Successfully!");
            }}>Login</button>
          </Link>
        }

        { !isLoggedIn &&
          <Link to="/signup"> 
            <button > Sign Up</button>
          </Link>
        }

        { isLoggedIn &&
          <Link to="/"> 
            <button onClick={()=>{
              setIsLoggedIn(false);
              toast.success("LogOut Successfully!");
            }}>Log Out</button>
          </Link>
        }

        { isLoggedIn &&
          <Link to="/dashboard">  
            <button>Dashboard</button>
          </Link>
        }

      </div>

    </div>
  )
}

export default Navbar