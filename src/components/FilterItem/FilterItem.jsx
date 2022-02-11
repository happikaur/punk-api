import React from 'react'

const FilterItem = (props) => {
  const { alcoholRange, filteredAlcohol } = props;

  return (
    <div>
      <p>
        {alcoholRange} 
        <input type='checkbox' onChange={filteredAlcohol}/>
      </p>
      
    </div>
  )
}

export default FilterItem