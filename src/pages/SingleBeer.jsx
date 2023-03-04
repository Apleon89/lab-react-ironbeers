import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import Nav from "../components/Nav";

function SingleBeer() {
  const params = useParams();
  const { beerId } = params;

  const [beerDetails, setBeerDetails] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId} `
        );
        setBeerDetails(response.data);
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
          <img src={beerDetails.image_url} alt="beer img" />
        </div>
        <div>
          <div className="beerDetailsName">
            <h3>{beerDetails.name}</h3>
            <p>{beerDetails.attenuation_level}</p>
          </div>
          <div className="beerDetailsTagline">
            <p>{beerDetails.tagline}</p>
            <span>{beerDetails.first_brewed}</span>
          </div>
          <p>{beerDetails.description}</p>
          <p className="contributorName">{beerDetails.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleBeer;
