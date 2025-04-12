import React from 'react'
import "../app/styles/left-filter.css"

const LeftFilter = () => {
    return (
        <div>
            <div className="filter web-filter-section">
                <h6>Filter by:</h6>
                <div className="line"></div>

                <p>Price</p>
                <div className="slider-container p-4">
                    <input type="range" min="0" max="100" className="slider" id="price-range" />
                </div>
                <div className="min-max-value">
                    <div>₹ 10,357</div>
                    <div>₹ 340,357</div>
                </div>
                <div className="line"></div>

                <p>Stops</p>
                <label className="checkbox-label"><input type="checkbox" /> None Stop</label>
                <label className="checkbox-label"><input type="checkbox" /> One Stop</label>
                <label className="checkbox-label"><input type="checkbox" /> 1+ Stop</label>
                <div className="line"></div>

                <p>Duration</p>
                <label className="checkbox-label">Maximum Travel Time</label>
                <div className="slider-container p-4">
                    <input type="range" min="0" max="100" className="slider" id="duration-range" />
                </div>
                <div className="min-max-value">
                    <div>₹ 10,357</div>
                    <div>₹ 340,357</div>
                </div>
                <div className="line"></div>

                <p>Baggage Included</p>
                <label className="checkbox-label"><input type="checkbox" /> Yes</label>
                <label className="checkbox-label"><input type="checkbox" /> No</label>
                <div className="line"></div>

                <p>Class</p>
                <label className="checkbox-label"><input type="checkbox" /> Business</label>
                <label className="checkbox-label"><input type="checkbox" /> Premium Economy</label>
                <label className="checkbox-label"><input type="checkbox" /> Economy</label>
                <div className="line"></div>

                <p>Airlines</p>
                <label className="checkbox-label"><input type="checkbox" /> IndiGo</label>
                <label className="checkbox-label"><input type="checkbox" /> Air India</label>
                <label className="checkbox-label"><input type="checkbox" /> SpiceJet</label>
                <label className="checkbox-label"><input type="checkbox" /> Emirates Airlines</label>
                <label className="checkbox-label"><input type="checkbox" />  Qatar Airways</label>
                <button className="transparent-button">Show More</button>
                <div className="line"></div>

                <p>Layover Airport</p>
                <label className="checkbox-label"><input type="checkbox" /> Abu Dhabi (AUH)</label>
                <label className="checkbox-label"><input type="checkbox" /> Addis Ababa (ADD)</label>
                <label className="checkbox-label"><input type="checkbox" /> Ahmedabad (AMD)</label>
                <label className="checkbox-label"><input type="checkbox" /> Almaty (ALA)</label>
                <label className="checkbox-label"><input type="checkbox" /> Amritsar (ATQ)</label>
            </div>
        </div>
    )
}

export default LeftFilter