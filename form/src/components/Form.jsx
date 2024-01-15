import React from 'react'
import {useState, useEffect} from 'react'

function Form() {

  const [form, setForm] = useState({
    firstName: '', lastName: '', email:'',
  })

  console.log(form.email)
  function formUpdate(event) {
    setForm(prev => {
      return{
        ...prev, 
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    
      <form>
          <label htmlFor="firstName">First Name</label> <br></br>
          <input type="text" 
          name="firstName" 
          placeholder="Enter name" 
          id="firstName"
          value={form.firstName} 
          onChange={formUpdate}
          />
<br></br>
          <label htmlFor="firstName">Last Name</label> <br></br>
          <input type="text" 
          name="lastName" 
          placeholder="Enter name" 
          id="lastName"
          value={form.lastName} 
          onChange={formUpdate}
          />
<br></br>
          <label htmlFor="lastName">Email</label> <br></br>
          <input type="email" 
          name="email" 
          placeholder="Enter email" 
          id="email" 
          value={form.email}
          onChange={formUpdate}
          />


      </form>


    
  )
}

export default Form