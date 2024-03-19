import React from 'react'
import './Aboutheader.scss'
import logo from './assets/img/logo.svg'
import { Link } from 'react-router-dom';

function Aboutheader() {
  return (
    <div className='aboutheader'>
        <div className='hed'>

     
     
<section className='header__about'>
<header className='about__header'>
  <div className="container">
    <nav className='Nav__about'>
      <a href="#">
        <img src={logo} alt="" />
      
    
      
        <h1 className='Ali'>Alliedge <br />
          <span>Technologies</span>
        </h1>
      </a>
      <ul className='Nav__about'>
        <li className='about__item'>
         <Link to='/'>Home</Link>
           </li>
        <li className='about__item'>
        <Link to='/about'>About</Link> 
          </li>
        <li className='about__item'>
        <Link to='/contact'>Contact</Link>
          
           </li>
        <li className='about__item'>
          <a href="#">Services</a>
          </li>
        <li className='about__item'><a href="#">Technology</a></li>
        <li className='about__item'><a href="#">Group Compnies</a></li>
        <li className='about__item'><a href="#">About Us</a></li>
      </ul>
    </nav>
  </div>
      
</header>
</section>
</div>
      
 
      
      
      
      

  
        </div>
  
  )
}

export default Aboutheader
