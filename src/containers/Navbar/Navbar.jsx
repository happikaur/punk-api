import React from 'react';
import './NavBar.scss';
import FilterItem from '../../components/FilterItem/FilterItem';
import SearchBox from '../../components/SearchBox/SearchBox';
import FiltersList from '../../components/FiltersList/FiltersList';

const NavBar = (props) => {
  const { filterItems, searchFilter } = props;

  const alcoholFilters = filterItems.map(filterObject => <FilterItem alcoholRange={filterObject.name} filteredAlcohol={filterObject.filteredAlcohol} />);

  return (
    <div className='navbar'>
      <h1 className='navbar__title'>Best Brewdog's Beers</h1>
      <SearchBox searchFilter={searchFilter}/>
      <FiltersList filterElements={alcoholFilters} />
    </div>
  )
}

export default NavBar;

