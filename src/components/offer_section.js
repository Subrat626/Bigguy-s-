import React from 'react'

function offer_section(props) {
  return (
    <section className='offer_section'>
        <div className='row'>
            <div className='col s12 m7'>
                <div className='offers_wrapper'>
                    <div className='row offerRow'>
                        <div className='col s6 m5'>
                            <div className='offer_img'>
                                <img src={props.OfferFood} />
                            </div>
                        </div>
                        <div className='col s6 m7'>
                            <div className='featuredHeading'>
                                <svg width="156" height="42" viewBox="0 0 156 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0H156V41.5134H0C26.7915 25.4545 27.1735 16.3707 0 0Z" fill="#FBBB18"/>
                                </svg>

                                <h4 className='featuredTitle'>Must Try</h4>

                            </div>

                            <div className='offer_content'>
                                <h2 className='offerProductTitle'>NASHVILLE HOT CHICKEN WINGS</h2>
                                <p className='offerProductDescription'>Experience Nashville’s culinary heat in this extra-crispy
                                fried chicken doused ina a fiery cayenne glaze.</p>

                                <div className='row d-flex alignCenter'>
                                    <div className='col s12 m4'>
                                        <div className='offerPrice'>
                                            <h5>₹309</h5>
                                            <span>only</span>
                                        </div>
                                    </div>
                                    <div className='col s12 m8'>
                                        <div className='offerBtn'>
                                            <a href='#' className='offer_btn'>BUY NOW
                                            <div className='btn_icon'>
                                                <svg width="76" height="50" viewBox="0 0 76 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g filter="url(#filter0_d_107_211)">
                                                    <rect x="14" y="6" width="55.6887" height="30" rx="15" fill="white"/>
                                                    <path d="M33 20C32.4477 20 32 20.4477 32 21C32 21.5523 32.4477 22 33 22L33 20ZM51.9325 21.7071C52.323 21.3166 52.323 20.6834 51.9325 20.2929L45.5685 13.9289C45.178 13.5384 44.5449 13.5384 44.1543 13.9289C43.7638 14.3195 43.7638 14.9526 44.1543 15.3431L49.8112 21L44.1543 26.6569C43.7638 27.0474 43.7638 27.6805 44.1543 28.0711C44.5448 28.4616 45.178 28.4616 45.5685 28.0711L51.9325 21.7071ZM33 22L51.2254 22L51.2254 20L33 20L33 22Z" fill="#1D1D1B"/>
                                                    </g>
                                                    <defs>
                                                    <filter id="filter0_d_107_211" x="0" y="0" width="75.6887" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                                    <feOffset dx="-4" dy="4"/>
                                                    <feGaussianBlur stdDeviation="5"/>
                                                    <feComposite in2="hardAlpha" operator="out"/>
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_107_211"/>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_107_211" result="shape"/>
                                                    </filter>
                                                    </defs>
                                                </svg>


                                            </div>
                                            </a>
                                        </div>

                                     </div>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                    
                </div>
            

            </div>
            <div className='col s6 m5 offer_mobile'>
                <div className='sub_offer'>
                    <div className='row subOfferWrapper'>
                        <div className='col s12 m4 changePosition'>
                            <div className='subOffer_img'>
                                <img src={props.subOfferFood} />
                            </div>
                            
                        </div>
                        <div className='col s12 m8'>
                            <div className='subOffer_content'>
                                <h2>Chicken Cluckets</h2>
                                <p>In house breaded chicken tenders, fried to perfection & seasoned desired seasoning. served with tarter dip.</p>
                                <a href='#'>
                                    <svg width="76" height="50" viewBox="0 0 76 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_107_211)">
                                        <rect x="14" y="6" width="55.6887" height="30" rx="15" fill="white"/>
                                        <path d="M33 20C32.4477 20 32 20.4477 32 21C32 21.5523 32.4477 22 33 22L33 20ZM51.9325 21.7071C52.323 21.3166 52.323 20.6834 51.9325 20.2929L45.5685 13.9289C45.178 13.5384 44.5449 13.5384 44.1543 13.9289C43.7638 14.3195 43.7638 14.9526 44.1543 15.3431L49.8112 21L44.1543 26.6569C43.7638 27.0474 43.7638 27.6805 44.1543 28.0711C44.5448 28.4616 45.178 28.4616 45.5685 28.0711L51.9325 21.7071ZM33 22L51.2254 22L51.2254 20L33 20L33 22Z" fill="#1D1D1B"/>
                                        </g>
                                        <defs>
                                        <filter id="filter0_d_107_211" x="0" y="0" width="75.6887" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dx="-4" dy="4"/>
                                        <feGaussianBlur stdDeviation="5"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_107_211"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_107_211" result="shape"/>
                                        </filter>
                                        </defs>
                                    </svg>


                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='sub_offer'>
                    <div className='row subOfferWrapper'>
                        <div className='col s12 m4 changePosition'>
                            <div className='subOffer_img'>
                                <img src={props.subOfferFood} />
                            </div>
                            
                        </div>
                        <div className='col s12 m8'>
                            <div className='subOffer_content'>
                                <h2>Chicken Cluckets</h2>
                                <p>In house breaded chicken tenders, fried to perfection & seasoned desired seasoning. served with tarter dip.</p>
                                <a href='#'>
                                    <svg width="76" height="50" viewBox="0 0 76 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d_107_211)">
                                        <rect x="14" y="6" width="55.6887" height="30" rx="15" fill="white"/>
                                        <path d="M33 20C32.4477 20 32 20.4477 32 21C32 21.5523 32.4477 22 33 22L33 20ZM51.9325 21.7071C52.323 21.3166 52.323 20.6834 51.9325 20.2929L45.5685 13.9289C45.178 13.5384 44.5449 13.5384 44.1543 13.9289C43.7638 14.3195 43.7638 14.9526 44.1543 15.3431L49.8112 21L44.1543 26.6569C43.7638 27.0474 43.7638 27.6805 44.1543 28.0711C44.5448 28.4616 45.178 28.4616 45.5685 28.0711L51.9325 21.7071ZM33 22L51.2254 22L51.2254 20L33 20L33 22Z" fill="#1D1D1B"/>
                                        </g>
                                        <defs>
                                        <filter id="filter0_d_107_211" x="0" y="0" width="75.6887" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dx="-4" dy="4"/>
                                        <feGaussianBlur stdDeviation="5"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_107_211"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_107_211" result="shape"/>
                                        </filter>
                                        </defs>
                                    </svg>


                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default offer_section