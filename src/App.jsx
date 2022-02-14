import './App.css';
import React, { useEffect, useState } from 'react'
import Main from './containers/Main/Main';
import NavBar from './containers/NavBar/NavBar';

function App() {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);

  useEffect(()=>{
    fetch('https://api.punkapi.com/v2/beers?page=2&per_page=80')
    .then(response => response.json())
    .then(data => setBeers(data))
  },[])

  useEffect(() => {
    setFilteredBeers(beers)
  },[beers])

  const highABV = (event) => {
    if (event.target.checked){
      const filteredHigh = beers.filter(beer => beer.abv > 6);
      setFilteredBeers(filteredHigh); 
    }else {
      setFilteredBeers(beers);
    }
  }

  const classicRange = (event) => {
    if (event.target.checked){
      const filteredClassic = beers.filter(beer => beer.first_brewed.split("/")[1] <= 2010); 
      setFilteredBeers(filteredClassic);
    }else {
      setFilteredBeers(beers);
    }
  }

  const acidicPH = (event) => {
      if (event.target.checked){
      const filteredAcidic = beers.filter(beer => beer.ph < 4);
      setFilteredBeers(filteredAcidic);
    }else {
      setFilteredBeers(beers);
    }
  }

  const searchFilter = (event) => {
    console.log("sear", event.target.value)

    if (event.target.value) {
      console.log("hellppp");
      const searchName = beers.filter(beer => beer.name.toLowerCase().includes(event.target.value.toLowerCase()));
      setFilteredBeers(searchName);
      console.log(searchName)

    }else {
      console.log(beers)
      setFilteredBeers(beers);
    }
  }

  return (
    <div className="App">
      <NavBar searchFilter={(event) => searchFilter(event)} filterItems={[
        {name:'High ABV (>6.0%)', filteredAlcohol:(event) => highABV(event)},
        {name:'Classic Range', filteredAlcohol:(event) => classicRange(event) },
        {name:'Acidic (ph < 4)', filteredAlcohol:(event) => acidicPH(event)}
        ]}/>
      <Main beersArr={filteredBeers}/>
    </div>
  );
}

export default App;
