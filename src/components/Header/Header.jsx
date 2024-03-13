import React from 'react';
import './Header.css';
import logo from './assets/img/logo.svg'






function Header() {
  return (
    <div className='App'>
      <div className='hed'>

     
     
        <section className='header__hero'>
        <header>
          <div className="container">
            <nav className='Nav'>
              <a href="#">
                <img src={logo} alt="" />
              
            
              
                <h1 className='Ali'>Alliedge <br />
                  <span>Technologies</span>
                </h1>
              </a>
              <ul className='Nav__list'>
                <li className='Nav__item'><a href="#">Home</a> </li>
                <li className='Nav__item'><a href="#">Services</a></li>
                <li className='Nav__item'><a href="#">Technology</a></li>
                <li className='Nav__item'><a href="#">Group Compnies</a></li>
                <li className='Nav__item'><a href="#">About Us</a></li>
              </ul>
            </nav>
          </div>
              <h1 className='Title'>Expand your<br /> coverage with  <span> Alliedge.</span></h1>
              <p className='des'>Customer satisfaction is at the heart of everything we do.We are committed to  providing exceptional IT services <br />
                that exceed your expectations and help you  achieve your business goals.</p>
              <button className='btn1'>Lets connect</button>
        </header>
        </section>
        </div>
    </div>

  )
}

export default Header
