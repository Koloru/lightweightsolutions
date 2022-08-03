//npm imports
import WebFont from "webfontloader";

// react library imports
import { useEffect, useState } from "react";

// Component Imports
import Main from "./components/Main";
import Trending from "./components/Trending";
import ThrowbackAnime from "./components/ThrowbackAnime";

import aot from './assets/aot.png';
import jujutsu from './assets/jujutsu.png';
import onepiece from './assets/onepiece.png';

// styles
import "./App.sass";

function App() {
	// state
	const [series, setSeries] = useState([{
    "name": "Attack on Titan",
    "img": aot,
    "category": "Adventure fiction, Comedy, Family",
    "episodes": [
      {
        "number": 1,
        "img": "",
        "synopsis": "The citizens worry they will be at the Titans' mercy after many years of peace."
      },
      {
        "number": 2,
        "img": "",
        "synopsis": "The Shiganshina citizens are under attack from the Titans."
      },
      {
        "number": 3,
        "img": "",
        "synopsis": "Eren butt heads with Jean Kirschtein, a cadet who wants to be in the Military Police Regiment. Berholt and Reiner help Eren learn during training."
      }
    ],
    "synopsis": "When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the human…",
    
  },
  {
    "name": "Jujutsu Kaisen",
    "category": "Adventure fiction,  Martial Arts",
    "img": jujutsu,
    "episodes": [],
    "synopsis": "Yuji Itadori, a kind-hearted teenager, joins his school's Occult Club for fun, but discovers that its members are actual sorcerers who can manipulate the energy between beings for their own use. He hears about a cursed talisman - the finger of Sukuna, a demon - and its being targeted by other cursed beings.",
    
  },
  {
    "name": "One Piece",
    "img": onepiece,
    "category": "Adventure fiction, Dark fantasy, Martial Arts",
    "episodes": [],
    "synopsis": "One Piece is the story of Monkey D. Luffy, a young man who has a single dream: To find the legendary treasure known as the One Piece and become the King of the Pirates. Alongside a crew of trusted friends, Luffy sails the dangerous seas of the Grand Line to find Laugh Tale, the hidden island containing the One Piece.",
    
  }]);

	// import google font
	useEffect(() => {
		WebFont.load({
			google: {
				families: ["Outfit", "sans-serif"],
			},
		});
	}, []);

	return (
		<div className='App container'>
			<Main />
			<Trending series={series} />
      <ThrowbackAnime />
		</div>
	);
}

export default App;

// Todo
// 2 different card components vertical/ horizontal




    
  