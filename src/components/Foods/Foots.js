import React, { useEffect, useState } from 'react';
import './Foods.scss';
import FootData from '../../data/FoodData.json';
import FoodItem from '../FoodItem/FoodItem';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [selectedFoodItem, setSelectedFoodItem] = useState("lunch");

    const handleFoodCategory = (category) => {
        const newFoods = FootData.filter(food => food.catagories === category);
        setFoods(newFoods);
        setSelectedFoodItem(category);
        console.log(selectedFoodItem);
    }
    

    if (foods.length === 0) {
        const newFoods = FootData.filter(food => food.catagories === selectedFoodItem);
        setFoods(newFoods);
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <li onClick={() => handleFoodCategory('breakfast')} className="nav-item">
                    <span className={selectedFoodItem === 'breakfast' ? 'active nav-link' : 'nav-link'}> Breakfast</span>
                </li>
                <li onClick={() => handleFoodCategory('lunch')} className="nav-item">
                    <span className={selectedFoodItem === 'lunch' ? 'active nav-link' : 'nav-link'}> Lunch</span>
                </li>
                <li onClick={() => handleFoodCategory('dinner')} className="nav-item">
                    <span className={selectedFoodItem === 'dinner' ? 'active nav-link' : 'nav-link'}> Dinner</span>
                </li>
            </div>
            <div className="row">
                {
                    foods.map(food => <FoodItem food={food} key={food.id} />)
                }
            </div>
        </div>
    )
}

export default Foods;