import React from 'react';
import './Header.scss';
import logo from './assets/img/logo.svg'
import { Link } from 'react-router-dom';






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
                <li className='Nav__item'>
                 <Link to='/'>Home</Link>
                   </li>
                <li className='Nav__item'>
                <Link to='/about'>About</Link> 
                  </li>
                <li className='Nav__item'>
                <Link to='/contact'>Contact</Link>
                  
                   </li>
                <li className='Nav__item'>
                  <a href="#">Services</a>
                  
                  </li>
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
