import React from 'react'
import './Servises.scss'
import iconca from './assets/img/iconca.png'
import cemena from './assets/img/cemaena.png'
function Servises() {
  return (
    <div>
      <div className="container">
        <h1 className='our__title'>Our Services</h1>
        <div className="design">
            <div>
                <img src={iconca} alt="" />
            </div>
            <div>
                <h1 className='des__title'>Innovative Hardware Design Engineering</h1>
                <p className='des__des'>In the changing business scenarios product companies expected <br />
                     to provide increasing value to end-customers. Product demands       <br />
                    great reliability with best Embedded hardware design at lowest cost <br />
                    in the shortest timeline. Radixweb, with defined Embedded hardware <br />
                    development process and domain expertise, help companies achieve <br />
                    product development objectives successfully</p>
            </div>
        </div>
        <div className="design1">
        <div>
                <h1 className='des__title'>Embedded Hardware Development</h1>
                <p className='des__des'>Rendering a complete array of product designing and development An        <br />
                                        increase in design complexity involves overlapping discipline – demands <br />
                                        for the one-stop-shop in Hardware engineering. Offering complete array <br />
                                        of embedded hardware engineering services, product designing and <br />
                                        development.</p>
            </div>
            <div>
                <img src={cemena} alt="" />
            </div>
        </div>
        <div className="design2">
        <div>
                <img src={iconca} alt="" />
            </div>
            <div>
                <h1 className='des__title'>Innovative Hardware Design Engineering</h1>
                <p className='des__des'>In the changing business scenarios product companies expected <br />
                     to provide increasing value to end-customers. Product demands       <br />
                    great reliability with best Embedded hardware design at lowest cost <br />
                    in the shortest timeline. Radixweb, with defined Embedded hardware <br />
                    development process and domain expertise, help companies achieve <br />
                    product development objectives successfully</p>
            </div>
        </div>
        <div className="design3">
        <div>
        <h1 className='des__title'>Embedded Hardware Development</h1>
                <p className='des__des'>Rendering a complete array of product designing and development An        <br />
                                        increase in design complexity involves overlapping discipline – demands <br />
                                        for the one-stop-shop in Hardware engineering. Offering complete array <br />
                                        of embedded hardware engineering services, product designing and <br />
                                        development.</p>
            </div>
            <div>
                <img src={cemena} alt="" />
            </div>
        </div>
        <div className="design4">
        <div>
                <img src={iconca} alt="" />
            </div>
            <div>
                <h1 className='des__title'>Innovative Hardware Design Engineering</h1>
                <p className='des__des'>In the changing business scenarios product companies expected <br />
                     to provide increasing value to end-customers. Product demands       <br />
                    great reliability with best Embedded hardware design at lowest cost <br />
                    in the shortest timeline. Radixweb, with defined Embedded hardware <br />
                    development process and domain expertise, help companies achieve <br />
                    product development objectives successfully</p>
            </div>
        </div>
        
            
        
      </div>
    </div>
  )
}

export default Servises
