import React from 'react'

const FilterItem = (props) => {
  const { alcoholRange } = props;

  return (
    <div>
      <p>
        {alcoholRange}
        <input type='checkbox' />
      </p>
      
    </div>
  )
}

export default FilterItem