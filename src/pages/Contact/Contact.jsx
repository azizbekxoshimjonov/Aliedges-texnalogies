import React from 'react'
import './Contact.scss'
import Contactheader from '../../components/Contact/Contactheader'
import Contacthero from '../../components/Contact/Contacthero'
import Servises from '../../components/Contact/Servises'

function Contact() {
  return (
    <div>
      <Contactheader/>
      <Contacthero/>
      <Servises/>
    </div>
  )
}

export default Contact
