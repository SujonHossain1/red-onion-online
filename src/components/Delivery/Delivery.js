import React, { useContext } from 'react';
import './Delivery.scss';
import map from '../../images/ordercomplete.png';
import Rider from '../../images/rider.png';
import { Link } from 'react-router-dom';
import { CartContext, UserContext } from '../../App';

const Delivery = () => {

    const { setCart } = useContext(CartContext);
    const [loggedInUser] = useContext(UserContext);
    

    return (
        <div className="container py-5">
            <div className="row justify-content-between">
                <div className="col-md-7">
                    <img className="img-fluid" src={map} alt="" />
                </div>
                <div className="col-md-4 delivery-details  p-3">
                    <img style={{ width: "120px" }} className="img-fluid" src={Rider} alt="" />
                    <div className=" bg-light">
                        <div className="order-info">
                            <h6>Your Location</h6>
                            <p>Address: Mirpur DOHS 18 rood house-10</p>

                            <div className="mt-2">
                                <h6>Shop Address</h6>
                                <p>Mirpur-10 Shah Ali Plaza Red Onion Restaurant</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-3 order-info">
                        <h2>9:30</h2>
                        <p>Delivery Time Start</p>
                        <h4>Thank you {loggedInUser.name}</h4>
                    </div>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <button
                            onClick={() => setCart([])}
                            class="btn btn-danger btn-block"
                        >Order Completed</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Delivery;