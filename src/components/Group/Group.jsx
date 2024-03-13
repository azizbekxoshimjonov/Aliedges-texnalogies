import React from 'react'
import './Group.css'
import shap from './assets/img/shap.png'

function Group() {
  return (
    <div>
               <section className='group'>
          <div className="container">
          <div className='pic'>
            <img src={shap} alt="" />
          </div>
          <div className='meet'>
            <h1>Meet<span className='ssc'>Alliedge</span></h1>
            <div className='meet1'></div>
          </div>
          <div className='boks'>
            <div className='boks1'>
              <h1>Alliedge Tech</h1>
              <h4> <a href="#">visit site</a></h4>
              <h2>Software Based Company </h2>
              <h3>Powered by Alliedge</h3>
            </div>
            <div className='boks1'>
              <h1>Vision Softronics</h1>
              <h4> <a href="#">visit site</a></h4>
              <h2>Hardware Based Company </h2>
              <h3>Powered by Alliedge</h3>
            </div>
          </div>
          </div>
          </section>
      
    </div>
  )
}

export default Group
