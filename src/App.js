//npm imports
import WebFont from 'webfontloader';

// react library imports
import { useEffect } from 'react';

// Component Imports
import Main from './components/Main'

// styles
import './App.sass';

function App() {

  // import google font
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Outfit', 'sans-serif']
      }
    });
  }, []);

  return (
    <div className="App container">
      <Main />
    </div>
  );
}

export default App;


// Todo
// Json on every series for API fetching
// 2 different card components vertical/ horizontal
// install font awesome