import React from 'react';
import './FoodItem.scss';

import { Link } from 'react-router-dom';

const FoodItem = ({ food }) => {
    const { id, title, img, shotDescription, price } = food;
    return (
        <div className="col-md-6 col-lg-4">
            <Link style={{ textDecoration: 'none' }} to={"/foods/" + id}>
                <div className="food-item">
                    <img className="img-fluid" src={img} alt={title} />
                    <h2> {title} </h2>
                    <p> {shotDescription} </p>
                    <h4>Price: ${price} </h4>
                </div>
            </Link>
        </div>
    );
};

export default FoodItem;