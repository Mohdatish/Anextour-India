import React from 'react'
import "../styles/hotel.css"
import BreadCrumb from '@/comp/BreadCrumb'
import BigHeadingPara from '@/comp/BigHeadingPara'
import ReadBefore from '@/comp/ReadBefore'

const page = () => {
    return (
        <>
            <div className='container'>
                <BreadCrumb />
                <br />
                <br />
                <BigHeadingPara heading='Review your booking details' span='' />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 mt-3">
                        <div className="detail-card">
                            <div className="card-heading">Select your seats</div>
                            <h6>Direct · 4h 05m</h6>
                            <div className="main-detail">
                                <div className="timeline">
                                    <div className="timeline-item">
                                        <div className="circle-verticle"></div>
                                        <div className="details">
                                            <span>Fri 23 Nov • 20:10</span>
                                            <div className="title">
                                                <strong>DEL</strong> • Delhi International Airport
                                            </div>
                                        </div>
                                    </div>
                                    <div className="line"></div>
                                    <div className="timeline-item">
                                        <div className="circle-verticle"></div>
                                        <div className="details">
                                            <span>Fri 23 Nov • 22:45</span>
                                            <div className="title">
                                                <strong>BOM</strong> • Chhatrapati Shivaji International
                                                Airport Mumbai
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="logo">
                                    <img src="/images/place.jpg" />
                                    <span>
                                        Air India <br /> AI929 · Economy
                                    </span>
                                </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div className="card-heading">Room details</div>
                            <div>1 x Spot on NON AC</div>
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
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-3">
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
                        <div className="terms-text">
                            By clicking on the button below, I acknowledge that I have reviewed the<span>Fare Rules</span>, the <span>Policy</span>, and have reviewed and accept the <span>Agreement</span>  and <span>Terms of</span> Service of Anextour.
                        </div>
                        <button className="fill-btn mt-4 w-100">Continue</button>
                    </div>
                </div >
            </div >
        </>
    )
}

export default page