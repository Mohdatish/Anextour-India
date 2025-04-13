import React from 'react'

const TransferCard = () => {
    return (
        <div>
            <div className="cab-card">
                <div className="cab-info">
                    <div className='d-flex flex-column align-items-start'>
                        <div className='d-flex  align-items-start'>
                            <span className="cab-icon-emoji">🚕</span>
                            <div className="cab-details">
                                <div className="cab-name">Indica, Swift</div>
                                <div className="cab-rating">
                                    <span className="cab-rating-stars">★★★★★</span>
                                    <span>4.5 (140 ratings)</span>
                                </div>
                                <div className="cab-features">Hatchback • AC • 4 Seats • 148 Kms Included</div>
                            </div>
                        </div>
                        <div className="additional-info">
                            <div className="info-item">
                                <span className="info-label">Extra km fare</span>
                                ₹14.3/km after 148 kms
                            </div>
                            <div className="info-item">
                                <span className="info-label">Fuel Type</span>
                                CNG with refill breaks
                            </div>
                            <div className="info-item">
                                <span className="info-label">Cancellation</span>
                                Free till 1 hour of departure
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
    )
}

export default TransferCard