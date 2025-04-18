import React from 'react'
import "../styles/modal.css"

const page = () => {

    let array = [
        {
            price: "₹ 32,007",
            type: "ECO FLEX",
            offer: [
                {
                    offer_type: "Baggage",
                    offers: ["7 Kgs Cabin Baggage", "35 Kgs Check-in Baggage"],
                    is_add: true
                },
                {
                    offer_type: "Flexibility",
                    offers: ["Lower Cancellation fee of ₹ 1,000 (up to 4 hours before departure)", "Lower Date Change fee of ₹ 3,000"],
                    is_add: false
                },
                {
                    offer_type: "Seats, Meals & More",
                    offers: ["Free Seats", "Complimentary Meals"],
                    is_add: true
                },
            ]
        },
        {
            price: "₹ 32,007",
            type: "ECO FLEX",
            offer: [
                {
                    offer_type: "Baggage",
                    offers: ["7 Kgs Cabin Baggage", "35 Kgs Check-in Baggage"],
                    is_add: true
                },
                {
                    offer_type: "Flexibility",
                    offers: ["Lower Cancellation fee of ₹ 1,000 (up to 4 hours before departure)", "Lower Date Change fee of ₹ 3,000"],
                    is_add: false
                },
                {
                    offer_type: "Seats, Meals & More",
                    offers: ["Free Seats", "Complimentary Meals"],
                    is_add: true
                },
            ]
        },
        {
            price: "₹ 32,007",
            type: "ECO FLEX",
            offer: [
                {
                    offer_type: "Baggage",
                    offers: ["7 Kgs Cabin Baggage", "35 Kgs Check-in Baggage"],
                    is_add: true
                },
                {
                    offer_type: "Flexibility",
                    offers: ["Lower Cancellation fee of ₹ 1,000 (up to 4 hours before departure)", "Lower Date Change fee of ₹ 3,000"],
                    is_add: false
                },
                {
                    offer_type: "Seats, Meals & More",
                    offers: ["Free Seats", "Complimentary Meals"],
                    is_add: true
                },
            ]
        },
        {
            price: "₹ 32,007",
            type: "ECO FLEX",
            offer: [
                {
                    offer_type: "Baggage",
                    offers: ["7 Kgs Cabin Baggage", "35 Kgs Check-in Baggage"],
                    is_add: true
                },
                {
                    offer_type: "Flexibility",
                    offers: ["Lower Cancellation fee of ₹ 1,000 (up to 4 hours before departure)", "Lower Date Change fee of ₹ 3,000"],
                    is_add: false
                },
                {
                    offer_type: "Seats, Meals & More",
                    offers: ["Free Seats", "Complimentary Meals"],
                    is_add: true
                },
            ]
        }
    ]
    return (
        <div className='container mt-4'>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#otpModal">
                Launch OTP modal
            </button>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal">
                Launch Price Modal
            </button>

            {/* OTP MODAL */}
            <div className="modal  fade" id="otpModal" tabIndex={-1} aria-labelledby="otpModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body  p-0">
                            <div className='row'>
                                <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 p-0 otp-mobile-display'>
                                    <div className='auth-otp-image'></div>
                                </div>
                                <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 p-4'>
                                    <div className='d-flex justify-content-end'>
                                        <button type="button" className="btn-close pl-3" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className='mt-3 d-flex flex-column gap-4 justify-content-center align-items-center'>
                                        <div>Logo</div>
                                        <div className='otp-modal-heading'>Let's get started</div>
                                        <input type='text' className='detail-input' placeholder='enter your phone number' />
                                        <p>Continue our privacy polic</p>
                                        <button className='cutom-btn'>Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="cardModal" tabIndex={-1} aria-labelledby="cardModalLabel" aria-hidden="true">
                <div className="modal-dialog  modal-dialog-centered modal-xl">
                    <div className="modal-content">

                        <div className="modal-body price">
                            <div className='popup'>
                                <div className='view'>
                                    <div className='heading'>
                                        <div className='details'>
                                            <div className='fair'>4 FARE OPTIONS available for your trip.</div>
                                            <div className='para'>New Delhi to Dubai , 23 Nov Air India &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Departure at 20:10 - Arrival at 22:45</div>
                                        </div>
                                        <div className='icon'>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                    </div>
                                    <div className='cards'>
                                        {array.map((data, index) => (
                                            <div className='card' key={index + 1}>
                                                <div className='top'>
                                                    <div className='title'>{data.price} &nbsp;&nbsp;<span>Per adult</span></div>
                                                    <div className='type'>{data.type}</div>
                                                </div>
                                                <div className='line' style={{ width: '100%' }}></div>
                                                {data && data.offer && data.offer.length > 0 && data.offer.map((element, index) => (
                                                    <div className='overview' key={index + 1}>
                                                        <div className='title'>{element.offer_type}</div>
                                                        <div className='purchase-offer'>
                                                            {element.offers.map((item) => (
                                                                <div style={{ display: 'flex', justifyContent: "flex-start", alignItems: "flex-start", gap: "10px", marginTop: "10px" }}>
                                                                    {element.is_add ? 'X' : '-' }
                                                                    <p>{item}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className='book-now-button'>
                                                    <button>Book Now</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
