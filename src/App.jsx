import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import githubLogo from "./img/githublogo.png";
import SearchBar from "./components/SearchBar/SearchBar";
import ReposResults from "./components/ReposResults/ReposResults";
import CardResults from "./components/CardResults/CardResults";
import Loader from "./components/Loading/Loading";

const App = () => {
  console.log("Application launched");

  const [searchQuery, setSearchQuery] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (searchQuery === "") return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `https://api.github.com/search/repositories?q=${searchQuery}`
        );
        setCount(response.data.total_count);
        setRepositories(response.data.items);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div className="app-container">
      <div className="github-logo-container">
        <img className="github-logo" src={githubLogo} alt="Le logo de github" />
      </div>
      <SearchBar onSearch={handleSearch} />
      <ReposResults
        searchQuery={searchQuery}
        repositories={repositories}
        count={count}
      />
      {loading && <Loader />}
      <div className="repos-list">
        {repositories.map((repo) => (
          <CardResults key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default App;
