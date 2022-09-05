import React from 'react'

const footer = (props) => {
    return (
      <div className='footer_container'>
      <div className='page-width-footer'>
              <div className='container1'>
                  <img src={props.f_logo} />
                  <p>All rights are reserved</p>
              </div>
              <div className='container2'>
                  <div >
  
              <b><i class="fa-brands fa-facebook-f"></i></b>
             <b> <i class="fa-brands fa-instagram"></i></b> 
              </div>
              <p>
              Contact Details : <b> 
              +91 9876543210
              </b>
              </p>
              </div>
  
          </div>
      </div>
    )
  }

  export default footer