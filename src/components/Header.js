import React from 'react';
import MarvelLogo from '../assets/marvelcomicslogo.png';

const Header = () => {
  return (
    <div className='pop-art sixteen wide column'>
    <h1 className="center aligned ui icon header">
      <img style={{height: '8em', width: '8em'}} src={MarvelLogo} />
    </h1>
    </div>
  )
}

export default Header;