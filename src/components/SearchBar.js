import React, { useState } from 'react';


const SearchBar = ({search}) => {
    const[text, setText] = useState('');

    const onSearch = (query) => {
      setText(query)
      search(query)
    }

    return(
      <div className='sixteen wide column pop-art'>
        <form className='ui form container'>
          <div className='field'>
            <input
              type='text'
              placeholder='Find some heroes'
              autoFocus
              onChange={(event) => onSearch(event.target.value)}
              value={text}
            />
          </div>
        </form>
      </div>
    )
  }

export default SearchBar;