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
    <div>
        {/* Student / Instructor Tab */}
        <div>
            <button>
                Student
            </button>

            <button>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
            {/* firstName lastName */}
            <div>
                <label >
                    <p>First Name <sup>*</sup></p>
                    <input 
                        type="text"
                        required
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={changeHandler }/>
                </label>

                <label >
                    <p>Last Name <sup>*</sup></p>
                    <input 
                        type="text"
                        required
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={changeHandler }/>
                </label>
            </div>

             {/* email */}
            <label >
                <p>Email Address <sup>*</sup></p>
                <input 
                    type="email"
                    required
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={changeHandler }/>
            </label>

            {/* create Pass and confirm Pass */}
            <div>
                <label >
                    <p>Create Password <sup>*</sup></p>
                    <input 
                        required
                        type={showPassword1 ? ("text") : ("password")} 
                        placeholder='Enter password' 
                        name='password' 
                        value={formData.password} 
                        onChange={changeHandler}/>

                        <span onClick={() => setShowPassword1(!showPassword1)}>
                            {showPassword1 ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
                        </span>
                </label>

                <label >
                    <p>Confirm Password <sup>*</sup></p>
                    <input 
                        required
                        type={showPassword2 ? ("text") : ("password")} 
                        placeholder='Confirm password' 
                        name='confirmPassword' 
                        value={formData.confirmPassword} 
                        onChange={changeHandler}/>

                        <span onClick={() => setShowPassword2(!showPassword2)}>
                            {showPassword2 ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
                        </span>
                </label>
            </div>

            <button>Create Account</button>
            
        </form>
    </div>
  )
}

export default SignUpForm