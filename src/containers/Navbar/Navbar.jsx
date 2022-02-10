import React from 'react';
import './NavBar.scss';
import FilterItem from '../../components/FilterItem/FilterItem';

const NavBar = (props) => {
  const { filterItems } = props;

  const alcoholFilters = filterItems.map(filterObject => <FilterItem alcoholRange={filterObject.name} filteredAlcohol={filterObject.filteredAlcohol} />);

  return (
    <div className='navbar'>
      {alcoholFilters}
    </div>
  )
}

export default NavBar;

// Heading / name for the nav
// search bar in nav
// scrolling thingy for the abvs, acidity

