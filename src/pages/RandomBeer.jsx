import axios from "axios";
import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import BeerDetails from "../components/BeerDetails";
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
      <BeerDetails beer={randomBeer}/>
    </div>
  );
}

export default RandomBeer;
