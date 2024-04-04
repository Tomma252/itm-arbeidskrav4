import React, { useState, useEffect } from 'react';
import SearchBar from './Layouts/Bookcards.js';
import SearchResultList from './Layouts/SearchResults.js';
import axios from 'axios';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      fetchJamesBond();
      setInitialLoad(false);
    }
  }, [initialLoad]);

  const fetchJamesBond = async () => {
    try {
      const response = await axios.get("https://openlibrary.org/search.json?q=james+bond")
      setSearchResults(response.data.docs);
    } catch (error) {
      console.error("Error fetching data:")
    }
  }

  const handleSearch = async (query) => {
    if (query.trim().length < 3) {
      return;
    }

    try {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
      setSearchResults(response.data.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <h1>Search for Books</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResultList results={searchResults} />
    </div>
  )
}

export default App;