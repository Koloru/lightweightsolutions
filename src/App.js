//npm imports
import WebFont from 'webfontloader';

import { useEffect } from 'react';

// styles
import './App.sass';

function App() {

  // import google font
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'sans-serif']
      }
    });
  }, []);

  return (
    <div className="App container">
      <p className='test'>Hello</p>
    </div>
  );
}

export default App;
