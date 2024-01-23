import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>
            Check out these luxurious cars!
        </h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
            <CardItem 
            src='images/IMG_LAMB'
            text="Drive in the finest italian engineering"
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