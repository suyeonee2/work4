import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import '../routes/Contact.css'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>


      <div className='contact_container'>
        <form>
          <label>Your name</label>
          <input type="text" placeholder='Enter your name'/>
          <label>Your Email</label>
          <input type="text" placeholder='Enter your Email'/>
          <label>Message</label>
          <textarea className='hi' cols='50' rows='7'/>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact