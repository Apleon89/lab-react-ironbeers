import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { PropagateLoader } from "react-spinners";
import SearchBar from "../components/SearchBar";

function AllBeers() {
  const navigate = useNavigate();

  const [allBeers, setAllBeers] = useState(null);
  const [beersToSearch, setBeersToSearch] = useState('')
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {

        if ( beersToSearch ) {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${beersToSearch}`)
            setAllBeers(response.data)
            setIsFetching(false);
        } else {
            const response = await axios.get(
                "https://ih-beers-api2.herokuapp.com/beers"
              );
              setAllBeers(response.data);
              setIsFetching(false);
        }        
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    };
    getData();
  }, [beersToSearch]);



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

      <div className="searchBar">
        <SearchBar setBeersToSearch={setBeersToSearch}/>
      </div>

      <div className="allBeers-list">
        {allBeers.map((each) => {
          return (
            <Link to={`/beers/${each._id}`} key={each._id}>
              <div className="eachBeerList">
                <div>
                  <img src={each.image_url} alt={each.name} />
                </div>
                <div>
                  <h3>{each.name}</h3>
                  <h5>{each.tagline}</h5>
                  <p>
                    <span>Created by: </span>
                    {each.contributed_by}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default AllBeers;
