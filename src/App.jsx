import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import ReposResults from "./components/ReposResults/ReposResults";
import CardResults from "./components/CardResults/CardResults";
import Loader from "./components/Loading/Loading";
import Footer from "./components/Footer/Footer";

const App = () => {
  console.log("Application launched");

  const [searchQuery, setSearchQuery] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [maxResults, setMaxResults] = useState(30);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleMaxResults = (maxResults) => {
    setMaxResults(maxResults);
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
      <Header />
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
      {count > maxResults && (
        <div className="load-more-btn">
          <button className="ui button">Load more</button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;
