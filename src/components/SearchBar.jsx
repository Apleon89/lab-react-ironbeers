import { useState } from "react";

function SearchBar(props) {

  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value)
          props.setBeersToSearch(event.target.value)
        }}
      />
    </div>
  );
}

export default SearchBar;
