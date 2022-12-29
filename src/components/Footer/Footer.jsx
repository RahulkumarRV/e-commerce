import React from 'react'
import './Footer.scss'


function Footer() {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>

        </div>
        <div className="item">
        <h1>Links</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolpernatur? Magnam architecto at dicta beatae consequuntur excepturi amet ratione non perspiciatis ea!</span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus itaque molestias debitis voluptate accusantium saepe laboriosam ullam cupiditate cum atque..</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Rahulstore</span>
          <span className="copyright">
          © Copyright 2023. all Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer