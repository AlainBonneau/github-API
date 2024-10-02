import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      onSearch(inputValue);
    }
  };

  return (
    <div className="SearchBar">
      <div className="ui fluid action input">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleSubmit}
          placeholder="Rechercher sur github..."
        />
        <div onClick={() => onSearch(inputValue)} className="ui button">
          Rechercher
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
