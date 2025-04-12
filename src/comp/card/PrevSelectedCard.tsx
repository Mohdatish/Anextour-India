import Image from 'next/image'
import React from 'react'
import "../../app/styles/hotel-flight.css"

const PrevSelectedCard = () => {
    return (
        <div>
            <div className="flight-card-wrapper mt-4">
                <div className="flight-label">Outbound</div>

                <div className="flight-card">
                    <Image src="/assets/image.jpg" alt="Airline Logo" className="flight-logo me-3" width={10} height={10} />

                    <div className="flight-info me-3">
                        <div className="flight-time">17:10</div>
                        <small>DEL · 26 Jan</small>
                    </div>

                    <div className="flight-route">
                        <div className="flight-line">
                            <span className="direct-tag">DIRECT</span>
                        </div>
                        <div className="duration">4h 05m</div>
                    </div>

                    <div className="flight-info ms-3">
                        <div className="flight-time">19:50</div>
                        <small>DXB · 26 Jan</small>
                    </div>

                    <div className="flight-icons ms-3">
                        <i className="bi bi-suitcase2-fill"></i>
                        <i className="bi bi-suitcase2"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrevSelectedCard