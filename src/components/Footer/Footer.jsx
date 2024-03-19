import React from 'react'
import './Footer.scss'
import logo from './assets/img/logo.svg'
import saytlar from './assets/img/saytlar.png'
function Footer() {
  return (
    <div>
      <section className='footer'>
        <div className="container">
            <div className="foot">
            <div className='footer__log'>
                <img src={logo} alt="" />
                <h1>Alliedge <br /> Technologies</h1>
                  <img className='sats' src={saytlar}   alt="" />
            </div>
               <div className="company__sevis">
                <div className='box1'>
                    <h1>Company</h1> <br /><br />
                    <p>Home</p> <br /><br />
                    <p>Services</p> <br /><br />
                    <p>Technologies</p> <br /><br />
                    <p>About Us</p> <br /><br />
                    <p>Contact Us</p> <br /><br />
                </div>
                <div className="box2">
                <h1>Services</h1> <br /><br />
                    <p>Software Development</p> <br /><br />
                    <p>E-Commerce</p> <br /><br />
                    <p>Artificial Intelligence</p> <br /><br />
                    <p>Cloud Computing</p> <br /><br />
                </div>
                <div className="box3">
                <h1>Contact Us</h1> <br /><br />
                    <p>Navrangpura, Ahmedabad <br />Gujarat</p> <br /><br />
                    <p>Deep Paanchal</p> <br /><br />
                    <p>+91 9913204659</p> <br /><br />
                    <p>Gaurang Patel</p> <br /><br />
                    <p>+91 6355380254</p> <br /><br />
                    <p>alliedge.technology@gmail.com</p>
                </div>
               </div>
               </div>
               <p className='allright'>© Copyright 2023, alliedge. All Rights Reserved</p>

        </div>
      </section>
    </div>
  )
}

export default Footer
