import React from 'react'
import './Abaut.css'
import melek from './assets/img/melek.png'
import vescode from './assets/img/vescode.png'

function Abaut() {
  return (
    <div>
           <section className='abaut__use'>
          <div className="container">
          <div className='meet'>
            <h1>Abaut  <span className='us__abaut'>Us  </span></h1>
            <div className='meet1'></div>
          </div>
          <div className='wee'>
            <img src={melek}alt="" />
            <div>
              <h1>Who We Are</h1>
              <p>We are believers in change! A change is driven by technology and
                innovation. We help individuals, start-ups, businesses, and
                enterprises adapt and adopt digital transformation. We aim to
                change people's lives and improve businesses with our progressive,
                value-adding, innovative technology solutions.</p>
            </div>
          </div>
          <div className='wee2'>
            <h1>Who We Are</h1>
            <p>We are believers in change! A change is driven by technology and
              innovation. We help individuals, start-ups, businesses, and
              enterprises adapt and adopt digital transformation. We aim to
              change people's lives and improve businesses with our progressive,
              value-adding, innovative technology solutions.</p>
            <div>
              <img src={vescode} alt="" />
            </div>
          </div>
          </div>
          </section>
      
    </div>
  )
}

export default Abaut
