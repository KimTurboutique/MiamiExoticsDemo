import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>
            Check out our fleet!
        </h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
            <CardItem 
            src='images/IMG_blueurus.png'
            text="Drive in the finest italian engineering
            $1000/ day"
            label='Lamborghini'
            path='/catalog'
            />
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards