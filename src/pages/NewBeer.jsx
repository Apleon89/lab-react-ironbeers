import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddForm from "../components/AddForm";
import Nav from "../components/Nav";

function NewBeer() {
  const navigate = useNavigate();

  const handleSubmitForm = async (newBeer) => {
    try {
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
      navigate("/beers");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Nav />

      <AddForm handleSubmitForm={handleSubmitForm} />
    </div>
  );
}

export default NewBeer;
