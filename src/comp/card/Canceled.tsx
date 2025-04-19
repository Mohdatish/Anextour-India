import React from 'react'
import "../../../src/app/styles/bookings.css"

const Canceled = () => {
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
                            <div className="booking-id">Thu 31 Oct 2023 - Fri 1 Nov 2023</div>
                            <div className="confirmed" style={{color:"red"}}>Cancelled</div>
                        </div>

                    </div>
                </div>
               <div className='amount'>$2500</div>
            </div>

        </div>

    )
}

export default Canceled