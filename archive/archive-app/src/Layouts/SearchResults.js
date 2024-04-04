import React from 'react';

const SearchResults = ({ results }) => {
    return (
        <div>
            <h2>Book Search Results</h2>
            <ul>
                {results.map((book) => (
                    <li key={book.key}>
                        {book.cover_i && (
                            <img
                            src={"http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg"}
                            alt={book.title}
                            style={{ width: 100, height: 150, marginRight: 10 }}
                            />
                        )}
                        <div style={{ display: 'inline-block' }}>
                            <strong>{book.title}</strong> by {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
                            <br />
                            Published: {book.publish_year ? book.publish_year[0] : 'Unknown'}
                            <br />
                            Average Rating: {book.ratings_count ? book.ratings_count.toFixed(2) : 'N/A'}
                            </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;