import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../App';
import FoodData from '../../data/FoodData.json';

const FoodDetails = () => {
    const { foodId } = useParams();
    const [foodItem, setFoodItem] = useState({});
    const {handleAddToCart} = useContext(CartContext);
    const { title, img, price, description } = foodItem;

    useEffect(() => {
        const newFood = FoodData.find(item => item.id === parseInt(foodId));
        setFoodItem(newFood);
    }, [foodId]);


    return (
        <div className="container">
            <div className="row jumbotron">
                <div className="col-md-6">
                    <h2> {title} </h2>
                    <p> {description} </p>
                    <h4>Price: ${price} </h4>
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => handleAddToCart(foodItem)}
                    >
                        Add To Cart
                    </button>
                </div>
                <div className="col-md-6">
                    <img className=" img-fluid " src={img} alt={title} />
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;