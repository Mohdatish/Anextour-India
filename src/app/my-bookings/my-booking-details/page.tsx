import BreadCrumb from '@/comp/BreadCrumb'
import React from 'react'
import "../../styles/bookings.css"
const page = () => {
  return (
    <>
    <div className="container">
        <div className="top-navigator">
            <br /><br />
            <BreadCrumb />
            <br /><br />
            <div className="page-title">Your booking in Mohali is confirmed.</div>
            <p>Booking ID - 10000000</p>
        </div>

        <br /><br /><br />
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 mt-3">
                <div className="detail-card">
                    <div className="d-flex justify-content-start gap-3 align-items-center">
                        <img src="/assets/image.jpg" alt="image" className="detail-booking-image" />
                        <div className="d-flex gap-1 justify-content-start flex align-items-start flex-column">
                            <div className="d-flex gap-1 align-items-center flex-wrap">
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
                            <h6>Shahi majra, Near AM hospital, sector 58, Mohali, Mohali, 160055 Mohali, India</h6>
                            <h6>Contact: 01050 50110</h6>
                        </div>
                    </div>
                    <br /><br />
                    <hr />
                    <br /><br />
                    <div className="card-heading">Room details</div>
                    <h6>1 x Spot on NON AC</h6>
                    <br />
                    <div className="d-flex justify-content-start gap-3">
                        <div>
                            <i className="fa-solid fa-ticket"></i>
                            <span>Download Voucher</span>
                        </div>
                        <div>
                            <i className="fa-solid fa-envelope-open-text"></i>
                            <span>Email Voucher</span>
                        </div>
                    </div>
                    <br /><br />
                    <hr />
                    <br /><br />
                    <div className="card-heading">Booking details</div>
                    <h6>1 adult - 1 night, 1 room</h6>
                    <br />
                    <div className="d-flex justify-content-start align-items-center gap-3 my-bookings">
                        <div className="d-flex justify-content-start gap-2 flex-column">
                            <span>Check-in</span>
                            <h4>Thu 31 Oct 2023 • 12 PM</h4>
                        </div>
                        <div className="timeline-container">
                            <div className="circle left-circle"></div>
                            <div className="line"></div>
                            <div className="label">ON NIGHT STAY</div>
                            <div className="line"></div>
                            <div className="circle right-circle"></div>
                        </div>
                        <div className="d-flex justify-content-end align-items-end gap-2 flex-column">
                            <span>Check-out</span>
                            <h4>Thu 31 Oct 2023 • 12 PM</h4>
                        </div>
                    </div>
                    <br /><br />
                    <hr />
                    <br /><br />
                    <div className="card-heading">Guest Details</div>
                    <div className=" flex-wrap d-flex justify-content-start gap-3 align-items-center">
                        <div>
                            <div className="text">Total Guest</div>
                            <h4>1</h4>
                        </div>
                        <div>
                            <div className="text">Primary Guest</div>
                            <h4>Jhon Doe</h4>
                        </div>
                        <div>
                            <div className="text">Phone number</div>
                            <h4>0987654321</h4>
                        </div>
                        <div>
                            <div className="text">Email</div>
                            <h4>yopmial.com</h4>
                        </div>
                    </div>
                    <br /><br />
                    <hr />
                    <br /><br />
                    <div className="card-heading">Board Basis</div>
                    <h6>here is no meal option with this room.</h6>
                    <br /><br />
                    <hr />
                    <br /><br />
                    <div className="card-heading">Cancellation</div>
                    <ul>
                        <li><h6>From 21 Nov 2024 to 27 Nov 2024 is 100% refundable </h6></li>
                        <li><h6>From 28 Nov 2024 to 29 Nov 2024 is Non-refundable</h6></li>
                    </ul>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 mt-3">
                <div className="price-card2">
                    <div className="card-heading">Price Details</div>
                    <br />
                    <div className="d-flex justify-content-between align-items-center">
                        <h5>1 Room x 1 Night</h5>
                        <h5>$2500</h5>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h6>Tax Charges</h6>
                        <h6>$250</h6>
                    </div>
                    <br />
                    <div className="d-flex justify-content-between align-items-center">
                        <h4>1 Room x 1 Night</h4>
                        <h4>$2500</h4>
                    </div>
                </div>
                <br />
                <div className="price-card2">
                    <div className="d-flex justify-content-between">
                        <div className="card-heading">Amount Paid</div>
                        <div className="card-heading">$0</div>
                    </div>
                    <br />
                    <h6>
                        Pay the remaining amount of ₹2500 using any payment option before Thu, 28 November, 11:59 PM IST to avoid automatic cancellation of your booking.
                    </h6>
                    <div className="d-flex justify-content-between flex-wrap gap-1 align-items-center">
                        <button className="fill-btn">Pay full amount</button>
                        <button className="fill-btn">Pay 10% amount</button>
                    </div>
                </div>
                </div>
                </div>  
            </div>
    </>
  )
}

export default page