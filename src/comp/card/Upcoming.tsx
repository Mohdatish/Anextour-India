import React from 'react'
import "../../../src/app/styles/bookings.css"

const Upcoming = () => {
    return (
        <div className='upcoming'>
            <div className="booking-card">
                <div className="booking-image">
                    <img src="/assets/image.jpg" alt="Avataara Resort & Spa" />
                </div>
                <div className="booking-details">
                    <div className='d-flex gap-4'>
                        <div className="hotel-name">
                            Avataara Resort & Spa
                            <div className="location">Mohali, India</div>
                        </div>
                        <div >
                            <div className="rating">
                                ★★★★★ 4.5 (143 ratings)
                            </div>
                        </div>
                    </div>
                    <div className='d-flex gap-5 justify-content-start align-items-center'>
                        <div>
                            <div className="features">Mohali • Free Cancellation</div>
                            <div className="booking-id">Booking ID - 10000000</div>
                            <div className="confirmed">Confirmed</div>
                        </div>
                        <div className="check-in-out">
                            <div>
                                CHECK-IN<br />
                                <strong>Thu 31 Oct 2023</strong><br />
                                from 12:00
                            </div>
                            <div>
                                CHECK-OUT<br />
                                <strong>Fri 1 Nov 2023</strong><br />
                                until 11:00
                            </div>
                        </div>
                    </div>
                </div>
                <button className="action-button">View & Manage Booking</button>
            </div>

        </div>

    )
}

export default Upcoming