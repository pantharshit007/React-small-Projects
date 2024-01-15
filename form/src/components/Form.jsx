import React from 'react'
import {useState, useEffect} from 'react'

function Form() {

  const [form, setForm] = useState({
    firstName: '', lastName: '', email:'', country:"", streetAddress: '', cityName:"", state:"", postalCode: '', checkbox:false, checkbox2:false, radio:'',
  })

  // console.log(form.radio) 
  function formUpdate(event) {
    const {name, value, type, checked} = event.target
    setForm(prev => {
      return{
        ...prev, 
        [name]: type === "checkbox" ? checked : value  
      }
    })
  }

  function submitHandler(event) {
    event.preventDefault()
    console.log("All data has been submitted")
    console.log(form)
  }

  return (
    
    <div className="container">
      <form onSubmit={submitHandler}>
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
<br></br>
          <label htmlFor="country">Country</label> <br></br>
          <select 
          name="country" 
          id="country" 
          onChange={formUpdate}
          value={form.country}>

            <option value="india">India</option>
            <option value="US">US</option>
            <option value="Russian">Russia</option>
          </select>
<br></br>
          <label htmlFor="streetAddress">Street Address</label> <br></br>
          <input type="text"
          name='streetAddress' 
          id='streetAddress' 
          value={form.streetAddress}
          onChange={formUpdate}
          />
<br></br>
          <label htmlFor="cityName">City Name</label> <br></br>
          <input type="text" 
          name="cityName" 
          id="cityName" 
          value={form.cityName}
          onChange={formUpdate}
          />
<br></br>
          <label htmlFor="state">State</label> <br></br>
          <input type="text" 
          name="state" 
          id="state"  
          value={form.state}
          onChange={formUpdate}
          />
<br></br>
          <label htmlFor="ZIP">ZIP/PostalCode</label> <br></br>
          <input type="number" 
          name="ZIP" 
          id="ZIP" 
          value={form.postalCode}
          onChange={formUpdate}
          />
<br></br>
          <label >Inform By Email</label> <br />
          
          <label htmlFor="checkbox">Comments</label> <br></br>
          <input type="checkbox" 
          name="checkbox" 
          id="checkbox" 
          // value={form.checkbox}
          checked={form.checkbox}
          onChange={formUpdate}
          />
          <br />
          <label htmlFor="checkbox2">Candidates</label> <br></br>
          <input type="checkbox" 
          name="checkbox2" 
          id="checkbox2" 
          // value={form.checkbox}
          checked={form.checkbox2}
          onChange={formUpdate}
          />
<br />    
          <label >Radio Button</label> <br />

          <input type="radio" name="radio" id="sukuna" value="sukuna" onChange={formUpdate}
          checked={form.radio === "sukuna"}/>
          <label htmlFor="sukuna">Sukuna</label>
          <br />
          <input type="radio" name="radio" id="madara" value="madara" onChange={formUpdate}
          checked={form.radio === "madara"}/>
          <label htmlFor="madara">Madara</label>

          <br ></br>
          <button >Submit</button>


      </form>
    </div>
      


    
  )
}

export default Form