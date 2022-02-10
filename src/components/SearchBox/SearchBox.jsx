import React from 'react'

const SearchBox = (props) => {
  const { searchFilter } = props;

  return (
    <div>
      <input type="search" onKeyUp={searchFilter}/>
    </div>
  )
}

export default SearchBox;