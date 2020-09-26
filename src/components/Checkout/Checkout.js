import React, { useContext } from 'react';
import { CartContext } from '../../App';
import CheckoutCart from '../CheckoutCart/CheckoutCart';
import ShipmentForm from '../ShipmentForm/ShipmentForm';

const Checkout = () => {
    const { cart } = useContext(CartContext);


    const subTotal = cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0)
    const totalQuantity = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0)
    const tax = subTotal * 0.05;
    const deliveryFee = totalQuantity && 2;
    const grandTotal = subTotal + tax + deliveryFee;

    return (
        <div className="container py-5 my-5">
            <div className="row justify-content-between">
                <div className="col-md-5">
                    <ShipmentForm />
                </div>
                <div className="col-md-5">
                    <div className="pb-5">
                        <h3>Form <b>Red Onion Restaurant</b> </h3>
                        <h5>Arriving in 20-30 min</h5>
                        <h5>Mirpur-10, Dhaka, Bangladesh </h5>
                    </div>
                    {
                        cart.map(cartItem => <CheckoutCart cartItem={cartItem} key={cartItem.id} />)
                    }
                    <div>
                        <p className="d-flex justify-content-between">
                            <span>Sub Total . {totalQuantity} Item</span>
                            <span>${subTotal}</span>
                        </p>
                        <p className="d-flex justify-content-between">
                            <span>Tax</span>
                            <span>${tax.toFixed(2)}</span>
                        </p>
                        <p className="d-flex justify-content-between">
                            <span>Delivery Fee</span>
                            <span>${deliveryFee}</span>
                        </p>
                        <p className="h5 d-flex justify-content-between">
                            <span>Total</span>
                            <span>${grandTotal}</span>
                        </p>
                        <button className="btn btn-block btn-secondary">Check Out Your Food</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Checkout;