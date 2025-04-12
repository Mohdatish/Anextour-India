import Image from 'next/image'
import React from 'react'
import "../../app/styles/hotel.css"

const HotelCard = () => {
  return (
    <div className="hotel-card">
      <div className='row'>
        <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
          <div style={{ position: 'relative', width: '100%', height: 'maxContain', aspectRatio: '10 / 9' }}>
            <Image
              src="/assets/image.jpg"
              alt="hotel"
              fill
              style={{ objectFit: 'cover', height: "100%", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }}
            />
          </div>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8 p-1'>
          <div className="hotel-details">
            <div>
              <div className="location">Dubai, United Arab Emirates</div>
              <div className="hotel-name">Five Palm Jumeirah Dubai</div>
              <div className="stars mb-2">
                ★★★★★
              </div>
              <div className="d-flex align-items-center mb-1 fs-6 ">
                <i className="bi bi-calendar info-icon"></i><span className='details-info-text'>26 Jan – 29 Jan (3 nights)</span> 
              </div>
              <div className="d-flex align-items-center mb-1">
                <i className="bi bi-airplane info-icon"></i><span className='details-info-text'> Flight included</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-check-circle info-icon"></i><span className='details-info-text'> Free cancellation</span>
              </div>
              <div className="small-text"><strong>Junior Suite</strong><br/>Room only</div>
            </div>
            <div className="text-end">
              <div className="small-text" style={{border:"none",padding:0}}>HOTEL + FLIGHT</div>
              <div className="small-text mt-4"  style={{border:"none",padding:0}}>starting from</div>
              <div className="price">₹2,00,825</div>
              <button className="select-btn">Select</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelCard