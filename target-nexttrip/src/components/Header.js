import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      //this header contains the Metro Transit image and image banner
      <div className='headerContainer'>
          <div id='metroImgContainer'>
            <img src='https://www.metrotransit.org/images/mob_logo.png' className='metroImg' alt='metroTransitLogo' />
          </div>
          <div id='metroImgBannerContainer'>
            <img src='https://www.metrotransit.org/images/mob_banner.png' className='metroImgBanner' alt='metroTransitBanner' />
          </div>
        </div>
    )
  }
}

export default Header;
