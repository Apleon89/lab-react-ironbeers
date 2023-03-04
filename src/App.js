
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllBeers from './pages/AllBeers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import Home from './pages/Home';
import SingleBeer from './pages/SingleBeer'

function App() {


  return (
    <div className="App">
      
      

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/beers' element={ <AllBeers /> } />
      <Route path='/beers/:beerId' element={ <SingleBeer/> }/>
      <Route path='/random-beer' element={ <RandomBeer /> }/>
      <Route path='/new-beer' element={ <NewBeer /> }/>
    </Routes>

    </div>
  );
}

export default App;
