import React from 'react';
import './BeerCard.scss';



const BeerCard = (props) => {
  const { name, image, description } = props;

  return (
    <div className='beer'>
      <img className='beer__size' src={image} alt="" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}

export default BeerCard