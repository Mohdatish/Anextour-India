import React from 'react'
import "../../styles/transfer.css"
import "../../styles/hotel.css"

const page = () => {
    return (
        <div className="container mt-4">
            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8'>
                    <div className="details-container">
                        <div className="cab-info" style={{ border: 'none' }}>
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
                        <br />
                        <hr />
                        <div className="details-header">
                            <h5 className="details-main-title">Driver & Cab details</h5>
                            <p className="details-description">Cab operator will be assigned on booking completion. Cab and driver details will be shared up to 30 mins prior to departure.</p>
                        </div>
                        <hr />
                        <div className="inclusion-exclusion-section">
                            <div className="inclusion-list">
                                <h6 className="list-title">Inclusions</h6>
                                <div className="list-item">
                                    <span className="check-icon">✓</span>
                                    Parking Charges
                                </div>
                                <div className="list-item">
                                    <span className="check-icon">✓</span>
                                    State Tax
                                </div>
                                <div className="list-item">
                                    <span className="check-icon">✓</span>
                                    Toll Charges
                                </div>
                                <div className="list-item">
                                    <span className="check-icon">✓</span>
                                    148 Kms
                                </div>
                                <div className="list-item">
                                    <span className="check-icon">✓</span>
                                    Driver Allowance
                                </div>
                                <div className="list-item">
                                    <span className="check-icon">✓</span>
                                    Only One Pickup and Drop
                                </div>
                            </div>
                            <div className="exclusion-list">
                                <h6 className="list-title">Exclusions</h6>
                                <div className="list-item">
                                    <span className="asterisk-icon">*</span>
                                    Fare beyond 148 Kms ₹ 14.2/Km
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="details-header">
                            <h5 className="details-main-title">Location Details</h5>
                        </div>
                        <input className='detail-input w-100 mb-3' placeholder='Pick up address' type='text' />
                        <input className='detail-input w-100' placeholder='Drop off address' type='text' />
                        <hr />
                        <br />
                        <h5 className="details-main-title">Treveller Information</h5>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                                <input className="detail-input" placeholder="Firstname" type="text" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                                <input className="detail-input" placeholder="LastName" type="text" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                                <input className="detail-input" placeholder="Country Code" type="text" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                                <input className="detail-input" placeholder="Phonenumber" type="text" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                                <input className="detail-input" placeholder="date_of_birth" type="date" />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                                <select id="nationality" name="nationality" className="detail-input">
                                    <option value="" disabled selected>Select your nationality</option>
                                    <option value="afghan">Afghan</option>
                                    <option value="albanian">Albanian</option>
                                    <option value="algerian">Algerian</option>
                                    <option value="american">American</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                    <div className="price-card2">
                        <div className="card-heading">Price Details</div>
                        <br />
                        <div className="d-flex justify-content-between align-items-center">
                            <h5>1 Room x 1 Night</h5>
                            <h5>$2500</h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <h6>Tax Charges</h6>
                            <h6>$250</h6>
                        </div>
                        <br />
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>1 Room x 1 Night</h4>
                            <h4>$2500</h4>
                        </div>
                    </div>
                    <br />
                    <div className="terms-text">
                        By clicking on the button below, I acknowledge that I have reviewed the<span>Fare Rules</span>, the <span>Policy</span>, and have reviewed and accept the <span>Agreement</span>  and <span>Terms of</span> Service of Anextour.
                    </div>
                    <button className="fill-btn mt-4 w-100">Continue</button>
                </div>
            </div>

        </div>
    )
}

export default page