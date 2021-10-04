import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CharacterTable from '../components/CharacterTable';

const App = () => {

  const[items, setItems] = useState([]);
  const[isLoading, setLoading] = useState(true);
  const[query, setQuery] = useState('');
  const HASH = process.env.REACT_APP_MARVEL_HASH;
  const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;

  //search bar 
  useEffect(() => {
    const fetch = async () => {
      if(query === ''){
        const result = await axios(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`)
        setItems(result.data.data.results);
        setLoading(false);
      } else {
        const result = await axios(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`)
        setItems(result.data.data.results);
        setLoading(false);
      }
    }
    fetch()
  },[query])

  //  const onTermSubmit = (term) => {
  //   console.log(term)
  //   marvel.get('/characters', {
  //     params: {
  //       name: term,
  //     }
  //   })
  // }

    return(
      <div className='ui center grid ui segment sixteen wide column pop-art'>
        <Header />
        <SearchBar
          // onFormSubmit={this.onTermSubmit}
          search={(query)=>setQuery(query)}
        />
        <div className='sixteen wide column pop-art'>
          <div className=''>
            <CharacterTable 
              items={items}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    )
}
export default App;