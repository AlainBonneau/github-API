import React, { useState } from "react";
import "./SearchBar.scss";
import ErrorModal from "../ErrorModal/ErrorModal";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setisModalOpen] = useState(false);

  const closeModal = () => {
    setisModalOpen(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue.trim() === "") {
      setisModalOpen(true);
      return;
    }
    onSearch(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="SearchBar">
      <div className="ui fluid action input">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Rechercher sur github..."
        />
        <div onClick={handleSearch} className="ui button">
          Rechercher
        </div>
      </div>
      {/* Modal d'erreur */}
      {isModalOpen && <ErrorModal closeModal={closeModal} />}
    </div>
  );
};

export default SearchBar;
