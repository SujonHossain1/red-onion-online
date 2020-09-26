import React, { useState, useEffect, useContext } from 'react';
import './FoodDetails.scss';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../App';
import FoodData from '../../data/FoodData.json';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const FoodDetails = () => {
    const { foodId } = useParams();
    const [foodItem, setFoodItem] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [isCartAddSuccess, setIsCartAddSuccess] = useState(false)
    const { handleAddToCart } = useContext(CartContext);

    const { title, img, price, description } = foodItem;

    useEffect(() => {
        const newFood = FoodData.find(item => item.id === parseInt(foodId));
        setFoodItem(newFood);
    }, [foodId]);

    const handleAddToCartInner = (foodItem) => {
        foodItem.quantity = quantity;
        handleAddToCart(foodItem);
        setIsCartAddSuccess(true);
    }
    if (isCartAddSuccess) {
        setTimeout(() => setIsCartAddSuccess(false), 1500)
    }
 

    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-md-6">
                    <div className="food-description">
                        <h1> {title} </h1>
                        <p> {description} </p>
                        <div className="mb-4">
                            <span style={{ fontSize: '30px', fontWeight: '600' }}> ${price} </span>
                            <span className="quantity-btn ">
                                <button
                                    className="btn btn-sm"
                                    onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}
                                >-</button>
                                <span> {quantity} </span>
                                <button
                                    className="btn btn-sm"
                                    onClick={() => setQuantity(quantity + 1)}
                                >+</button>
                            </span>
                        </div>
                        <div className="mt-3">
                            <button
                                className="btn btn-rounded btn-danger"
                                onClick={() => handleAddToCartInner(foodItem)}
                            >
                                <ShoppingCartOutlinedIcon /> Add
                            </button>

                            {
                                isCartAddSuccess && <span className="ml-3  success-mgs text-success">  Item added to Cart Successfully</span>
                            }


                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className=" img-fluid " src={img} alt={title} />
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;