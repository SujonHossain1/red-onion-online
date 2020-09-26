import React, { useContext, useState } from 'react';
import './Login.scss';
import {
    initializeAppFirebase,
    signInWithGoogle,
    signUpWithEmailAndPassword,
    signInWithEmailAndPasswordOwn,
    signInWithFacebook
} from '../FirebaseManager/FirebaseManager';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png'

const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);

    initializeAppFirebase();
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };


    // SignIn With Google
    const signInGoogle = () => {
        signInWithGoogle()
            .then(res => {
                setLoggedInUser(res);
                history.replace(from);
            })
            .catch(err => {
                setLoggedInUser(err);
            })
    }

    // SignIn With Facebook
    const signInFacebook = () => {
        signInWithFacebook()
            .then(res => {
                setLoggedInUser(res);
                history.replace(from);
            })
            .catch(err => {
                setLoggedInUser(err);
            })
    }



    // SignUp With Name, Password, Email
    const onSubmit = (data) => {
        const { name, email, confirmPassword, password } = data;

        if (newUser && name && email && confirmPassword) {
            signUpWithEmailAndPassword(name, email, confirmPassword)
                .then(res => {
                    setLoggedInUser(res);
                })
                .catch(err => {
                    setLoggedInUser(err);
                })
        }
        if (!newUser && email && password) {
            signInWithEmailAndPasswordOwn(email, password)
                .then(res => {
                    setLoggedInUser(res);
                    history.replace(from);

                })
                .catch(err => {
                    setLoggedInUser(err);
                })

        }
    }


    return (
        <div className="login">
            <div className="container">
                <div className="logo text-center  pt-5">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="button-style col-md-5 mx-auto pt-4 ">
                    <button onClick={signInGoogle} className="btn pl-2 btn-outline-secondary">Login With Google</button>
                    <b className="ml-3 text-center"> Or </b>
                    <button onClick={signInFacebook} className="btn btn-outline-secondary">Login With Facebook</button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="col-md-5 py-4 align-content-center my-auto mx-auto">

                    {
                        newUser && <div className="form-group">
                            <input
                                ref={register({
                                    required: "Name is required",
                                    minLength: {
                                        value: 2,
                                        message: "Must be two characters"
                                    }
                                })}
                                type="text"
                                name="name"
                                className="form-control my-2"
                                placeholder="Your Name"
                            />
                            {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
                        </div>
                    }
                    <div className="form-group">
                        <input
                            ref={register({
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: "Invalid email address"
                                }
                            })}
                            type="email"
                            name="email"
                            className="form-control my-2"
                            placeholder="Email Address"
                        />
                        {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
                    </div>
                    <div className="form-group">
                        <input
                            ref={register({ required: true })}
                            type="password"
                            name="password"
                            className="form-control my-2"
                            placeholder="Password"
                        />
                        {errors.password && <span style={{ color: 'red' }}> Password is required</span>}
                    </div>
                    {
                        newUser && <div className="form-group">
                            <input
                                type="password"
                                name="confirmPassword"
                                className="form-control"
                                ref={register({
                                    validate: (value) => value === watch('password')
                                })}
                                placeholder="Confirm Password"
                            />
                            {errors.confirmPassword && <span style={{ color: 'red' }}>Passwords don't match.</span>}
                        </div>

                    }
                    <button type="submit" className="btn btn-danger btn-block">
                        {newUser ? 'Sign Up' : 'Sign In'}
                    </button>
                </form>

                <p onClick={() => setNewUser(!newUser)} className="have-account">
                    {newUser ? "Already have an account" : "Crate a New Account"}
                </p>

                <div className="mt-3 text-center">
                    <p style={{ color: 'red' }}> {loggedInUser.error} </p>
                </div>
            </div>
        </div>
    );
};

export default Login;