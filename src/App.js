import React, { createContext, useState } from 'react';
import './styles/main_style.scss';
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
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();
export const CartContext = createContext();

function App() {

    const [loggedInUser, setLoggedInUser] = useState({
        name: '',
        email: '',
        photo: '',
        isSignIn: false,
        error: ''
    })

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
    const checkOutItemHandler = (productId, productQuantity) => {
        const newCart = cart.map(item => {
            if (item.id === productId) {
                item.quantity = productQuantity;
            }
            return item;
        })

        const filteredCart = newCart.filter(item => item.quantity > 0)
        setCart(filteredCart)
    }


    console.log(cart);

    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <CartContext.Provider value={{ cart, handleAddToCart, checkOutItemHandler }}>
                <Router>
                    <Switch>
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
                            <Footer />
                        </Route>
                        <PrivateRoute path="/checkout">
                            <Header />
                            <Checkout />
                            <Footer />
                        </PrivateRoute>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/signup">
                            <Login />
                        </Route>
                    </Switch>
                </Router>
            </CartContext.Provider>
        </UserContext.Provider>
    );
}

export default App;
