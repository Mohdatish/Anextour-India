'use client'

import BreadCrumb from '@/comp/BreadCrumb'
import React from 'react'
import "../styles/bookings.css"
import MyBooking from '@/comp/card/MyBooking'
import UnSuccessfull from '@/comp/card/UnSuccessfull'
import Upcoming from '@/comp/card/Upcoming'
import Canceled from '@/comp/card/Canceled'
import Completed from '@/comp/card/Completed'

const page = () => {
    return (
        <div className="container booking-tabs">
            <div className="top-navigator">
                <br /><br /><br />
                <BreadCrumb />
            </div>
            <br /><br /><br />
            <h2>My Bookings</h2>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#upcoming">Upcoming</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#cancelled">Cancelled</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#completed">Completed</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#unsuccessful">Unsuccessful</a>
                </li>
            </ul>

            <div className="tab-content mt-3">
                <div className="tab-pane fade show active" id="completed">
                    <Completed />
                </div>
                <div className="tab-pane fade" id="upcoming">
                    <Upcoming />
                </div>
                <div className="tab-pane fade" id="cancelled">
                    <Canceled />
                </div>
                <div className="tab-pane fade" id="unsuccessful">
                    <UnSuccessfull />
                </div>
            </div>
        </div>
    )
}

export default page