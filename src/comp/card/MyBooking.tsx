'use client'

import React from 'react'
import "../../../src/app/styles/bookings.css"

const MyBooking = () => {
    return (
        <div className="booking-card">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <img src="/assets/image.jpg" alt="images" />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                    <div className="row h-100 d-flex justify-content-start align-items-center p-3">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                            <div className="d-flex gap-3 justify-content-start flex-column">
                                <div className="d-flex gap-1 justify-content-start align-items-start flex-column">
                                    <div className="d-flex gap-1 align-items-center">
                                        <h4>Avataara Resort & Spa</h4>
                                        <div className="rating d-flex gap-3 align-items-center">
                                            <div className="d-flex gap-1">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <span>4.5 (143 ratings)</span>
                                        </div>
                                    </div>
                                    <h6>Mohali, india</h6>
                                </div>
                                <div className="row p-2">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 p-1">
                                        <div
                                            className="d-flex flex-column gap-2 justify-content-start align-items-start">
                                            <div className="text">Mohali • Free Cancellation</div>
                                            <div className="text">Booking ID - 10000000 </div>
                                            <div className="text">Confriemd</div>
                                        </div>
                                    </div>
                                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 p-1">
                                        <div
                                            className="d-flex flex-column gap-2 justify-content-start align-items-start">
                                            <div className="text">CHECK-IN</div>
                                            <h5>Thu 31 Oct 2023</h5>
                                            <div className="text">From 12:00</div>
                                        </div>
                                    </div>
                                    <div className="col-xs-3 col-sm-3 col-md-3 ccol-lg-3 p-1">
                                        <div
                                            className="d-flex flex-column gap-2 justify-content-start align-items-start">
                                            <div className="text">CHECK-OUT</div>
                                            <h5>Thu 31 Oct 2023</h5>
                                            <div className="text">until</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <button className="fill-btn">View & manage booking</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyBooking