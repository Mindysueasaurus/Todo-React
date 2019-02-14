import React from 'react';


const Search = (props) => {
  return (
    <form>
      <input 
        className="search-input"
        type="text"
        name="search"
        onChange={props.search} 
        placeholder="Search" 
        value={props.inputSearch}  
      />
      <div className="search-container">
      <div className="empty-div"></div>
      <button className="search-button" onClick={props.search}>Search</button>
      </div>
    </form>
  )
}

export default Search;