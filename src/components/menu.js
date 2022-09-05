import React from 'react'
import HeroSection from './hero_section'
import MenuProducts from './menu_products'
import SpicyMeter from './spicy_meter'
import './menu_page.css';
import banner from '../assets/banner.png';

function menu() {

   

  return (
    <>
        <HeroSection banner={banner} />
        <SpicyMeter />
        <MenuProducts />
    </>
  )
}

export default menu