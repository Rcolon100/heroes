import React from 'react';

const LoadingScreen = () => {

  return(
    // <div className="">
      <div style={{margin: '0', height: '100%', width: '100%'}} className="ui active dimmer">
        <div className="ui huge text loader">Loading Heroes</div>
      </div>
    // </div>
  )

}

export default LoadingScreen;