import React, { useState, useEffect } from 'react';
import Layout from './Layouts/Layouts.js';
import Bookcards from './Layouts/Bookcards.js';
import SearchResults from './Layouts/SearchResults.js';
import axios from 'axios';
import './App.css'

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
    <Layout>
      <div className="App">
      <Bookcards onSearch={handleSearch} />
      <SearchResults results={searchResults} />
      </div>
    </Layout>
  )
}

export default App;