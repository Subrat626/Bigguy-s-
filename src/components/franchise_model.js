import React from 'react'
import model from '../assets/model.png';
import model1 from '../assets/model1.png';
import model2 from '../assets/model2.png';

function franchise_model() {
  return (
    <div className='franchise_model_container'>
        <div className='row'>
            <div className='model_heading'>
                <h4>BIGGUY’s WINGERY Franchise Model</h4>
                <h6>Total investment * INR 16-18 Lacs includes</h6>
            </div>
            <div className='col s6 model_spacing'>
                <div className='model_image'>
                    <img src={model} />
                </div>
            </div>
            <div className='col s6 model_spacing'>
                <div className='another_model1'>
                    <img src={model2} />
                </div>
                <div className='model_content design_change'>
                    <p>
                    - Interiors & furnitures
                    </p>
                    <p>
                    - Lighting, Display, Signboards, Visual Merchandising
                    </p>
                    <p>
                    - Kitchen equipment
                    </p>
                    <p>
                    - CCTV
                    </p>
                    <p>
                    - Point of sale machine, software
                    </p>
                    <p>
                    - Franchisee Fees (5lacs for 5 years)

                    </p>
                </div>
            </div>
        </div>

        <div className='row'>
            <div className='col s12 m7'>
                <div className='another_model'>
                    <img src={model1} />
                </div>
            </div>
            <div className='col s12 m5'>
                <div className='another_model1 design_change'>
                    <img src={model2} />
                </div>

                <div className='model_content'>
                    <p>
                    - Interiors & furnitures
                    </p>
                    <p>
                    - Lighting, Display, Signboards, Visual Merchandising
                    </p>
                    <p>
                    - Kitchen equipment
                    </p>
                    <p>
                    - CCTV
                    </p>
                    <p>
                    - Point of sale machine, software
                    </p>
                    <p>
                    - Franchisee Fees (5lacs for 5 years)

                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default franchise_model