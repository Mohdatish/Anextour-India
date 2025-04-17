import React from 'react'
import "../styles/fligth.css"
import LeftFilter from '@/comp/LeftFilter'
import Image from 'next/image'
import "../styles/hotel-flight.css"
import "../styles/hotel.css"


const page = () => {
    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                        <LeftFilter />
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8'>

                        <div className="cab-card" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <div className='d-flex flex-column gap-2'>
                                <div className='d-flex flex-column gap-2'>
                                    <div className="cab-info">
                                        <div className="flight-card">
                                            <div className='d-flex flex-column gap-2'>
                                                DEPART
                                                <Image src="/assets/image.jpg" alt="Airline Logo" className="flight-logo me-3" width={10} height={10} />
                                                AIR INDAI
                                            </div>
                                            <div className="flight-info me-3">
                                                <div className="flight-time">17:10</div>
                                                <small>DEL · 26 Jan</small>
                                            </div>

                                            <div className="flight-route">
                                                <div className="flight-line" style={{ width: "157px" }}>
                                                    <span className="direct-tag" style={{ top: "-10px" }}>DIRECT</span>
                                                </div>
                                                <div className="duration">4h 05m</div>
                                            </div>

                                            <div className="flight-info ms-3">
                                                <div className="flight-time">19:50</div>
                                                <small>DXB · 26 Jan</small>
                                            </div>


                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center' style={{ paddingRight: "30px" }}>
                                        <div>Flight details</div>
                                        <div className="flight-icons ms-3">
                                            <i className="fa-solid fa-suitcase"></i>
                                            <i className="fa-solid fa-suitcase-rolling"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex flex-column gap-2'>
                                    <div className="cab-info">
                                        <div className="flight-card">
                                            <div className='d-flex flex-column gap-2'>
                                                DEPART
                                                <Image src="/assets/image.jpg" alt="Airline Logo" className="flight-logo me-3" width={10} height={10} />
                                                AIR INDAI
                                            </div>
                                            <div className="flight-info me-3">
                                                <div className="flight-time">17:10</div>
                                                <small>DEL · 26 Jan</small>
                                            </div>

                                            <div className="flight-route">
                                                <div className="flight-line" style={{ width: "157px" }}>
                                                    <span className="direct-tag" style={{ top: "-10px" }}>DIRECT</span>
                                                </div>
                                                <div className="duration">4h 05m</div>
                                            </div>

                                            <div className="flight-info ms-3">
                                                <div className="flight-time">19:50</div>
                                                <small>DXB · 26 Jan</small>
                                            </div>


                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center' style={{ paddingRight: "30px" }}>
                                        <div>Flight details</div>
                                        <div className="flight-icons ms-3">
                                            <i className="fa-solid fa-suitcase"></i>
                                            <i className="fa-solid fa-suitcase-rolling"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cab-pricing">
                                <div className='d-flex gap-2 align-items-center justify-content-end'>
                                    <div className="original-price">₹ 2,794</div>
                                    <div className="discounted-price">₹ 1,986</div>
                                </div>
                                <div className="taxes-charges">+ ₹ 454 (Taxes & Charges)</div>
                                <button className="book-button">Book Now</button>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
            {/* modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Flight Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
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
                            </div>
                            <br />
                            <br />
                            <div className='text-center'>3 nights in dubai</div>
                            <br />
                            <br />
                            <div>
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
                            </div>
                            <div className="pop-baggage-container">
                                <div>
                                    <h6 className="pop-included-title">Included baggage</h6>
                                    <p className="pop-included-subtitle">The total baggage included in the price</p>
                                </div>
                                <br/>
                                <div className='d-flex gap-2'>
                                <div className="pop-baggage-info">
                                    <h6 className="pop-flight-title">Flight To Dubai</h6>
                                    <div className="pop-baggage-item">
                                        <span className="pop-baggage-icon">💼</span>
                                        <span className="pop-baggage-details">Cabin Baggage: 7 Kgs/Adult</span>
                                    </div>
                                    <div className="pop-baggage-item">
                                        <span className="pop-baggage-icon">🧳</span>
                                        <span className="pop-baggage-details">Check-in Baggage: 20 Kgs/Adult</span>
                                    </div>
                                </div>
                                <div className="pop-baggage-info">
                                    <h6 className="pop-flight-title">Flight To Delhi</h6>
                                    <div className="pop-baggage-item">
                                        <span className="pop-baggage-icon">💼</span>
                                        <span className="pop-baggage-details">Cabin Baggage: 7 Kgs/Adult</span>
                                    </div>
                                    <div className="pop-baggage-item">
                                        <span className="pop-baggage-icon">🧳</span>
                                        <span className="pop-baggage-details">Check-in Baggage: 20 Kgs/Adult</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page