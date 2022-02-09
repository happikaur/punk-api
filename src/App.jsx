import './App.css';
import Main from './containers/Main/Main';
// import NavBar from './containers/NavBar/NavBar';

import beers from './data/beers';
// import CardList from './components/CardList/CardList'
// import BeerCard  from './components/BeerCard/BeerCard';

function App() {

  const highABV = beers.filter(beer => beer.abv > 6);
  console.log(highABV);

  console.log(beers);
  return (
    <div className="App">
      {/* <img src={beers[0].image_url} alt="" /> */}
      <Main beersArr={beers}/>
    </div>
  );
}

export default App;
