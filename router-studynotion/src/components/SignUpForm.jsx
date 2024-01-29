import React from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'

function SignUpForm({setIsLoggedIn}) {
    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        firstName: '', 
        lastName: '', 
        email: '', 
        password: '', 
        confirmPassword: ''
    })
    const [showPassword1, setShowPassword1] = React.useState(false);
    const [showPassword2, setShowPassword2] = React.useState(false);

    const [accountType, setAccountType] = React.useState("student");

    function changeHandler(event) {
        setFormData((prevData) =>({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    function submitHandler(event) {
        event.preventDefault()
        if (formData.password != formData.confirmPassword) {
            toast.error('Password must be same!')
        }else{
            setIsLoggedIn(true);
            navigate('/dashboard');
            toast.success('Account Created!')
        }
        
    }

  return (
    <div >
        {/* Student / Instructor Tab */}
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max transition-all duration-200 ease-in-out'>
            <button className={`${accountType === 'student' ?
                "bg-richblack-900 text-richblack-5 " :
                "bg-transparent text-richblack-200 "} 
                py-2 px-5 rounded-full transition-all duration-200 `}
            onClick= { ()=> setAccountType("student")}>
                Student
            </button>

            <button className={`${accountType === 'instructor' ?
                "bg-richblack-900 text-richblack-5 " :
                "bg-transparent text-richblack-200 "} 
                py-2 px-5 rounded-full transition-all duration-200 `}
            onClick= { ()=> setAccountType("instructor")}>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6 ml-1'>
            {/* firstName lastName */}
            <div className='flex gap-x-4'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        First Name <sup className='text-pink-200'>
                            *</sup></p>
                    <input 
                        type="text"
                        required
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={changeHandler }
                        className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]'/>
                </label>
            
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Last Name <sup className='text-pink-200'>
                            *</sup></p>
                    <input 
                        type="text"
                        required
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={changeHandler }
                        className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]'/>
                </label>
            </div>

             {/* email */}
             <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Email Address <sup className='text-pink-200'>
                        *</sup></p>
                <input 
                    type="email"
                    required
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={changeHandler }
                    className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]'/>
            </label>

            {/* create Pass and confirm Pass */}
            <div className='flex gap-x-4'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password <sup className='text-pink-200'>
                        *</sup></p>
                    <input 
                        required
                        type={showPassword1 ? ("text") : ("password")} 
                        placeholder='Enter password' 
                        name='password' 
                        value={formData.password} 
                        onChange={changeHandler}
                        className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]'/>

                        <span className='absolute right-3 top-[38px] cursor-pointer '
                        onClick={() => setShowPassword1(!showPassword1)}>
                            {showPassword1 ? (<AiOutlineEye fontSize={24} fill='#AFB2bf'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2bf'/>)}
                        </span>
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-pink-200'>
                        *</sup></p>
                    <input 
                        required
                        type={showPassword2 ? ("text") : ("password")} 
                        placeholder='Confirm password' 
                        name='confirmPassword' 
                        value={formData.confirmPassword} 
                        onChange={changeHandler}
                        className='w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]'/>

                        <span className='absolute right-3 top-[38px] cursor-pointer '
                        onClick={() => setShowPassword2(!showPassword2)}>
                            {showPassword2 ? (<AiOutlineEye fontSize={24} fill='#AFB2bf'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2bf'/>)}
                        </span>
                </label>
            </div>

            <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                Create Account</button>
            
        </form>
    </div>
  )
}

export default SignUpForm