import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ReposResults from "./components/ReposResults/ReposResults";
import Pagination from "./components/Pagination/Pagination";
import CardResults from "./components/CardResults/CardResults";
import Loader from "./components/Loading/Loading";
import "./App.scss";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [maxResults, setMaxResults] = useState(30);
  const [page, setPage] = useState(1);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setRepositories([]);
    setPage(1);
  };

  const handleMoreResults = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (searchQuery === "") return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          `https://api.github.com/search/repositories?q=${searchQuery}&per_page=${maxResults}&page=${page}`
        );

        setCount(response.data.total_count);
        setRepositories((prevRepos) => [...prevRepos, ...response.data.items]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery, page]);

  return (
    <div className="app-container">
      <SearchBar onSearch={handleSearch} />
      {error && <div className="error-message">Erreur : {error}</div>}
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
      {count > repositories.length && !loading && (
        <div className="load-more-btn">
          <button onClick={handleMoreResults} className="ui button">
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
