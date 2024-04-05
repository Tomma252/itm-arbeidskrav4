import React, { useState } from 'react';

const Bookcards = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form className="searchBar" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}/>
            <button type="submit">Search</button>
        </form>
    );
};

export default Bookcards;