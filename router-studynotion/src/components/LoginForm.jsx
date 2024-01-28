import React from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link , useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'

function LoginForm({setIsLoggedIn}) {
    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        email:"", password:""
    })

    const [showPassword, setShowPassword] = React.useState(false);

    function changeHandler(event) {
        setFormData((prevData) =>({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    function submitHandler(event) {
        event.preventDefault()
        setIsLoggedIn(true);
        navigate('/dashboard');
        toast.success("Logged in!");
        
    }

  return (
    <form onSubmit={submitHandler}>
        <label htmlFor="email">
            <p>Email Address <sup>*</sup></p>
        </label>
        <input 
            required
            type="email" 
            id="email"
            name='email'
            placeholder='Enter email address' 
            value={formData.email} 
            onChange={changeHandler}/>

        <label >
            <p>Password <sup>*</sup></p>
        
        <input 
            required
            type={showPassword ? ("text") : ("password")} 
            placeholder='Enter password' 
            name='password' 
            value={formData.password} 
            onChange={changeHandler}/>

            <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
            </span>

            <Link to="#">
                <p>Forgot Password</p>
            </Link>
        </label>

        <button>Sign In</button>

    </form>
  )
}

export default LoginForm