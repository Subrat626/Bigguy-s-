import React from 'react'



function hero_section(props) {

    function filterFunction() {

        document.querySelector('.showonfocus').classList.toggle('openOptions')

        var input, filter, ul, li, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        let div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
          let txtValue = a[i].textContent || a[i].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
          } else {
            a[i].style.display = "none";
          }
        }
      }


  return (
    <div className='hero_section'>
        <div className='row m_responsive'>
            <div className='col s12 m8'>
                <div className='banner_container'>
                    <img src={props.banner} />
                </div>
            </div>
            <div className='col s12 m4'>

            <div class="dropdown">

                <div id="myDropdown" class="dropdownContent">
                    <div className='location_wrapper'>
                        <div className='location_icon'>
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.35" d="M7.14228 0.0584733C5.44423 0.217357 3.84264 0.920153 2.57608 2.06213C1.30952 3.20411 0.445282 4.72465 0.11226 6.39724C-0.200405 8.17674 0.145214 10.0092 1.08456 11.5523L1.61181 12.431C2.74812 14.3019 4.07097 16.0527 5.56053 17.6568L7.27113 19.5199C7.42883 19.7761 7.70835 19.932 8.00923 19.932C8.31013 19.932 8.58946 19.776 8.74733 19.5199L10.4579 17.6686C11.9449 16.0543 13.2678 14.296 14.4065 12.4197L14.8282 11.7167H14.8284C15.5969 10.5218 16.0039 9.13026 16 7.70955C15.9472 5.48048 14.9545 3.37775 13.2672 1.92032C11.5799 0.46295 9.3552 -0.213388 7.14205 0.0584733H7.14228ZM8.04438 10.6035C7.29217 10.5757 6.58128 10.2524 6.06603 9.70376C5.55073 9.15512 5.2726 8.42545 5.29203 7.67304C5.31125 6.92063 5.62666 6.20603 6.16943 5.68465C6.71234 5.16327 7.4389 4.8771 8.19156 4.8881C8.94418 4.89908 9.66209 5.20625 10.1895 5.7433C10.717 6.28034 11.0114 7.00358 11.0088 7.75639C10.9933 8.52709 10.6724 9.26007 10.1164 9.794C9.56051 10.3281 8.81512 10.6192 8.04443 10.6035H8.04438Z" fill="black"/>
                            </svg>
                        </div>
                    
                        <input type="text" placeholder="Search your location" id="myInput" onKeyUp={filterFunction} />
                        <div className='search_icon'>
                            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.7248 20.3924L20.7632 20.4302L20.8053 20.4639L23.8945 22.9385L23.9564 22.9881C24.0715 23.2001 24.0398 23.4716 23.8612 23.6507C23.6515 23.861 23.3163 23.8667 23.0998 23.6677L20.5635 20.783L20.5635 20.783L20.5581 20.7769L20.4884 20.6989C20.461 20.6587 20.4458 20.6105 20.4458 20.5605C20.4458 20.4962 20.4709 20.4352 20.5145 20.3901C20.574 20.3339 20.6662 20.3346 20.7248 20.3924ZM11.2595 1.90886C13.7315 1.90886 16.1029 2.8938 17.8519 4.64802C19.6009 6.40235 20.5841 8.7824 20.5841 11.2648C20.5841 16.4348 16.4064 20.6206 11.2595 20.6206C6.11271 20.6206 1.93499 16.4348 1.93499 11.2648C1.93499 6.09465 6.11271 1.90886 11.2595 1.90886Z" stroke="#3B9778" stroke-width="2.09605"/>
                            </svg>
                        </div>
                    </div>
                    <div class="showonfocus">
                        <a href="#about">About</a>
                        <a href="#base">Base</a>
                        <a href="#blog">Blog</a>
                        <a href="#contact">Contact</a>
                        <a href="#custom">Custom</a>
                        <a href="#support">Support</a>
                        <a href="#tools">Tools</a>
                    </div>
                </div>
            </div>


                <div className='featured_wrapper'>

                    <div className='featured_box'>

                        <div className='featured_icon'>
                            <svg width="77" height="125" viewBox="0 0 77 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H77V137C77 137 61 154 38.5 137C16 120 0 137 0 137V0Z" fill="#02714C"/>
                                <path d="M13.1617 28.5232H65.5951C65.8907 28.5601 66.0385 28.7079 66.0385 28.9666V33.955C66.0385 34.2506 65.8907 34.3984 65.5951 34.3984H45.8633V34.8418C48.6715 36.3568 50.8516 39.4607 52.4036 44.1534L52.6253 45.7608H65.5951C65.8907 45.7978 66.0385 45.9456 66.0385 46.2042V51.1926C66.0385 51.4882 65.8907 51.636 65.5951 51.636H53.1241C53.1241 57.2156 49.7062 62.6474 42.8702 67.9314C36.8103 71.4048 32.5055 73.1415 29.9559 73.1415C29.9559 73.2893 29.8081 73.3632 29.5125 73.3632L57.6691 109.834V110.277H46.9718C46.8609 110.277 35.9789 96.1619 14.3256 67.9314V67.7097H17.7066C29.6787 67.7097 36.8657 63.4049 39.2675 54.7953C39.4153 53.7607 39.4892 52.9293 39.4892 52.3011V51.636H13.1617C12.8661 51.636 12.7183 51.4882 12.7183 51.1926V46.2042C12.7552 45.9086 12.903 45.7608 13.1617 45.7608H39.2675C38.3807 42.3983 36.4962 39.6639 33.614 37.5577C29.6233 35.4515 25.9837 34.3984 22.695 34.3984H13.1617C12.8661 34.3984 12.7183 34.2506 12.7183 33.955V28.9666C12.7552 28.671 12.903 28.5232 13.1617 28.5232Z" fill="white"/>
                            </svg>
                        </div>

                        <div className='featured_content'>
                            <h2 className='featured_title'> BE YOUR OWN BOSS </h2>

                            <div className='featured_content_wrapper m_show'>
                        <p className='content'>publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    
                        <div className='featured_link'>
                            <p className='highlight_text'>*Invest only `10 to `15L</p>

                            <div className='featured_btn'>

                            <svg width="215" height="31" viewBox="0 0 215 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="159.005" width="55.192" height="30" rx="15" fill="#1D1D1B"/>
                                <path d="M178.072 14.25C177.657 14.25 177.322 14.5858 177.322 15C177.322 15.4142 177.657 15.75 178.072 15.75L178.072 14.25ZM196.665 15.5303C196.958 15.2374 196.958 14.7626 196.665 14.4697L191.892 9.6967C191.599 9.40381 191.124 9.40381 190.831 9.6967C190.538 9.98959 190.538 10.4645 190.831 10.7574L195.074 15L190.831 19.2426C190.538 19.5355 190.538 20.0104 190.831 20.3033C191.124 20.5962 191.599 20.5962 191.892 20.3033L196.665 15.5303ZM178.072 15.75L196.134 15.75L196.134 14.25L178.072 14.25L178.072 15.75Z" fill="white"/>
                            </svg>


                            </div>
                        </div>
                        
                    </div>
                        </div>

                    </div>
                    
                    <div className='col_divider'></div>

                    <div className='featured_content_wrapper d_hide'>
                        <p className='content'>publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                    
                        <div className='featured_link'>
                            <p className='highlight_text'>*Invest only `10 to `15L</p>

                            <div className='featured_btn'>

                            <svg width="215" height="31" viewBox="0 0 215 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="159.005" width="55.192" height="30" rx="15" fill="#1D1D1B"/>
                                <path d="M178.072 14.25C177.657 14.25 177.322 14.5858 177.322 15C177.322 15.4142 177.657 15.75 178.072 15.75L178.072 14.25ZM196.665 15.5303C196.958 15.2374 196.958 14.7626 196.665 14.4697L191.892 9.6967C191.599 9.40381 191.124 9.40381 190.831 9.6967C190.538 9.98959 190.538 10.4645 190.831 10.7574L195.074 15L190.831 19.2426C190.538 19.5355 190.538 20.0104 190.831 20.3033C191.124 20.5962 191.599 20.5962 191.892 20.3033L196.665 15.5303ZM178.072 15.75L196.134 15.75L196.134 14.25L178.072 14.25L178.072 15.75Z" fill="white"/>
                            </svg>


                            </div>
                        </div>
                        
                    </div>
                        
                    
                </div>

            </div>
        </div>
    </div>
  )
}

export default hero_section