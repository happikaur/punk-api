import React from 'react';
import './FilterItem.scss';


const FilterItem = (props) => {
  const { alcoholRange, filteredAlcohol } = props;

  return (
    <div>
      <p className='filter-by'>
        {alcoholRange} 
        <input className='filter-by__checkbox' type='checkbox' onChange={filteredAlcohol}/>
      </p>
      
    </div>
  )
}

export default FilterItem