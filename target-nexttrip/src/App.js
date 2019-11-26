import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <body>
        <form className='headerContainer'>
          <div className='headerContainer'>
            <div id='metroImgContainer'>
              <img src='https://www.metrotransit.org/images/mob_logo.png' className='metroImg' alt='metroTransitLogo' />
            </div>
            <div id='metroImgBannerContainer'>
              <img src='https://www.metrotransit.org/images/mob_banner.png' className='metroImgBanner' alt='metroTransitBanner' />
            </div>
          </div>
          <div className='inputSelectContainer'>
            <select className='inputSelect'>
              <option>
                'Test'
              </option>
              <option>
                'Test 2'
              </option>
              <option>
                'Test 3'
              </option>
              <option>
                'Test 4'
              </option>
            </select>            
          </div>
          <div className='inputSelectContainer'>
            <select className='inputSelect'>
              <option>
                'Test'
              </option>
              <option>
                'Test 2'
              </option>
              <option>
                'Test 3'
              </option>
              <option>
                'Test 4'
              </option>
            </select>
         </div>
         <div className='inputSelectContainer'>
            <select className='inputSelect'>
              <option>
                'Test'
              </option>
              <option>
                'Test 2'
              </option>
              <option>
                'Test 3'
              </option>
              <option>
                'Test 4'
              </option>
            </select>
          </div>
          <hr className='dividerLine' />
          <div className='inputStopNumberContainer'>
            <input className='inputStopNumber' type='text'>
            </input>
          </div>
          <div className='inputStopNumberContainer'>
            <input className='inputStopNumberBtn' type='submit' value='STOP NUMBER'>
            </input>
          </div>
        </form>
      </body>
    </div>
  );
}

export default App;
