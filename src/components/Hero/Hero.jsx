import React from 'react';
import './Hero.scss';
import pitichka from './assets/img/pitichka.png'
import clock from './assets/img/clock.png'
import hero from './assets/img/hero.png'
import dengi from './assets/img/dengi.png'






function Hero() {
  return (
    <div className='App'>
              <section className='hero'>
        <div className="container">
          <h1 className='hero__title'>Our <span>Expertise</span></h1>
          <div className='boxs'>
            <div className='our1'>
              <img src={pitichka} alt="" />
              
              <h1>Quality Assurance</h1>
              <p>Our commitment to <br />
                quality enables us to <br />
                deliver software solution <br />
                that are only functional, <br />
                but also user-friendly, <br />
                reliable, secure, provides <br />
                expectational customer <br />
                satisfaction</p>
            </div>
            <div className='our'>
              <img src={clock} alt="" />
              <h1>On time delivery</h1>
              <p>Our commitment to <br />
                quality enables us to <br />
                deliver software solution <br />
                that are only functional, <br />
                but also user-friendly, <br />
                reliable, secure, provides <br />
                expectational customer <br />
                satisfaction</p>
            </div>
            <div className='our3'>
              <img src={hero} alt="" />
              <h1>Advanced technical skilled team</h1>
              <p>Our commitment to <br />
                quality enables us to <br />
                deliver software solution <br />
                that are only functional, <br />
                but also user-friendly, <br />
                reliable, secure, provides <br />
                expectational customer <br />
                satisfaction</p>
            </div>
            <div className='our4'>
              <img src={dengi} alt="" />
              <h1>Budget friendly</h1>
              <p>Our commitment to <br />
                quality enables us to <br />
                deliver software solution <br />
                that are only functional, <br />
                but also user-friendly, <br />
                reliable, secure, provides <br />
                expectational customer <br />
                satisfaction</p>
            </div>
          </div> 
          </div>
          </section>
      
    </div>
  )
}

export default Hero
