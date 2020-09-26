import React from 'react';

const ShipmentForm = () => {
    return (
        <div>
            <h3>Edit Delivery Details</h3>
            <hr />
            <form className="pt-5">
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        name="door"
                        placeholder="Delivery To Door"
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        name="rood"
                        placeholder="Rood No."
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        name="flat"
                        placeholder="Flat, Suite or Floor"
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        name="business"
                        placeholder="Business Name"
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name="address"
                        className="form-control"
                        placeholder="Address"
                    />
                </div>

                <button class="btn btn-danger btn-block" type="submit">Save &amp; Continue</button>
            </form>
        </div>
    );
};

export default ShipmentForm;