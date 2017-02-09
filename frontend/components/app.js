import React from 'react';

const App = ({ children }) => (
  <div>
    <div className='title-container'>
      <img src='https://s3-us-west-1.amazonaws.com/rapidapigithub/freshbooks_logo.svg' className="title" />
      <img src='https://s3-us-west-2.amazonaws.com/lob-assets/LobLogoLightSmall.png' className="title" />
    </div>
    { children }
  </div>
);

export default App;
