import React, { Component } from 'react'
import Combo from '../assets/combo.png';
import Wings from '../assets/wings.png';
import Burger from '../assets/burger.png';
import Cluckets from '../assets/cluckets.png';
import Fries from '../assets/fries.png';
import Dips from '../assets/dips.png';
import Shakes from '../assets/shake.png';

export class menu_products extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch("https://script.googleusercontent.com/macros/echo?user_content_key=-E4cgA432coM5fTsCHzgC_W2oQyrnsJOpeQ8IMxj-lW1DenQD2gpnEZCj1BoszgUGvJyFYCcRHZnHlxERk0BNGOICAbj5ue0m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCBokSsbEd2bGgHH-G4UmBf7I8o_usmBNeuzJPBnP-iPuSP6ib9Vsw0UFlAd1obTFgHC79eqx9iFFalFu6j2D4pppBZtT1taqdz9Jw9Md8uu&lib=MYeGZ2EqRJanRkF5hpzmXrbNYkNWYqrUe")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.products
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
      
  render() {

    
let val = document.querySelectorAll('.category_column')

for (let index = 0; index < val.length; index++) {
  val[index].addEventListener('click', function(){

    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";



    let c = this.id
  var x, i;
  x = document.querySelectorAll(".product_column");
  // if (c == 2) c = "";
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove('show')
    x[i].classList.remove('show_spicy')
    x[i].classList.remove('hide_spicy')
  }


  let g = document.querySelectorAll('.getVal_'+c)
  
  for (let product_show = 0; product_show < g.length; product_show++) {
    
    g[product_show].classList.add('show')
  }


  })
  
}

// setTimeout(() => {

//   var elem = document.querySelector('input[type="range"]');

// var rangeValue = function(){
//   var newValue = elem.value;
//   console.log(newValue)
// }

// elem.addEventListener("input", rangeValue);


// }, 2000);




    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
        <div className='category_row'>
         
            <div className='category_column active' id="2">
              <div className='category_img'>
                <img src={Combo} />
              </div>
              

              <h6>Combo</h6>
         
              <div className='category_icon'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0001 2.6665C23.3467 2.6665 29.3334 8.63984 29.3334 15.9998C29.3334 23.3465 23.3467 29.3332 16.0001 29.3332C8.64008 29.3332 2.66675 23.3465 2.66675 15.9998C2.66675 8.63984 8.64008 2.6665 16.0001 2.6665ZM12.0801 13.3732C11.6934 12.9732 11.0534 12.9732 10.6667 13.3598C10.2667 13.7598 10.2667 14.3865 10.6667 14.7732L15.2934 19.4265C15.4801 19.6132 15.7334 19.7198 16.0001 19.7198C16.2667 19.7198 16.5201 19.6132 16.7067 19.4265L21.3334 14.7732C21.5334 14.5865 21.6267 14.3332 21.6267 14.0798C21.6267 13.8132 21.5334 13.5598 21.3334 13.3598C20.9334 12.9732 20.3067 12.9732 19.9201 13.3732L16.0001 17.3065L12.0801 13.3732Z" fill="#1D1D1B"/>
                </svg>
              </div>
            </div>
            <div className='category_column' id="1">
            <div className='category_img'>
              <img src={Wings} />
              </div>

              <h6>Wings</h6>
         
              <div className='category_icon'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0001 2.6665C23.3467 2.6665 29.3334 8.63984 29.3334 15.9998C29.3334 23.3465 23.3467 29.3332 16.0001 29.3332C8.64008 29.3332 2.66675 23.3465 2.66675 15.9998C2.66675 8.63984 8.64008 2.6665 16.0001 2.6665ZM12.0801 13.3732C11.6934 12.9732 11.0534 12.9732 10.6667 13.3598C10.2667 13.7598 10.2667 14.3865 10.6667 14.7732L15.2934 19.4265C15.4801 19.6132 15.7334 19.7198 16.0001 19.7198C16.2667 19.7198 16.5201 19.6132 16.7067 19.4265L21.3334 14.7732C21.5334 14.5865 21.6267 14.3332 21.6267 14.0798C21.6267 13.8132 21.5334 13.5598 21.3334 13.3598C20.9334 12.9732 20.3067 12.9732 19.9201 13.3732L16.0001 17.3065L12.0801 13.3732Z" fill="#1D1D1B"/>
                </svg>
              </div>
            </div>
            <div className='category_column' id="5">
            <div className='category_img'>
              <img src={Burger} />
              </div>

              <h6>Burger</h6>
         
              <div className='category_icon'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0001 2.6665C23.3467 2.6665 29.3334 8.63984 29.3334 15.9998C29.3334 23.3465 23.3467 29.3332 16.0001 29.3332C8.64008 29.3332 2.66675 23.3465 2.66675 15.9998C2.66675 8.63984 8.64008 2.6665 16.0001 2.6665ZM12.0801 13.3732C11.6934 12.9732 11.0534 12.9732 10.6667 13.3598C10.2667 13.7598 10.2667 14.3865 10.6667 14.7732L15.2934 19.4265C15.4801 19.6132 15.7334 19.7198 16.0001 19.7198C16.2667 19.7198 16.5201 19.6132 16.7067 19.4265L21.3334 14.7732C21.5334 14.5865 21.6267 14.3332 21.6267 14.0798C21.6267 13.8132 21.5334 13.5598 21.3334 13.3598C20.9334 12.9732 20.3067 12.9732 19.9201 13.3732L16.0001 17.3065L12.0801 13.3732Z" fill="#1D1D1B"/>
                </svg>
              </div>
            </div>
            <div className='category_column' id="8">
            <div className='category_img'>
              <img src={Cluckets} />
              </div>

              <h6>Cluckets</h6>
         
              <div className='category_icon'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0001 2.6665C23.3467 2.6665 29.3334 8.63984 29.3334 15.9998C29.3334 23.3465 23.3467 29.3332 16.0001 29.3332C8.64008 29.3332 2.66675 23.3465 2.66675 15.9998C2.66675 8.63984 8.64008 2.6665 16.0001 2.6665ZM12.0801 13.3732C11.6934 12.9732 11.0534 12.9732 10.6667 13.3598C10.2667 13.7598 10.2667 14.3865 10.6667 14.7732L15.2934 19.4265C15.4801 19.6132 15.7334 19.7198 16.0001 19.7198C16.2667 19.7198 16.5201 19.6132 16.7067 19.4265L21.3334 14.7732C21.5334 14.5865 21.6267 14.3332 21.6267 14.0798C21.6267 13.8132 21.5334 13.5598 21.3334 13.3598C20.9334 12.9732 20.3067 12.9732 19.9201 13.3732L16.0001 17.3065L12.0801 13.3732Z" fill="#1D1D1B"/>
                </svg>
              </div>
            </div>
            <div className='category_column' id="6">
            <div className='category_img'>
              <img src={Fries} />
              </div>

              <h6>Fries</h6>
         
              <div className='category_icon'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0001 2.6665C23.3467 2.6665 29.3334 8.63984 29.3334 15.9998C29.3334 23.3465 23.3467 29.3332 16.0001 29.3332C8.64008 29.3332 2.66675 23.3465 2.66675 15.9998C2.66675 8.63984 8.64008 2.6665 16.0001 2.6665ZM12.0801 13.3732C11.6934 12.9732 11.0534 12.9732 10.6667 13.3598C10.2667 13.7598 10.2667 14.3865 10.6667 14.7732L15.2934 19.4265C15.4801 19.6132 15.7334 19.7198 16.0001 19.7198C16.2667 19.7198 16.5201 19.6132 16.7067 19.4265L21.3334 14.7732C21.5334 14.5865 21.6267 14.3332 21.6267 14.0798C21.6267 13.8132 21.5334 13.5598 21.3334 13.3598C20.9334 12.9732 20.3067 12.9732 19.9201 13.3732L16.0001 17.3065L12.0801 13.3732Z" fill="#1D1D1B"/>
                </svg>
              </div>
            </div>
            <div className='category_column' id="4">
            <div className='category_img'>
              <img src={Dips} />
              </div>

              <h6>Dips</h6>
         
              <div className='category_icon'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0001 2.6665C23.3467 2.6665 29.3334 8.63984 29.3334 15.9998C29.3334 23.3465 23.3467 29.3332 16.0001 29.3332C8.64008 29.3332 2.66675 23.3465 2.66675 15.9998C2.66675 8.63984 8.64008 2.6665 16.0001 2.6665ZM12.0801 13.3732C11.6934 12.9732 11.0534 12.9732 10.6667 13.3598C10.2667 13.7598 10.2667 14.3865 10.6667 14.7732L15.2934 19.4265C15.4801 19.6132 15.7334 19.7198 16.0001 19.7198C16.2667 19.7198 16.5201 19.6132 16.7067 19.4265L21.3334 14.7732C21.5334 14.5865 21.6267 14.3332 21.6267 14.0798C21.6267 13.8132 21.5334 13.5598 21.3334 13.3598C20.9334 12.9732 20.3067 12.9732 19.9201 13.3732L16.0001 17.3065L12.0801 13.3732Z" fill="#1D1D1B"/>
                </svg>
              </div>
            </div>
            <div className='category_column' id="7"   >
            <div className='category_img'>
              <img src={Shakes} />
              </div>

              <h6>Shakes</h6>
         
              <div className='category_icon'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.0001 2.6665C23.3467 2.6665 29.3334 8.63984 29.3334 15.9998C29.3334 23.3465 23.3467 29.3332 16.0001 29.3332C8.64008 29.3332 2.66675 23.3465 2.66675 15.9998C2.66675 8.63984 8.64008 2.6665 16.0001 2.6665ZM12.0801 13.3732C11.6934 12.9732 11.0534 12.9732 10.6667 13.3598C10.2667 13.7598 10.2667 14.3865 10.6667 14.7732L15.2934 19.4265C15.4801 19.6132 15.7334 19.7198 16.0001 19.7198C16.2667 19.7198 16.5201 19.6132 16.7067 19.4265L21.3334 14.7732C21.5334 14.5865 21.6267 14.3332 21.6267 14.0798C21.6267 13.8132 21.5334 13.5598 21.3334 13.3598C20.9334 12.9732 20.3067 12.9732 19.9201 13.3732L16.0001 17.3065L12.0801 13.3732Z" fill="#1D1D1B"/>
                </svg>
              </div>
            </div>
         </div>


        <div className='products_row'>
          {items.map(item => (
            <div className={"product_column getVal_" + item.id + ((item.spicyLevel > 0) ? '  spicy_'+ item.spicyLevel : ' spicy_0') + ((item.id == 2) ? ' show ' : ' ') }  data-id={item.id} data-spicy={item.spicyLevel}>
              <div className='product_img'>
                <img src='https://placehold.jp/200x200.png' />
              </div>
              <div className='product_info'>
                <div className='product_content'>
                  <h6>{item.name}</h6>
                  <p>{item.description}</p>
                </div>
                <div className='product_price'>
                  <p>₹{item.price}</p>

                  <div className='product_btn'>
                    <a href='#'>
                      <svg width="53" height="30" viewBox="0 0 53 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="52.9843" height="30" rx="15" fill="#1D1D1B"/>
                        <path d="M18.3037 14.25C17.8895 14.25 17.5537 14.5858 17.5537 15C17.5537 15.4142 17.8895 15.75 18.3037 15.75L18.3037 14.25ZM36.1744 15.5303C36.4672 15.2374 36.4672 14.7626 36.1744 14.4697L31.4014 9.6967C31.1085 9.40381 30.6336 9.40381 30.3407 9.6967C30.0478 9.98959 30.0478 10.4645 30.3407 10.7574L34.5834 15L30.3407 19.2426C30.0478 19.5355 30.0478 20.0104 30.3407 20.3033C30.6336 20.5962 31.1085 20.5962 31.4014 20.3033L36.1744 15.5303ZM18.3037 15.75L35.644 15.75L35.644 14.25L18.3037 14.25L18.3037 15.75Z" fill="white"/>
                      </svg>
                    </a>
                  </div>

                </div>
                
              </div>

              
            </div>
          ))}
       
        </div>
      </>
      );
    }
  
  }
}

export default menu_products