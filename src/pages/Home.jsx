import { Link } from "react-router-dom"
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'
import '../App.css'

function Home() {
  return (
    <div style={{
        paddingTop: '50px'
    }}>

        <div className="div-links">
            <Link className='appLinks' to='/beers'>
                <img src={beers} alt="allBeersImg" />
                <h2>All Beers</h2>
                <p>Check all beers!</p>
            </Link>
        </div>
        <div className="div-links">
            <Link className='appLinks' to='/random-beer'>
                <img src={randomBeer} alt="randomBeerImg" />
                <h2>Get Random Beer</h2>
                <p>Find a random beer and surprise yourself!</p>
            </Link>
        </div>
        <div className="div-links">
            <Link className='appLinks' to='/new-beer'>
                <img src={newBeer} alt="newBeerImg" />
                <h2>Add New Beer</h2>
                <p>Add a new beer and surprise everyone!</p>
            </Link> 
        </div>

    </div>
  )
}

export default Home