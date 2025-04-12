import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                            <img src="assets/image.jpg" className="nav-logo" />
                                <br /><br />
                                <div className="address">
                                    Anex Tour India<br />
                                    Optima Explore India Pvt Ltd.<br />
                                    2nd Floor, Mansarover Building, 366, near Sultanpur Metro Station, Sultanpur, New Delhi
                                    Delhi 110030
                                </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 mt-3">
                            <div className="footer-detail">
                                <h6>Company</h6>
                                <ul>
                                    <li>About us</li>
                                    <li>Contact us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 mt-3">
                            <div className="footer-detail">
                                <h6>Legal </h6>
                                <div className="d-flex justify-content-start  gap-4 align-items-start">
                                    <ul>
                                        <li>Booking Conditions</li>
                                        <li>Privacy Policy</li>
                                        <li>Terms of use</li>
                                        <li>Terms of service </li>
                                        <li>User agreement</li>
                                    </ul>
                                    <ul>
                                        <li>Cancellation policy</li>
                                        <li>Cookie Policy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 mt-3">
                            <div className="footer-detail">
                                <h6>Holidays </h6>
                                <div className="d-flex justify-content-start  gap-4 align-items-start">
                                    <ul>
                                        <li>Russia</li>
                                        <li>Tanzania</li>
                                        <li>Bulgaria</li>
                                        <li>Thailand </li>
                                        <li>Azerbaijan</li>
                                    </ul>
                                    <ul>
                                        <li>Qatar</li>
                                        <li>Tunisia</li>
                                        <li>Istanbul</li>
                                        <li>UAE</li>
                                        <li>Antalya</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 copyright mt-4">
                        <p>Copyright © 2025 Anextour. All rights reserved.</p>
                        <div className="d-flex justify-content-start align-items-center gap-2">
                            <img src="images/logo-instagram.svg" alt="image" />
                            <img src="images/logo-twitter.svg" alt="image" />
                            <img src="images/logo-facebook.svg" alt="image" />

                        </div>
                    </div>
                    <div className="d-flex gap-3 flex-wrap justify-content-between align-items-center companies mt-4">
                        <div>
                            <img src="images/anextour.png" alt="image" />
                        </div>
                        <div>
                            <img src="images/atg.png" alt="image" />
                        </div>
                        <div>
                            <img src="images/bucher.jpeg" alt="image" />
                        </div>
                        <div>
                            <img src="images/intourist.png" alt="image" />
                        </div>
                        <div>
                            <img src="images/mga.png" alt="image" />
                        </div>
                        <div>
                            <img src="images/neckermann.jpeg" alt="image" />
                        </div>
                        <div>
                            <img src="images/selectum.png" alt="image" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer