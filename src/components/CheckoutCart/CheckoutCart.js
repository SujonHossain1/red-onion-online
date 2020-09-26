import React, { useContext } from 'react';
import { CartContext } from '../../App';

const CheckoutCart = ({ cartItem }) => {
    const { id, title, price, quantity, img } = cartItem;
    console.log(quantity);
    const { checkOutItemHandler } = useContext(CartContext)
    return (
        <div>
            <div class=" mb-3 bg-light rounded d-flex align-items-center justify-content-between p-3">
                <img width="100px" src={img} alt={title} />
                <div>
                    <h6>{title}</h6>
                    <h4 class="text-danger">${price}</h4>
                    <p>Delivery free</p>
                </div>
                <div class="d-flex justify-content-center flex-column ml-3 btn">

                    {
                        quantity <= 1 ?
                            <button disabled className="btn btn-sm font-weight-bolder">-</button>
                            :
                            <button
                                className="btn btn-sm font-weight-bolder"
                                onClick={() => checkOutItemHandler(id, (quantity - 1))}
                            >-</button>
                    }
                    <button class="btn bg-white rounded mx-2">{quantity}</button>
                    <button class="btn btn-sm font-weight-bolder"
                        onClick={() => checkOutItemHandler(id, (quantity + 1))}
                    >+</button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutCart;