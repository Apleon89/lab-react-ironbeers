
function BeerDetails(props) {

    const { image_url, name, attenuation_level, tagline, first_brewed, description, contributed_by } = props.beer

  return (
    <>
        <div className="beerDetails">
        <div className="imgDetails">
          <img src={image_url} alt="beer img" />
        </div>
        <div>
          <div className="beerDetailsName">
            <h3>{name}</h3>
            <p>{attenuation_level}</p>
          </div>
          <div className="beerDetailsTagline">
            <p>{tagline}</p>
            <span>{first_brewed}</span>
          </div>
          <p>{description}</p>
          <p className="contributorName">{contributed_by}</p>
        </div>
      </div>
    </>
  )
}

export default BeerDetails