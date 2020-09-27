import React from 'react';
import './Footer.scss';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="footer-section bg-dark" >
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="pb-3" style={{ height: '60px' }} src={logo} alt="" />
                    </div>
                    <div className="col-md-3">
                        <div className="list-unstyled">
                            <li><Link className="link" to="/">About Online Food</Link></li>
                            <li><Link className="link" to="/">Read Our Blog</Link></li>
                            <li><Link className="link" to="/">Sign up to deliver</Link></li>
                            <li><Link className="link" to="/">Add your restaurant</Link></li>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="list-unstyled">
                            <li><Link className="link" to="/">Get Help</Link></li>
                            <li><Link className="link" to="/">Read FAQ</Link></li>
                            <li><Link className="link" to="/">View All Cites</Link></li>
                            <li><Link className="link" to="/">Restaurant near me</Link></li>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <div className="d-flex justify-content-between align-items-center">
                            <small className='text-secondary'>Copyright © 2020 Online Food</small>
                            <ul className="list-inline mt-2">
                                <li className="list-inline-item ml-3">
                                    <Link className="link" to="/">Privacy Policy</Link>
                                </li>
                                <li className="list-inline-item ml-3">
                                    <Link className="link" to="/">Terms of Use</Link>
                                </li>
                                <li className="list-inline-item ml-3">
                                    <Link className="link" to="/">Pricing</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;