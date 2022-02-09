import './App.css';
import React, {useState} from 'react'
import Main from './containers/Main/Main';
import NavBar from './containers/NavBar/NavBar';

import BeersData from './data/beers';
// import CardList from './components/CardList/CardList'
// import BeerCard  from './components/BeerCard/BeerCard';

function App() {
  const [beers] = useState(BeersData);


  const highABV = () => beers.filter(beer => beer.abv > 6);
  console.log(highABV);
  
  const classicRange = () => beers.filter(beer => beer.abv >= 5 && beer.abv < 6);
  console.log(classicRange);

  const acidicPH = () => beers.filter(beer => beer.abv >= 4 && beer.abv < 5);
  console.log(acidicPH);

  console.log(beers);

  return (
    <div className="App">
      <NavBar filterItems={['High ABV', 'Classic Range', 'Acidic PH']}/>
      <Main beersArr={beers}/>      
    </div>
  );
}

export default App;
