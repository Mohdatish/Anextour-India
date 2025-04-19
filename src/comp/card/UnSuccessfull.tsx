import React from 'react'
import "../../../src/app/styles/bookings.css"

const UnSuccessfull = () => {
    return (
        <div className='unsuccessfull'>
            <div className="booking-card">
                <div className="booking-info">
                    <div className="booking-title">Pending Hotel Booking</div>
                    <div className="payment-info">Payment of ₹645 From State Bank of India Credit Card</div>
                    <div className="booking-id">Booking ID - 10000000</div>
                    <div className="booking-date">Booked On - 21 Nov, 09:40 PM</div>
                </div>
                <div className="payment-status">Payment Status Awaited</div>
                <button className="view-details-button">View Details</button>
            </div>
        </div>
    )
}

export default UnSuccessfull