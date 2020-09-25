import React, { createContext, useState } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import Foods from './components/Foods/Foots';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Checkout from './components/Checkout/Checkout';


export const UserContext = createContext();
export const CartContext = createContext();

function App() {

    const [cart, setCart] = useState([]);

    const handleAddToCart = (data) => {
        const alreadyAdded = cart.find(item => item.id === data.id);
        if (alreadyAdded) {
            const previousCarts = cart.filter(item => item.id !== data);
            setCart(previousCarts);
        } else {
            const newCart = [...cart, data];
            setCart(newCart);
        }

    }

    // console.log(cart);

    return (
        <UserContext.Provider>
            <CartContext.Provider value={{ cart, handleAddToCart }}>
                <Router>
                    <Route exact path="/">
                        <Header />
                        <Banner />
                        <Foods />
                        <Feature />
                        <Footer />
                    </Route>
                    <Route path="/foods/:foodId">
                        <Header />
                        <FoodDetails />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                </Router>
            </CartContext.Provider>
        </UserContext.Provider>
    );
}

export default App;
