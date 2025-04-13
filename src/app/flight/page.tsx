import React from 'react'
import "../styles/fligth.css"
import LeftFilter from '@/comp/LeftFilter'
import Image from 'next/image'
import "../styles/hotel-flight.css"


const page = () => {
    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                        <LeftFilter />
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8'>
                        <div className="cab-card">
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
                                <div className='d-flex justify-content-between align-items-center' style={{paddingRight:"30px"}}>
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
                                <div className='d-flex justify-content-between align-items-center' style={{paddingRight:"30px"}}>
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
        </>
    )
}

export default page