import React from 'react'
import {TextField,FormControl} from "@mui/material"

const contact_form = () => {
  return (
    <div className='form_container'> 
    <h1> APPY FOR A <br/><span>FRANCHISE</span> </h1> 

    <div className='form_inner_container'> 
      <p>Enter your details</p> 
      <hr className='line'/> 
   <FormControl > 
      <div className='grid_form'> 
      <TextField id="outlined-basic" label="First name" variant="outlined"   /> 
   <TextField id="outlined-basic" label="Last name" variant="outlined"  /> 
   <TextField id="outlined-basic" label="Contact No." variant="outlined"   /> 
   <TextField id="outlined-basic" label="Email Address" variant="outlined"  /> 
      </div> 
      <TextField id="outlined-basic" label="City preference" variant="outlined"  /> 
   <button type='submit' className='btn btn-primary'>Submit 
   <svg width="43" height="25" viewBox="0 0 53 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="52.9843" height="30" rx="15" fill="#1D1D1B"/>
                        <path d="M18.3037 14.25C17.8895 14.25 17.5537 14.5858 17.5537 15C17.5537 15.4142 17.8895 15.75 18.3037 15.75L18.3037 14.25ZM36.1744 15.5303C36.4672 15.2374 36.4672 14.7626 36.1744 14.4697L31.4014 9.6967C31.1085 9.40381 30.6336 9.40381 30.3407 9.6967C30.0478 9.98959 30.0478 10.4645 30.3407 10.7574L34.5834 15L30.3407 19.2426C30.0478 19.5355 30.0478 20.0104 30.3407 20.3033C30.6336 20.5962 31.1085 20.5962 31.4014 20.3033L36.1744 15.5303ZM18.3037 15.75L35.644 15.75L35.644 14.25L18.3037 14.25L18.3037 15.75Z" fill="white"/>
                      </svg>
   </button> 
   
   
   </FormControl> 

    </div> 

    </div>
  )
}

export default contact_form