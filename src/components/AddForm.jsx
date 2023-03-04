import { useState } from "react";

function AddForm(props) {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const formDataToSend = (event) => {
    event.preventDefault();

    const newBeer = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };
    props.handleSubmitForm(newBeer);

    setName("");
    setTagline("");
    setDescription("");
    setFirstBrewed("");
    setBrewersTips("");
    setAttenuationLevel(0);
    setContributedBy("");
  };

  return (
    <div>
      <form className="addBeerForm">
        <div className="inputDiv">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="tagline">Tagline:</label>
          <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={(event) => setTagline(event.target.value)}
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="first_brewed">First brewed:</label>
          <input
            type="text"
            name="first_brewed"
            value={firstBrewed}
            onChange={(event) => setFirstBrewed(event.target.value)}
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="brewers_tips">Brewers tips:</label>
          <input
            type="text"
            name="brewers_tips"
            value={brewersTips}
            onChange={(event) => setBrewersTips(event.target.value)}
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="attenuation_level">Attenuation level:</label>
          <input
            type="number"
            name="attenuation_level"
            value={attenuationLevel}
            onChange={(event) => setAttenuationLevel(event.target.value)}
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="contributed_by">Contributed by:</label>
          <input
            type="text"
            name="contributed_by"
            value={contributedBy}
            onChange={(event) => setContributedBy(event.target.value)}
          />
        </div>
        <button onClick={formDataToSend}>Add Beer</button>
      </form>
    </div>
  );
}

export default AddForm;
