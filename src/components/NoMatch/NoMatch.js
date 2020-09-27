import React from 'react';
import "./NoMatch.scss";
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div className="no-match">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Link to="/" className="btn btn-rounded btn-danger">Back To Home</Link>
        </div>
    );
};

export default NoMatch;