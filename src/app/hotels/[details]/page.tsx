'use client'

import BreadCrumb from '@/comp/BreadCrumb'
import React from 'react'
import "../../styles/hotel.css"
import BigHeadingPara from '@/comp/BigHeadingPara'
import Image from 'next/image'
import PreSelectedFlight from '@/comp/PreSelectedFlight'
import BoardCard from '@/comp/card/BoardCard'

const page = () => {
    return (
        <div className='container'>
            <BreadCrumb />
            <br />
            <div className='d-flex justify-content-between align-items-center'>
                <BigHeadingPara heading='Five Palm Jumeirah Dubai' span='No. 1 The Palm, Palm Jumeirah, Dubai, United Arab Emirates' />
                <button className='select-btn'>Book from ₹ 66,941</button>
            </div>
            <br />
            <br />
            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                    <div style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '16/9' }}>
                        <Image src='/assets/image.jpg' alt='vererv' fill style={{ borderRadius: "20px" }} />
                    </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                    <div className='d-flex gap-3 flex-wrap'>
                        <div style={{ position: 'relative', width: '250px', height: '140px', aspectRatio: '16/9' }}>
                            <Image src='/assets/image.jpg' alt='vererv' fill style={{ borderRadius: "20px" }} />
                        </div>
                        <div style={{ position: 'relative', width: '250px', height: '140px', aspectRatio: '16/9' }}>
                            <Image src='/assets/image.jpg' alt='vererv' fill style={{ borderRadius: "20px" }} />
                        </div>
                        <div style={{ position: 'relative', width: '250px', height: '140px', aspectRatio: '16/9' }}>
                            <Image src='/assets/image.jpg' alt='vererv' fill style={{ borderRadius: "20px" }} />
                        </div>
                        <div style={{ position: 'relative', width: '250px', height: '140px', aspectRatio: '16/9' }}>
                            <Image src='/assets/image.jpg' alt='vererv' fill style={{ borderRadius: "20px" }} />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <ul className="nav nav-tabs hotel-detail" id="hotelTabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab">Overview</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="facilities-tab" data-bs-toggle="tab" data-bs-target="#facilities" type="button" role="tab">Facilities</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="location-tab" data-bs-toggle="tab" data-bs-target="#location" type="button" role="tab">Location</button>
                </li>
            </ul>

            <div className="tab-content" id="hotelTabsContent">
                <div className="tab-pane fade show active" id="overview" role="tabpanel">
                    <p>
                        The complex has a lift and features 485 rooms. The friendly staff at the reception desk are happy to answer any questions. Amenities include a baggage storage service, a safe and a cash machine. Wireless internet access (no extra charge) is provided in public areas. The tour desk offers assistance with booking excursions. The hotel has wheelchair-accessible facilities. There are a number of shops, including a supermarket and souvenir shop. The grounds of the hotel feature a playground and a lovely garden. Additional amenities include a playroom and a library. Guests arriving by car can park their vehicles in the garage or in the car park. Further services and facilities include a babysitting service (for a fee), a childcare service, a car hire service, a transfer service, room service, a laundry service, a hairdresser, a coin-operated laundry, a hotel doctor and a hotel shuttle bus. A bicycle hire service gives guests the opportunity to explore the surrounding area independently. Complimentary newspapers are available. The business centre is on hand for guests’ business requirements and provides a projector.
                    </p>
                    <a href="#" className="view-more">View more</a>
                </div>
                <div className="tab-pane fade" id="facilities" role="tabpanel">
                    <p>Facilities content goes here.</p>
                </div>
                <div className="tab-pane fade" id="location" role="tabpanel">
                    <p>Location content goes here.</p>
                </div>
            </div>
            <br />
            <br />
            <PreSelectedFlight />
            <br />
            <BigHeadingPara heading='Availability' span='' />
            <br />
            <br />
            <div className='d-flex flex-column gap-3'>
                <div className='heading'>
                    <h5>Trip Overview</h5>
                </div>
                <div className="trip-card">
                    <div className="trip-details">
                        <div className="trip-item">
                            <span className="icon">✈️</span>
                            <span>From Delhi to Dubai</span>
                        </div>
                        <div className="trip-item">
                            <span className="icon">📅</span>
                            <span>Sun, 26 Jan – Wed, 29 Jan</span>
                        </div>
                        <div className="trip-item">
                            <span className="icon">👥</span>
                            <span>3 travellers, 2 rooms</span>
                        </div>
                    </div>
                    <button className="change-btn">Change Search</button>
                </div>
            </div>
            <BigHeadingPara heading='Select room and board type' span='' />
            <br />
            <br />
            <div className='board-type-card'>
                <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9'>
                        <div style={{ overflow: "auto",height:"850px",padding:"10px",overflowX:"hidden" }}>
                            <BoardCard />
                            <br />
                            <BoardCard />
                            <br />
                            <BoardCard />
                            <br />
                            <BoardCard />
                            <br />
                            <BoardCard />
                            <br />
                            <BoardCard />
                            <br />
                            <BoardCard />
                            <br />
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3'>
                        <div className="price-card">
                            <p className="room-selection">2 rooms selected</p>

                            <div className="room-details">
                                <p><strong>1 X Junior Suite:</strong> Room Only</p>
                                <p><strong>1 X Twin/Double Room Sea View:</strong><br />Room With Breakfast</p>
                            </div>

                            <div className="room-price">
                                <div className="main-price">₹ 1,37,882</div>
                                <div className="sub-text">total for rooms</div>
                            </div>

                            <p className="total-price">Total: <strong>₹1,86,683 Hotel+Flights</strong></p>

                            <button className="continue-btn">Continue</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default page