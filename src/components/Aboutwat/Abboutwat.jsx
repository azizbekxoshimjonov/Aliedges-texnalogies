import React from 'react'
import './Abboutwat.scss'
import code from './assets/img/code.png'
import Group from './assets/img/Group.png'
import phone from './assets/img/phone.png'
import carirer from './assets/img/carirer.png'
function Abboutwat() {
  return (
    <div>
      
        <div className="container">
            <div>
                <img src={code} alt="" />
            </div>
            <h1 className='wat__title'>WHAT CAN WE DO FOR YOU</h1>
                <p className='wat__des'>we develop softwares that helps millions of professionals</p>
                <div className="web">
                    <div className="container">
                <div className='wat__group1'> 
                    <img src={Group} alt="" />
                    <h1>Web Development</h1>
                    <p>We specialize in providing top-notch web
                        development services to help businesses 
                        establish a strong online presence and
                        reach their target audience effectively.</p>
                </div>
                <div className='wat__group2'> 
                    <img src={phone} alt="" />
                    <h1>Mobile Development</h1>
                    <p>We specialize in providing top-notch web
                        development services to help businesses 
                        establish a strong online presence and
                        reach their target audience effectively.</p>
                </div>
                <div className='wat__group3'> 
                    <img src={carirer} alt="" />
                    <h1>Software Devlopmet</h1>
                    <p>We specialize in providing top-notch web
                        development services to help businesses 
                        establish a strong online presence and
                        reach their target audience effectively.</p>
                </div>
                <div className="right">
                <div className='wat__group4'> 
                    <img src={Group} alt="" />
                    <h1>E-commerce Development</h1>
                    <p>We specialize in providing top-notch web
                        development services to help businesses 
                        establish a strong online presence and
                        reach their target audience effectively.</p>
                </div>
                <div className='wat__group5'> 
                    <img src={Group} alt="" />
                    <h1>Artificial Intelligent</h1>
                    <p>We specialize in providing top-notch web
                        development services to help businesses 
                        establish a strong online presence and
                        reach their target audience effectively.</p>
                </div>
                <div className='wat__group6'> 
                    <img src={Group} alt="" />
                    <h1>Cloud Computing</h1>
                    <p>We specialize in providing top-notch web
                        development services to help businesses 
                        establish a strong online presence and
                        reach their target audience effectively.</p>
                </div>
                </div>
                </div>
                </div>
                 <section className='Letsup'>
          <div className="container">
          <div className='letsup__about'>
            <h1>Let us plan your dream <br />
              project together.</h1>
            <input type="text" placeholder='Name' name="" id="" />
            <input type="text" placeholder='Eamil' name="" id="" />
            <input type="text" placeholder='Mobile No' name="" id="" />
            <input type="text" placeholder='Select Services' name="" id="" />
            <input className='input1' type="text" placeholder='Project Discription' />
            <button className='btn1'>Submit</button>
          </div>
        </div>
        </section>

        </div>
    </div>
  )
}

export default Abboutwat
