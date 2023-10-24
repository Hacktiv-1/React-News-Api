import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {
  const [input, setInput] = useState("");

  let navigate = useNavigate();

  // take input value from search
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // navigate to the search page with the input value
  const handleSearch = () => {
    navigate(`/search/${input}`);
    setInput("");
  };
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search For..."
        value={input}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="w-full p-1 rounded-lg bg-slate-300 focus:bg-white"
      />
      <button className="absolute top-1 end-2" onClick={handleSearch}>
        <FontAwesomeIcon
          icon="fa-solid fa-magnifying-glass"
          color="black"
          size="xl"
        />
      </button>
    </div>
  );
}

export default Search;
