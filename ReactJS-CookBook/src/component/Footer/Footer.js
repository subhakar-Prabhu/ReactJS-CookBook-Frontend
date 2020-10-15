import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
  render(){
    return(
      <div className='footer'>
        <p className='copyright_label'>© 2020 Copyright: React Demo</p>
      </div>
    )
  }
}

export default Footer;