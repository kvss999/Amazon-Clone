import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"
function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='footer_col1'>
            <h4>Get to Know Us</h4>
            <ul>
              <li><Link style={{color: 'white', textDecoration: 'none'}}   >About Us</Link></li>
              <li><Link style={{color: 'white', textDecoration: 'none'}}  to={{ pathname: "https://amazon.jobs/en/" }} target="_blank">Careers</Link></li>
              <li><Link style={{color: 'white', textDecoration: 'none'}} >Press Releases</Link></li>
              <li><Link style={{color: 'white', textDecoration: 'none'}} >Amazon Science</Link></li>
            </ul>

          </div>
          <div className='footer_col2'>
            <h4>Connect With Us</h4>
            <ul>
              <li><Link style={{color: 'white', textDecoration: 'none'}}  to={{ pathname: "https://www.facebook.com/AmazonIN" }} target="_blank">Facebook</Link></li>
              <li><Link  style={{color: 'white', textDecoration: 'none'}}  to={{ pathname: "https://twitter.com/i/flow/login?redirect_after_login=%2FAmazonIN" }} target="_blank">Twitter</Link></li>
              <li><Link style={{color: 'white', textDecoration: 'none'}}  to={{ pathname: "https://www.instagram.com/amazondotin/" }} target="_blank">Instagram</Link></li>
            </ul>

          </div>
          <div className='footer_col3'>
            <h4>Make Money With Us</h4>
            <ul>
              <li><Link style={{color: 'white', textDecoration: 'none'}} >Sell on Amazon</Link></li>
              <li><Link style={{color: 'white', textDecoration: 'none'}} >Sell under Amazon Accelerator</Link></li>
              <li><Link style={{color: 'white', textDecoration: 'none'}} >Amazon Global Selling</Link></li>
              <li><Link style={{color: 'white', textDecoration: 'none'}} >Advertise Your Products</Link></li>
              <li><Link style={{color: 'white', textDecoration: 'none'}} >Amazon Pay On Merchants</Link></li>
            </ul>

          </div>
          <div className='footer_col4'>
            <h4>Let Us Help You</h4>
            <ul>
              <li><Link style={{color: 'white', textDecoration: 'none'}} >Covid-19 and Amazon</Link></li>
              <li><Link style={{color: 'white', textDecoration: 'none'}} >Help</Link></li>
              <li><Link style={{color: 'white', textDecoration: 'none'}} >100% Purchase Protection</Link></li>
              
            </ul>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer