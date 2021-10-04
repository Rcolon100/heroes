import React from 'react';
import CharacterItem from './CharacterItem';
import LoadingScreen from './LoadingScreen';

const CharacterTable = ({items, isLoading}) => {
  return isLoading ? <LoadingScreen/> :
  <div className='ui center aligned ui four relaxed column grid pop-art'>
    <div className='five column row'>
    {
      items.map(item => (
        <CharacterItem key={item.id}
          item={item}
        >
        </CharacterItem>
      ))
    }
    </div>
  </div>
}

export default CharacterTable;