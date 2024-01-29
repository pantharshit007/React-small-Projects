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
    <form onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6 ml-1'>
        <label htmlFor="email" className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address <sup className='text-pink-200'>*</sup></p>
        </label>
        <input 
            required
            type="email" 
            id="email"
            name='email'
            placeholder='Enter email address' 
            value={formData.email} 
            onChange={changeHandler}
            className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] -mt-4 '/>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password <sup className='text-pink-200'>*</sup></p>
        
        <input 
            required
            type={showPassword ? ("text") : ("password")} 
            placeholder='Enter password' 
            name='password' 
            value={formData.password} 
            onChange={changeHandler}
            className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]' />

            <span className='absolute right-3 top-[38px] cursor-pointer '
            onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? 
                (<AiOutlineEye fontSize={24} fill='#AFB2bf'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2bf'/>)}
            </span>

            <Link to="#">
                <p className='text-[0.8rem] mt-1 text-violet-500 max-w-max ml-auto'>
                    Forgot Password</p>
            </Link>
        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Sign In</button>

    </form>
  )
}

export default LoginForm