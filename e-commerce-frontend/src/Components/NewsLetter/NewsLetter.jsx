import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Unlimited Offers with Stylo</h1>
      <p>Subscribe our newsletter and stay updated.</p>
      <div>
        <input type="email" placeholder='Enter Your Email' />
        <button>Subscribe Now</button>
      </div>
    </div>
  )
}

export default NewsLetter
