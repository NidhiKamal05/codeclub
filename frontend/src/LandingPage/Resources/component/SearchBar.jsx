import React from 'react'

const SearchBar = () => {
  return (
    <div className = "border border-gray-300 rounded-lg flex items-center p-3 w-full">
        <i className = "fa-solid fa-magnifying-glass "></i>
        <input type="text" placeholder = " Search a topic..."/>
    </div>
  )
}

export default SearchBar