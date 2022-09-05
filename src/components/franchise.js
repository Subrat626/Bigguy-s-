import React from 'react'
import AboutFranchise from './about_franchise'
import AboutDescription from './about_description'
import FranchiseModel from './franchise_model'
import ContactForm from './contact_form'
import FranchiseModelOperated from './franchise_model_operated'


function franchise() {
  return (
    <>
      <AboutFranchise />
      <AboutDescription />
      <FranchiseModel />
      <FranchiseModelOperated />
      <ContactForm />
    </>
  )
}

export default franchise