import React from 'react';


const Search = (props) => {
  return (
    <form onSubmit={() => {}}>
      <input 
        className="search-input"
        type="text"
        name="search"
        onChange={props.changeHandler} 
        placeholder="Search" 
        value={props.newTodo}  
      />
      <div className="search-container">
      <div className="empty-div"></div>
      <button className="search-button" onClick={props.filterCompleted}>Search</button>
      </div>
    </form>
  )
}

export default Search;