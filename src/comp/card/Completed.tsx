import React from 'react'
import "../../../src/app/styles/bookings.css"

const Completed = () => {
    return (
        <div className='completed'>
            <div className="container-compl">
                <div className="flight-info">
                    <div className="flight-route">New Delhi → Dubai</div>
                    <div className="flight-details">One Way Flight • Booking ID - 10000000</div>
                    <div className="details-container">
                        <div className="departure">
                            <div className="label">FROM</div>
                            <div className="time">Thu 31 Oct 2023 12:00 PM</div>
                            <div className="airport">DEL - New Delhi</div>
                            <div className="status">Completed</div>
                        </div>
                        <div className="arrival">
                            <div className="label">TO</div>
                            <div className="time">Fri 1 Nov 2023 04:00 PM</div>
                            <div className="airport">DXB - Dubai</div>
                        </div>
                    </div>
                </div>
                <div className="airline-info">
                    <div className="airline-logo">
                        <img src="/assets/image.jpg" alt="IndiGo" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                    </div>
                    <div className="airline-details">
                        <div>IndiGo</div>
                        <div>6E909 Economy</div>
                    </div>
                </div>
                <button className="manage-booking-button">View & Manage Booking</button>
            </div>
        </div>

    )
}

export default Completed