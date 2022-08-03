//npm imports
import WebFont from 'webfontloader';

// react library imports
import { useEffect } from 'react';

// Component Imports
import Header from './components/header/Header'

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
      <Header />
    </div>
  );
}

export default App;
