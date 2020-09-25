import React, { useContext } from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import logo from '../../images/logo2.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';

const Header = () => {
    const { cart } = useContext(CartContext);

    return (
        <nav className="navbar navbar-expand navbar-light fixed-top bg-light bg-white py-2">
            <div className="container">
                <Link className="navbar-brand" to="/"> <img src={logo} alt="" /> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link " to="/checkout">
                                <ShoppingCartOutlinedIcon className="cart-style" />
                                <span className="count"> {cart.length} </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                <button className="btn rounded-pill">LogIn</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">
                                <button className="btn  btn-rounded btn-danger">Sign Up</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Header;