import React from 'react';
import './NavBar.scss';
import FilterItem from '../../components/FilterItem/FilterItem';
import SearchBox from '../../components/SearchBox/SearchBox';

const NavBar = (props) => {
  const { filterItems, searchFilter } = props;

  const alcoholFilters = filterItems.map(filterObject => <FilterItem alcoholRange={filterObject.name} filteredAlcohol={filterObject.filteredAlcohol} />);

  return (
    <div className='navbar'>
      <h1>Best Beers</h1>
      <SearchBox searchFilter={searchFilter}/>
      {alcoholFilters}
    </div>
  )
}

export default NavBar;

// Heading / name for the nav
// search bar in nav
// scrolling thingy for the abvs, acidity

