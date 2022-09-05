import React from 'react'
import {
    Link
  } from "react-router-dom";



function navigation(props) {


    

    function changeActiveLinks(){
        let menuLinks = document.querySelectorAll('.menu_links')

        for(let i =0; i<menuLinks.length; i++){
            menuLinks[i].addEventListener('click', function(){
                menuLinks.forEach(element => {
                    element.classList.remove('active_menuLink')
                });
                
                menuLinks[i].classList.add('active_menuLink')   
                console.log('first')

            })
        }
    }

    


  return (
    
       <>
            <nav>
                <div className="nav-wrapper row">
                    <div className='col s4'>
                        <Link to="/">
                            <a className="brand-logo">
                                <img className='hide_mobile' src={ props.logo } />
                                <img className='hide_desktop' src={ props.mLogo } />
                            </a>
                        </Link>
                    </div>
                
                <ul id="nav-mobile" className=" hide-on-med-and-down col s4">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/menu">MENU</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    
                 
                </ul>

                <div className='hide-on-med-and-down col s4'>
                <Link to="/franchise">Own A Franchise</Link>
                    
                </div>
                </div>
            </nav>


            <div className='mobile_menu'>
                <div className='menu_list' onClick={changeActiveLinks}>
                    <div className='menu_links active_menuLink'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.13472 18.7733V15.7156C7.13472 14.9351 7.77211 14.3023 8.55837 14.3023H11.4325C11.8101 14.3023 12.1722 14.4512 12.4392 14.7163C12.7062 14.9813 12.8562 15.3408 12.8562 15.7156V18.7733C12.8538 19.0979 12.982 19.4099 13.2123 19.6402C13.4426 19.8705 13.756 20 14.0829 20H16.0438C16.9596 20.0024 17.8387 19.6429 18.4871 19.0008C19.1355 18.3588 19.4999 17.487 19.4999 16.5778V7.86687C19.4999 7.13247 19.172 6.43585 18.6046 5.96468L11.934 0.675877C10.7736 -0.251431 9.11105 -0.22149 7.98533 0.746987L1.46695 5.96468C0.87268 6.42196 0.517491 7.12064 0.499939 7.86687V16.5689C0.499939 18.4639 2.04732 20 3.95611 20L5.87223 20C6.55117 20 7.10294 19.4562 7.10786 18.7822L7.13472 18.7733Z" fill="#1D1D1B"/>
                        </svg>
                        <p><Link to="/">Home</Link></p>
                    </div>
                    
                </div>
                <div className='menu_list'>
                    <div className='menu_links' onClick={changeActiveLinks}>
                        <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="3.09677" rx="1.54839" fill="#1D1D1B"/>
                            <rect y="6.19355" width="24" height="3.09677" rx="1.54839" fill="#1D1D1B"/>
                            <rect y="12.3867" width="24" height="3.09677" rx="1.54839" fill="#1D1D1B"/>
                            <path d="M6.67219 10.8867C6.28729 11.5534 5.32504 11.5534 4.94014 10.8867L3.65507 8.66091C3.27017 7.99425 3.7513 7.16091 4.5211 7.16091L7.09124 7.16091C7.86104 7.16091 8.34216 7.99425 7.95726 8.66091L6.67219 10.8867Z" fill="#1D1D1B"/>
                        </svg>

                        <p><Link to="/menu">Menu</Link></p>
                    </div>
                </div>
                <div className='menu_list'>
                    <div className='menu_links' onClick={changeActiveLinks}>
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.9 0H11.07C13.78 0 15.97 1.07 16 3.79V18.97C16 19.14 15.96 19.31 15.88 19.46C15.75 19.7 15.53 19.88 15.26 19.96C15 20.04 14.71 20 14.47 19.86L7.99 16.62L1.5 19.86C1.351 19.939 1.18 19.99 1.01 19.99C0.45 19.99 0 19.53 0 18.97V3.79C0 1.07 2.2 0 4.9 0ZM4.22 7.62H11.75C12.18 7.62 12.53 7.269 12.53 6.83C12.53 6.39 12.18 6.04 11.75 6.04H4.22C3.79 6.04 3.44 6.39 3.44 6.83C3.44 7.269 3.79 7.62 4.22 7.62Z" fill="#02714C"/>
                        </svg>

                        <p><Link to="/franchise">Franchise</Link></p>
                    </div>
                </div>
                <div className='menu_list'>
                    <div className='menu_links' onClick={changeActiveLinks}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.13472 18.7733V15.7156C7.13472 14.9351 7.77211 14.3023 8.55837 14.3023H11.4325C11.8101 14.3023 12.1722 14.4512 12.4392 14.7163C12.7062 14.9813 12.8562 15.3408 12.8562 15.7156V18.7733C12.8538 19.0979 12.982 19.4099 13.2123 19.6402C13.4426 19.8705 13.756 20 14.0829 20H16.0438C16.9596 20.0024 17.8387 19.6429 18.4871 19.0008C19.1355 18.3588 19.4999 17.487 19.4999 16.5778V7.86687C19.4999 7.13247 19.172 6.43585 18.6046 5.96468L11.934 0.675877C10.7736 -0.251431 9.11105 -0.22149 7.98533 0.746987L1.46695 5.96468C0.87268 6.42196 0.517491 7.12064 0.499939 7.86687V16.5689C0.499939 18.4639 2.04732 20 3.95611 20L5.87223 20C6.55117 20 7.10294 19.4562 7.10786 18.7822L7.13472 18.7733Z" fill="#1D1D1B"/>
                        </svg>
                        <p><Link to="/">HOME</Link></p>
                    </div>
                </div>
            </div>

        </>
         
      
  )
}

export default navigation