import React from 'react'
import Box from '@mui/material/Box'; 
import Slider from '@mui/material/Slider'; 
import $ from 'jquery';

function spicy_meter() {

    const marks = [ 
        { 
          value: 0, 
          label: 'Hickory Smoked', 
        }, 
        { 
          value: 20, 
          label: 'Cajun', 
        }, 
        { 
          value: 40, 
          label: 'Nashville Hot', 
        }, 
        { 
          value: 60, 
          label: 'Peri Peri', 
        }, 
        { 
          value: 80, 
          label: 'Fiery Sichuan', 
        }, 
        { 
          value: 100, 
          label: 'Automic', 
        } 
      ]; 

      function valuetext(value) {
        
        // setTimeout(function(){

          showVal(value)

        // }, 2000)
        
        

        return `${value}°C`; 
      } 


    


      function showVal(p){

        console.log(p)

        let show_spicy_pro = document.querySelectorAll('.show')

        for (let a = 0; a < show_spicy_pro.length; a++) {
          show_spicy_pro[a].classList.remove('show_spicy')
          show_spicy_pro[a].classList.add('hide_spicy')
          
        }

       
        // $('.spicy_'+p).is(":visible"){
        //   console.log('first = ' )
        // }
      
        
        // let all = document.querySelectorAll( + ' .show')
  
        // console.log("first =", all)
  
        // for (let all_show = 0; all_show < all.length; all_show++) {
          
          // all[all_show].classList.add('show_spicy')
        // }
        
        
      }


  return (
    <div className='spicy_meter'> 
      <div className='meter_text'> 
        <h3>Choose your spicy level</h3> 
        <p>Drag & Drop</p> 
      </div> 
<div> 
<Box sx={{ width: 300 }}> 
      <Slider 
        aria-label="Custom marks" 
        defaultValue={20} 
        getAriaValueText={valuetext} 
        step={20} 
        valueLabelDisplay="auto" 
        marks={marks} 
      /> 
    </Box> 
</div> 
    </div> 
  )
}

export default spicy_meter