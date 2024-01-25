import React from 'react';
import'../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
     <video src="/videos/IMG_2500.mov" autoPlay loop muted/>
     <h1>LUXURY <span style={{ color: 'red' }}> REDEFINED </span> </h1>
     <p>Step into the driver's seat of our top-notch exotic cars and indulge in a redefined luxury experience. Elevate your Miami getaway with the ultimate exotic car rental service in the city.</p>
     <Button
     className='btns'
     buttonStyle='btn--outline'
     buttonSize='btn--large'
     >
     RESERVE NOW   
    </Button>
    <Button
     className='btns'
     buttonStyle='btn--primary'
     buttonSize='btn--large'
     >
     WATCH TRAILER <i className='far fa-play-circle' />   
    </Button>    
    </div>
  )
}

export default HeroSection