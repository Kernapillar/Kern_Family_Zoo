import { useState, useEffect} from 'react'
import {Routes, Route, Link, BrowserRouter } from "react-router-dom"
import './App.css'
import './styles/gallery.css'
import { GalleryColumn } from './components/galleryColumn';
import Gallery from './components/gallery'
import Modal from './components/modal';
import LOGO from './assets/MDKern-LOGO.png';
import About from './components/about';


import frog1 from './assets/GoE_pics/KS Frog x 14 11.jpg';
import bird1 from './assets/GoE_pics/KS Moustache 14 11.jpg'; 
import snake1 from './assets/GoE_pics/MDK_20070127_01772.jpg';
import snake2 from './assets/GoE_pics/MDK_NGK_Cryptelytrops venustus_.jpg';
import chameleon1 from './assets/GoE_pics/MDKern_20070210_00123from 2005 to 2006.jpg';
import spider1 from './assets/GoE_pics/MDKern_Poecilotheria metallica - Saphaire Ornamental Tree Spider_0546.jpg';
import spider2 from './assets/GoE_pics/MDKern_Poecilotheria rufilata, Slate Red Ornamental Tarantula_0560.jpg';
import spider3 from './assets/GoE_pics/MDKern_Thelcticopis modesta  - Malaysian Orange Huntsman_0777.jpg';
import bird2 from './assets/GoE_pics/Parc  30 24 Blue Angel jpg.jpg';
import snake3 from './assets/GoE_pics/parc atheris squam blue eyes.jpg';
import snake4 from './assets/GoE_pics/parc atheris squam red orange.jpg';
import bird3 from './assets/GoE_pics/parc fa la la.jpg';
import bird4 from './assets/GoE_pics/parc maile angel.jpg';
import lizard1 from './assets/GoE_pics/parc monkey tail skink.jpg';
import bird5 from './assets/GoE_pics/parc spock eating.jpg';
import bird6 from './assets/GoE_pics/parc vcp 14 11.jpg';
import snake5 from './assets/GoE_pics/parc_Boiga nigrocepes, Black Headed Cat Eye Snake_0136.jpg';
import lizard2 from './assets/GoE_pics/parc_Iguana iguana, albino_0410.jpg';
import spider4 from './assets/GoE_pics/parc_Megaphobema robustum, Columbian Giant Redleg Tarantula_0457-Edit.jpg';
import spider5 from './assets/GoE_pics/parc_Poecilotheria metallica - Saphaire Ornamental Tree Spider_0547.jpg';
import frog2 from './assets/GoE_pics/parc_Theloderma corticale, Vietnamese Mossy Frog_0782.jpg';
import frog3 from './assets/GoE_pics/parc_UKR_Anotheca spinosa, Spiny headed Treefrog_33.jpg';
import gecko1 from './assets/GoE_pics/parc_Uroplatus fimbriatus_0877.jpg';
import gecko2 from './assets/GoE_pics/parc_Uroplatus sikorae - Mossy leaf-tailed gecko_0921.jpg';
import snake6 from './assets/GoE_pics/parc_Usamba Bush Viper (Atheris cerataphora)_40.jpg';

    

function App() {

  const pics = [{id: 1, src: snake6, legs: 0, commonName: "Usamba Bush Viper", scientificName: "Atheris cerataphora"},
  {id: 2, src: frog1, legs: 4, commonName: "White Spotted Glass Frog", scientificName: "Cochranella albomaculata"},
  {id: 3, src: bird1, legs: 2, commonName: "Red-Breasted Parakeet", scientificName: "Psittacula alexandri"},
  {id: 4, src: snake1, legs: 0, commonName: "Variable Bush Viper", scientificName: "Atheris squamigera"}, 
  {id: 5, src: snake2,  legs: 0, commonName: "Beautiful Pit Viper", scientificName: "Cryptelytrops venustus"},
  {id: 6, src: chameleon1, legs: 4, commonName: "Johnstons Chameleon", scientificName: "Trioceros johnstoni"},
  {id: 7, src: spider1, legs: 8, commonName: "Sapphire Ornamental Tree Spider", scientificName: "Poecilotheria metallica"}, 
  {id: 8, src: spider2, legs: 8, commonName: "Slate Red Ornamental Tarantula", scientificName: "Poecilotheria rufilata"},
  {id: 9, src: spider3, legs: 8, commonName: "Malaysian Orange Huntsman", scientificName: "Thelcticopis modesta"},
  {id: 10, src: bird2, legs: 2, commonName: "Blue and Gold Macaw", scientificName: "Ara ararauna"}, 
  {id: 11, src: snake3, legs: 0, commonName: "Variable Bush Viper", scientificName: "Atheris squamigera"},
  {id: 12, src: snake4, legs: 0, commonName: "Variable Bush Viper", scientificName: "Atheris squamigera"},
  {id: 13, src: bird3, legs: 2, commonName: "African Grey Parrot", scientificName: "Psittacus erithacus"}, 
  {id: 14, src: bird4, legs: 2, commonName: "Harliquin Macaw", scientificName: "Ara Chloropterus x Ara Ararauna"},
  {id: 15, src: lizard1, legs: 4, commonName: "Monkey Tail Skink", scientificName: "Corucia zebrata"},
  {id: 16, src: bird5, legs: 2, commonName: "Vulturine Guineafowl", scientificName: "Acryllium vulturinum"}, 
  {id: 17, src: bird6, legs: 2, commonName: "Victoria Crowned Pigeon", scientificName: "Goura victoria"},
  {id: 18, src: snake5, legs: 0, commonName: "Black Headed Cat Eye Snake", scientificName: "Boiga nigrocepes"}, 
  {id: 19, src: lizard2, legs: 4, commonName: "Albino Iguana", scientificName: "Iguana Iguana"},
  {id: 20, src: spider4, legs: 8, commonName: "Columbian Giant Redleg Tarantula", scientificName: "Megaphobema robustum"},
  {id: 21, src: spider5, legs: 8, commonName: "Sapphire Ornamental Tree Spider", scientificName: "Poecilotheria metallica"}, 
  {id: 22, src: frog2, legs: 4, commonName: "Vietnamese Mossy Frog", scientificName: "Theloderma corticale"},
  {id: 23, src: frog3, legs: 4, commonName: "Spiny Headed Tree Frog", scientificName: "Anotheca spinosa"},
  {id: 24, src: gecko1, legs: 4, commonName: "Common Flatailed Gecko", scientificName: "Uroplatus fimbriatus"}, 
  {id: 25, src: gecko2, legs: 4, commonName: "Mossy Leaf-Tailed Gecko", scientificName: "Uroplatus sikorae"},
  
  ]

  const navButtons = () => {
    return (
      <ul>
        <li><Link to="/gallery">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    )
  };

  return (
    <BrowserRouter> 
      <img src={LOGO} alt="" className='logo' />
      {navButtons()}
      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/gallery" element={<Gallery pics={pics} modalState={false}/>}/>
        <Route path="/gallery/:pictureId"  element={<Gallery pics={pics} modalState={true}/>}/>

      </Routes>
    
    </BrowserRouter>
  )
}

export default App
