import React from 'react';
import './FiltersList.scss';

const FiltersList = (props) => {
  const { filterElements } = props;
  
  return (
    <div className='filters-list'>{filterElements}</div>
  )
}

export default FiltersList