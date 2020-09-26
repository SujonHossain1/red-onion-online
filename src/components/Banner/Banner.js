import React from 'react';
import './Banner.scss';
import {Link} from 'react-router-dom';

const Banner = () => {
    return (
        <section className="align-items-center banner d-flex text-center">
            <div className="container">
                <h1>Best Food Waiting  for your Belly</h1>
                <div className="search-box col-md-6 mx-auto my-5 d-flex">
                    <input type="text" name="search" id="search" className="form-control" placeholder="Search Food Item" />
                    <Link to="/">
                        <button className="btn btn-danger btn-rounded search-btn">Search</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;