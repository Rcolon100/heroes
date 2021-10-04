import React from 'react';

const CharacterItem = ({item}) => {
  return (
    <div style={{margin: '1rem'}} className='floating'>
      <div className='card' style={{background: '#333'}}>
        <div className='ui slide masked reveal image'>
          <div className='visible content'>
            <img className='ui bordered image' src={item.thumbnail.path + "/landscape_incredible.jpg"} alt='incredible landscape sized marvel hero images' />
          </div>
          <div className='hidden content'>
            <div>
              <h1 className='header' style={{marginTop: '1em', color: '#fff'}}>{item.name}</h1>
              <ul className='ui compact message'>
                {/* <li>
                  <strong className='header'>Name: </strong>{item.name}
                </li> */}
                <li>
                  <strong className='description'>Description: </strong>{item.description === '' ? 'N/A' : item.description}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem;