import React from 'react';
import './NavBar.scss';
import FilterItem from '../../components/FilterItem/FilterItem';

const NavBar = (props) => {
  const { filterItems } = props;

  const alcoholFilters = filterItems.map(filterName => <FilterItem alcoholRange={filterName}/>)

  return (
    <div className='navbar'>
      {alcoholFilters}
    </div>
  )
}

export default NavBar