import React from 'react'
import "../styles/modal.css"

const page = () => {
    return (
        <div className='container mt-4'>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#otpModal">
                Launch OTP modal
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
        </div>
    )
}

export default page
