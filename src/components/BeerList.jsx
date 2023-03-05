import { Link } from "react-router-dom";

function BeerList({ each }) {
  return (
    <>
      <Link to={`/beers/${each._id}`} >
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
    </>
  );
}

export default BeerList;
