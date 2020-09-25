import React, { useContext } from 'react';
import { CartContext } from '../../App';

const Checkout = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="container">
            <div className="row jumbotron">
                <div className="col-md-6">
                    <form >
                        <div className="form-group">
                            <input className="form-control" type="text" name="" placeholder="Write Something" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" name="" placeholder="Write Something" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" name="" placeholder="Write Something" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" name="" placeholder="Write Something" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" name="" placeholder="Write Something" />
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    {
                        cart.map(item => {
                            return (
                                <div className="jumbotron d-flex justify-content-around">
                                    <img src={item.img} alt="" />
                                    <div>
                                        <h3>{item.tile} </h3>
                                        <h5>Price: ${item.price} </h5>
                                        <p> Delivery Fee </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Checkout;