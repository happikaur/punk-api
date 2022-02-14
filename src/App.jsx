import './App.css';
import React, {useState} from 'react'
import Main from './containers/Main/Main';
import NavBar from './containers/NavBar/NavBar';
import BeersData from './data/beers';

// useEffect(() => {
//   fetch("https://api.punkapi.com/v2/beers?per_page=30")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       setData(data);
//     });
// }, []);


function App() {
  const [beers, setBeers] = useState(BeersData);
  const [filteredBeers, setFilteredBeers] = useState(BeersData);


  const highABV = (event) => {
    if (event.target.checked){
      const filteredHigh = beers.filter(beer => beer.abv > 6);
      setFilteredBeers(filteredHigh); 
    }else {
      setFilteredBeers(BeersData);
    }
  }

  const classicRange = (event) => {
    if (event.target.checked){
      const filteredClassic = beers.filter(beer => beer.first_brewed.split("/")[1] <= 2010); 
      setFilteredBeers(filteredClassic);
    }else {
      setFilteredBeers(BeersData);
    }
  }

  const acidicPH = (event) => {
      if (event.target.checked){
      const filteredAcidic = beers.filter(beer => beer.ph < 4);
      setFilteredBeers(filteredAcidic);
    }else {
      setFilteredBeers(BeersData);
    }
  }

  const searchFilter = (event) => {
    console.log(event.target.value)
    
    if (event.target.value) {
      const searchName = beers.filter(beer => beer.name.toLowerCase().includes(event.target.value.toLowerCase()));
      setFilteredBeers(searchName);

    }else {
      setFilteredBeers(BeersData);
    }
  }

  // const filteredBeerList = data.filter((beer) => {
  //   if (userInput) {
  //     return beer.name.toLowerCase().includes(userInput);
  //   }
  //   if (!abv && !ph && !range) {
  //     return data;
  //   }
  //   if (abv) {
  //     return beer.abv > 6;
  //   }
  //   if (ph) {
  //     return beer.ph < 4;
  //   }
  //   if (range) {
  //     return beer.first_brewed.split("/")[1] >= 2010;
  //   }
  // });


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
