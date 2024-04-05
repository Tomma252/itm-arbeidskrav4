import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header>
                <h1 className="heading">Search Books</h1>
            </header>
            <main>{children}</main>
            <footer></footer>
        </div>
    );
};

export default Layout;