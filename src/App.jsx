import './App.css';
import React, {useState} from 'react'
import Main from './containers/Main/Main';
import NavBar from './containers/NavBar/NavBar';

import BeersData from './data/beers';
// import CardList from './components/CardList/CardList'
// import BeerCard  from './components/BeerCard/BeerCard';


function App() {
  const [beers, setBeers] = useState(BeersData);


  const highABV = (event) => {
    if (event.target.checked){
      const filteredHigh = beers.filter(beer => beer.abv > 6);
      setBeers(filteredHigh); 
    }else {
      setBeers(BeersData);
    }
  }

  
  const classicRange = (event) => {
    if (event.target.checked){
    const filteredClassic = beers.filter(beer => beer.first_brewed >= 2010); 
    setBeers(filteredClassic);
    }else {
      setBeers(BeersData);
    }
  }

  const acidicPH = (event) => {
    if (event.target.checked){
    const filteredAcidic = beers.filter(beer => beer.ph < 4);
    setBeers(filteredAcidic);
    }else {
      setBeers(BeersData);
    }
  }

  const searchFilter = (event) => {
    console.log(event.target.value)
    if (event.target.value === "") {
      setBeers(BeersData);
    }else {
      const searchName = beers.filter(beer => beer.name.toLowerCase().indexOf(event.target.value) !== -1);
      setBeers(searchName);
    }
  }

  return (
    <div className="App">
      <NavBar searchFilter={(event) => searchFilter(event)} filterItems={[
        {name:'High ABV (>6.0%)', filteredAlcohol:(event) => highABV(event)},
        {name:'Classic Range', filteredAlcohol:(event) => classicRange(event) },
        {name:'Acidic (ph < 4)', filteredAlcohol:(event) => acidicPH(event)}
        ]}/>
      <Main beersArr={beers}/>      
    </div>
  );
}

export default App;
