import './App.css';
import React, {useState} from 'react'
import Main from './containers/Main/Main';
import NavBar from './containers/NavBar/NavBar';

import BeersData from './data/beers';
// import CardList from './components/CardList/CardList'
// import BeerCard  from './components/BeerCard/BeerCard';

function App() {
  const [beers, setBeers] = useState(BeersData);


  const highABV = () => {
    const filteredHigh = beers.filter(beer => beer.abv > 6);
    setBeers(filteredHigh);
  }

  
  const classicRange = () => {
    const filteredClassic = beers.filter(beer => beer.abv >= 5 && beer.abv < 6); 
    setBeers(filteredClassic);
  }

  const acidicPH = () => {
    const filteredAcidic = beers.filter(beer => beer.ph < 4);
    setBeers(filteredAcidic);
  }

  return (
    <div className="App">
      <NavBar filterItems={[
        {name:'High ABV (>6.0%)', filteredAlcohol:() => highABV()},
        {name:'Classic Range', filteredAlcohol:() => classicRange() },
        {name:'Acidic (ph < 4)', filteredAlcohol:() => acidicPH()}
        ]}/>
      <Main beersArr={beers}/>      
    </div>
  );
}

export default App;
