import axios from "axios";
import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import Nav from "../components/Nav";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers/random"
        );
        setRandomBeer(response.data);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  if (isFetching) {
    return (
      <div>
        <Nav />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "50px",
          }}
        >
          <PropagateLoader />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <div className="beerDetails">
        <div className="imgDetails">
          <img src={randomBeer.image_url} alt="beer img" />
        </div>
        <div>
          <div className="beerDetailsName">
            <h3>{randomBeer.name}</h3>
            <p>{randomBeer.attenuation_level}</p>
          </div>
          <div className="beerDetailsTagline">
            <p>{randomBeer.tagline}</p>
            <span>{randomBeer.first_brewed}</span>
          </div>
          <p>{randomBeer.description}</p>
          <p className="contributorName">{randomBeer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default RandomBeer;
