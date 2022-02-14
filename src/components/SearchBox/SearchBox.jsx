import React from 'react';
import './SearchBox.scss';

const SearchBox = (props) => {
  const { searchFilter } = props;

  return (
    <div>
      <input className='search-box' type="search" onInput={searchFilter}/>
    </div>
  )
}

export default SearchBox;