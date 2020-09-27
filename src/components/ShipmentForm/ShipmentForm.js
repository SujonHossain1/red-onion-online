import React from 'react';
import { useForm } from "react-hook-form";

const ShipmentForm = ({onSubmit}) => {
    const { register, handleSubmit, errors } = useForm();

    return (
        <div>
            <h3>Edit Delivery Details</h3>
            <hr />
            <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input
                        ref={register({ required: true })}
                        className="form-control"
                        type="text"
                        name="door"
                        placeholder="Delivery To Door"
                    />
                    {errors.door && <span style={{ color: 'red' }}> This Field is required</span>}
                </div>
                <div className="form-group">
                    <input
                        ref={register({ required: true })}
                        className="form-control"
                        type="text"
                        name="rood"
                        placeholder="Rood No."
                    />
                    {errors.rood && <span style={{ color: 'red' }}> This Field is required</span>}
                </div>
                <div className="form-group">
                    <input
                        ref={register({ required: true })}
                        className="form-control"
                        type="text"
                        name="flat"
                        placeholder="Flat, Suite or Floor"
                    />
                    {errors.flat && <span style={{ color: 'red' }}> This Field is required</span>}
                </div>
                <div className="form-group">
                    <input
                        ref={register({ required: true })}
                        className="form-control"
                        type="text"
                        name="business"
                        placeholder="Business Name"
                    />
                    {errors.business && <span style={{ color: 'red' }}> This Field is required</span>}
                </div>
                <div className="form-group">
                    <textarea
                        ref={register({ required: true })}
                        name="address"
                        className="form-control"
                        placeholder="Address"
                    />
                    {errors.address && <span style={{ color: 'red' }}> This Field is required</span>}
                </div>

                <button className="btn btn-danger btn-block mb-3" type="submit">Save &amp; Continue</button>
            </form>
        </div>
    );
};

export default ShipmentForm;