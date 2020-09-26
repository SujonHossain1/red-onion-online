import React from 'react';
import './FoodItem.scss';

import { Link } from 'react-router-dom';

const FoodItem = ({ food }) => {
    const { id, title, img, shotDescription, price } = food;
    return (
        <div className="col-md-6 col-lg-4 food-item">
            <Link to={"/foods/" + id} >
                <div className="card text-center">
                    <img src={img} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5>{title}</h5>
                        <p>{shotDescription}</p>
                        <h4>${price}</h4>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default FoodItem;