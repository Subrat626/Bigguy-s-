import React from 'react'
import HeroSection from './hero_section'
import OfferSection from './offer_section'
import Homepage_aboutUs from './homepage_aboutUs'
import Wing_Thing from './wing_thing'
import BeYourOwnBoss from './be_you_own_boss'
import banner from '../assets/banner.png';
import OfferFood from '../assets/offer_food.png';
import subOfferFood from '../assets/subOffer.png';


function homepage() {
  return (
    <>
        <HeroSection banner={banner} />
        <OfferSection OfferFood = {OfferFood} subOfferFood = {subOfferFood} />
        
        <Wing_Thing />
        <Homepage_aboutUs />
        <BeYourOwnBoss />
    </>
  )
}

export default homepage