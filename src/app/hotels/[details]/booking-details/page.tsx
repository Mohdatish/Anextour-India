import React from 'react'
import "../../../styles/hotel.css"
import BreadCrumb from '@/comp/BreadCrumb'
import BigHeadingPara from '@/comp/BigHeadingPara'
import ReadBefore from '@/comp/ReadBefore'

const page = () => {
    return (
        <>
            <div className='container'>
                <BreadCrumb />
                <br />
                <br />
                <BigHeadingPara heading='Review your booking details' span='' />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 mt-3">
                        <div className="detail-card">
                            <div className="card-heading">Guest Details</div>
                            <div className="mt-4 d-flex justify-content-between align-items-center">
                                <span>Guest1</span>
                                <button className="outline-btn">Fill With saved details</button>
                            </div>
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
                            <div className="mt-4 d-flex justify-content-between align-items-center">
                                <span>Guest1</span>
                                <button className="outline-btn">Fill With saved details</button>
                            </div>
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
                            <hr className="mt-4" />
                            <br /><br />
                            <div className="card-heading">Billin contact details</div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                                    <select id="nationality" name="nationality" className="detail-input">
                                        <option value="" disabled selected>Country Code</option>
                                        <option value="afghan">Afghan</option>
                                        <option value="albanian">Albanian</option>
                                        <option value="algerian">Algerian</option>
                                        <option value="american">American</option>
                                    </select>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                                    <input className="detail-input" placeholder="Phonenumber" type="text" />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                                    <input className="detail-input" placeholder="Email*" type="email" />
                                </div>
                            </div>
                        </div>
                        <div className="transfer_section">
                            <div className="transfer_header_area">
                                <h2 className="transfer_main_heading">Pick your transfer</h2>
                                <p className="transfer_main_description">Enjoy a hassle-free journey between the airport and hotel with a transfer. We'll email your confirmation with the pick-up details.</p>
                            </div>

                            <div className="transfer_navigation_area">
                                <h6 className="transfer_navigation_title">Airport To Hotel</h6>
                            </div>

                            <div className="transfer_option_box transfer_option_one">
                                <div className="transfer_details_info">
                                    <span className="transfer_car_icon_text">🚗</span>
                                    <div className="transfer_text_content">
                                        <div className="transfer_vehicle_type">Private Standard Hybrid Car</div>
                                        <div className="transfer_meta_data">40 Min • 4 Seats</div>
                                    </div>
                                </div>
                                <div className="transfer_price_action">
                                    <div className='d-flex flex-column align-items-end gap-1'>
                                        <div className="transfer_amount">₹ 1,986</div>
                                        <span className="transfer_price_unit">for all</span>
                                    </div>
                                    <button className="transfer_button transfer_button_selected">Selected</button>
                                </div>
                            </div>

                            <div className="transfer_option_box transfer_option_two">
                                <div className="transfer_details_info">
                                    <span className="transfer_car_icon_text">🚗</span>
                                    <div className="transfer_text_content">
                                        <div className="transfer_vehicle_type">Private Premium Car</div>
                                        <div className="transfer_meta_data">45 Min • 4 Seats</div>
                                    </div>
                                </div>
                                <div className="transfer_price_action">
                                    <div className='d-flex flex-column gap-1 align-items-end'>
                                        <div className="transfer_amount">₹ 1,986</div>
                                        <span className="transfer_price_unit">for all</span>
                                    </div>
                                    <button className="transfer_button transfer_button_unselected">Select</button>
                                </div>
                            </div>

                            <div className="transfer_option_box transfer_option_three">
                                <div className="transfer_details_info">
                                    <span className="transfer_car_icon_text">🚗</span>
                                    <div className="transfer_text_content">
                                        <div className="transfer_vehicle_type">Private Standard Hybrid Car</div>
                                        <div className="transfer_meta_data">40 Min • 4 Seats</div>
                                    </div>
                                </div>
                                <div className="transfer_price_action">
                                    <div className='d-flex flex-column gap-1 align-items-end'>
                                        <div className="transfer_amount">₹ 1,986</div>
                                        <span className="transfer_price_unit">for all</span>
                                    </div>
                                    <button className="transfer_button transfer_button_unselected">Select</button>
                                </div>
                            </div>
                        </div>
                        <div className="baggage-container">
                            <h5 className="baggage-header">Add baggage New Delhi - Dubai</h5>

                            <div className="accordion" id="baggageAccordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Passenger 1
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#baggageAccordion">
                                        <div className="accordion-body">
                                            <div className="baggage-option">
                                                <div className="baggage-details">
                                                    <div className="baggage-label">Extra Baggage till 0Kg</div>
                                                    <div className="baggage-price">₹ 0</div>
                                                </div>
                                                <button className="baggage-select-button">Select</button>
                                            </div>
                                            <div className="baggage-option">
                                                <div className="baggage-details">
                                                    <div className="baggage-label">Extra Baggage till 5Kg</div>
                                                    <div className="baggage-price">₹ 6,383</div>
                                                </div>
                                                <button className="baggage-select-button">Select</button>
                                            </div>
                                            <div className="baggage-option">
                                                <div className="baggage-details">
                                                    <div className="baggage-label">Extra Baggage till 10Kg</div>
                                                    <div className="baggage-price">₹ 12,766</div>
                                                </div>
                                                <button className="baggage-select-button">Select</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Passenger 2
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#baggageAccordion">
                                        <div className="accordion-body">
                                            <div className="baggage-option">
                                                <div className="baggage-details">
                                                    <div className="baggage-label">Extra Baggage till 0Kg</div>
                                                    <div className="baggage-price">₹ 0</div>
                                                </div>
                                                <button className="baggage-select-button">Select</button>
                                            </div>
                                            <div className="baggage-option">
                                                <div className="baggage-details">
                                                    <div className="baggage-label">Extra Baggage till 5Kg</div>
                                                    <div className="baggage-price">₹ 6,383</div>
                                                </div>
                                                <button className="baggage-select-button">Select</button>
                                            </div>
                                            <div className="baggage-option">
                                                <div className="baggage-details">
                                                    <div className="baggage-label">Extra Baggage till 10Kg</div>
                                                    <div className="baggage-price">₹ 12,766</div>
                                                </div>
                                                <button className="baggage-select-button">Select</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Passenger 3
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#baggageAccordion">
                                        <div className="accordion-body">
                                            <div className="baggage-option">
                                                <div className="baggage-details">
                                                    <div className="baggage-label">Extra Baggage till 0Kg</div>
                                                    <div className="baggage-price">₹ 0</div>
                                                </div>
                                                <button className="baggage-select-button">Select</button>
                                            </div>
                                            <div className="baggage-option">
                                                <div className="baggage-details">
                                                    <div className="baggage-label">Extra Baggage till 5Kg</div>
                                                    <div className="baggage-price">₹ 6,383</div>
                                                </div>
                                                <button className="baggage-select-button">Select</button>
                                            </div>
                                            <div className="baggage-option">
                                                <div className="baggage-details">
                                                    <div className="baggage-label">Extra Baggage till 10Kg</div>
                                                    <div className="baggage-price">₹ 12,766</div>
                                                </div>
                                                <button className="baggage-select-button">Select</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="detail-card">
                            <div className="card-heading">Select your seats</div>
                            <h6>Direct · 4h 05m</h6>
                            <div className="main-detail">
                                <div className="timeline">
                                    <div className="timeline-item">
                                        <div className="circle-verticle"></div>
                                        <div className="details">
                                            <span>Fri 23 Nov • 20:10</span>
                                            <div className="title">
                                                <strong>DEL</strong> • Delhi International Airport
                                            </div>
                                        </div>
                                    </div>
                                    <div className="line"></div>
                                    <div className="timeline-item">
                                        <div className="circle-verticle"></div>
                                        <div className="details">
                                            <span>Fri 23 Nov • 22:45</span>
                                            <div className="title">
                                                <strong>BOM</strong> • Chhatrapati Shivaji International
                                                Airport Mumbai
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="logo">
                                    <img src="/images/place.jpg" />
                                    <span>
                                        Air India <br /> AI929 · Economy
                                    </span>
                                </div>
                            </div>
                            <br /><br />
                            <hr />
                            <br /><br />
                            <div className="mt-4 d-flex justify-content-between align-items-center">
                                <div>
                                    <div className="card-heading">Passengers</div>
                                    <h6>3 of 3 Seat(s) Selected</h6>
                                </div>
                                <div className="d-flex flex-column justify-content-end align-items-end gap-2">
                                    <span>Adult 1 - 1B, Adult 2 - 1E</span>
                                    <h6>₹1,450</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 mt-3">
                                    <div className="seats">
                                        <div className="green-text d-flex justify-content-between align-items-center mt-1">
                                            <div>
                                                {'<'} Exit</div>
                                            <div>Exit {'>>'}</div>
                                        </div>
                                        <div className="row">
                                            <div className="mt-3"></div>
                                            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 p-0">
                                                <div className="d-flex gap-4 justify-content-center">
                                                    <div
                                                        className="d-flex text-center justify-content-center align-items-center flex-column gap-1">
                                                        <div className="mt-1"></div>
                                                        <div className="card-heading">A</div>
                                                        <div className="not-seats"><i className="fa-solid fa-xmark"></i></div>
                                                        <div className="not-seats"><i className="fa-solid fa-xmark"></i></div>
                                                        <div className="blue-seats">$9749</div>
                                                        <div className="blue-seats">$9749</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                    </div>
                                                    <div
                                                        className="d-flex text-center justify-content-center align-items-center flex-column gap-1">
                                                        <div className="mt-1"></div>
                                                        <div className="card-heading">B</div>
                                                        <div className="not-seats"><i className="fa-solid fa-xmark"></i></div>
                                                        <div className="not-seats"><i className="fa-solid fa-xmark"></i></div>
                                                        <div className="blue-seats">$9749</div>
                                                        <div className="blue-seats">$9749</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                    </div>
                                                    <div
                                                        className="d-flex text-center justify-content-center align-items-center flex-column gap-1">
                                                        <div className="mt-1"></div>
                                                        <div className="card-heading">C</div>
                                                        <div className="not-seats"><i className="fa-solid fa-xmark"></i></div>
                                                        <div className="not-seats"><i className="fa-solid fa-xmark"></i></div>
                                                        <div className="blue-seats">$9749</div>
                                                        <div className="blue-seats">$9749</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 p-0">
                                                <div className="d-flex text-center flex-column gap-1 number-col">
                                                    <div className="mt-4"></div>
                                                    <div className="card-heading"></div>
                                                    <div className="invisible-number">1</div>
                                                    <div className="invisible-number">2</div>
                                                    <div className="invisible-number">3</div>
                                                    <div className="invisible-number">4</div>
                                                    <div className="invisible-number">5</div>
                                                    <div className="invisible-number">6</div>
                                                    <div className="invisible-number">7</div>
                                                    <div className="invisible-number">8</div>
                                                    <div className="invisible-number">9</div>
                                                </div>
                                            </div>
                                            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 p-0">
                                                <div className="d-flex gap-4 justify-content-center">
                                                    <div
                                                        className="d-flex text-center justify-content-center align-items-center flex-column gap-1">
                                                        <div className="mt-1"></div>
                                                        <div className="card-heading">D</div>
                                                        <div className="not-seats"><i className="fa-solid fa-xmark"></i></div>
                                                        <div className="not-seats"><i className="fa-solid fa-xmark"></i></div>
                                                        <div className="blue-seats">$9749</div>
                                                        <div className="blue-seats">$9749</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                    </div>
                                                    <div
                                                        className="d-flex text-center justify-content-center align-items-center flex-column gap-1">
                                                        <div className="mt-1"></div>
                                                        <div className="card-heading">E</div>
                                                        <div className="not-seats"><i className="fa-solid fa-xmark"></i></div>
                                                        <div className="not-seats"><i className="fa-solid fa-xmark"></i></div>
                                                        <div className="blue-seats">$9749</div>
                                                        <div className="blue-seats">$9749</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                    </div>
                                                    <div
                                                        className="d-flex text-center justify-content-center align-items-center flex-column gap-1">
                                                        <div className="mt-1"></div>
                                                        <div className="card-heading">F</div>
                                                        <div className="not-seats"><i className="fa-solid fa-xmark"></i></div>
                                                        <div className="not-seats"><i className="fa-solid fa-xmark"></i></div>
                                                        <div className="blue-seats">$9749</div>
                                                        <div className="blue-seats">$9749</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                        <div className="free-seats">Free</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="green-text d-flex justify-content-between align-items-center mt-1">
                                            <div>
                                                {'<'} Exit</div>
                                            <div>Exit {'>>'}</div>
                                        </div>
                                        <br />
                                        <div className="green-text d-flex justify-content-between align-items-center mt-1">
                                            <i className="fa-solid fa-people-arrows"></i>
                                            <i className="fa-solid fa-people-arrows"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
                            </div>
                            <br /><br />
                            <div className="card-heading">Meals</div>
                            <h6>(optional)</h6>
                            <div className="d-flex gap-3 justify-content-start align-items-start">
                                <div> <label className="checkbox-label"><input type="checkbox" />Veg</label> </div>
                                <div> <label className="checkbox-label"><input type="checkbox" /> Non Veg</label> </div>
                            </div>
                            <div className="mt-4 d-flex justify-content-start gap-5 align-items-center">
                                <div className="d-flex gap-3 align-items-center">
                                    <div><i className="fa-solid fa-utensils color-blue-icon"></i></div>
                                    <div className="d-flex flex-column  align-items-start">
                                        <h6>Fruit Cake Slice+ beverage</h6>
                                        <h4>$200</h4>
                                    </div>
                                </div>
                                <div className="outline-btn" style={{ padding: "10px", width: "100px" }}>Add</div>
                            </div>
                            <div className="mt-4 d-flex justify-content-start gap-5 align-items-center">
                                <div className="d-flex gap-3 align-items-center">
                                    <div><i className="fa-solid fa-carrot color-blue-icon"></i></div>
                                    <div className="d-flex flex-column  align-items-start">
                                        <h6>Vegetarian Meal</h6>
                                        <h4>$200</h4>
                                    </div>
                                </div>
                                <div className="outline-btn" style={{ padding: "10px", width: "100px" }}>Add</div>
                            </div>
                            <div className="mt-4 d-flex justify-content-start gap-5 align-items-center">
                                <div className="d-flex gap-3 align-items-center">
                                    <div><i className="fa-solid fa-carrot color-blue-icon"></i></div>
                                    <div className="d-flex flex-column  align-items-start">
                                        <h6>6E Eats choice of the day (veg) + beverage</h6>
                                        <h4>$200</h4>
                                    </div>
                                </div>
                                <div className="outline-btn" style={{ padding: "10px", width: "100px" }}>Add</div>
                            </div>
                        </div>
                        <ReadBefore />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                        <div className="overview-card">
                            <div className="card-heading">
                                Hotel Details
                            </div>
                            <br />
                            <div className="d-flex justify-content-start align-items-center gap-3">
                                <img src="/assets/image.jpg" />
                                <div className="d-flex flex-column gap-2 justify-content-start align-items-start">
                                    <div className="title">Five Palm Hotel</div>
                                    <div className="rating d-flex gap-3 align-items-center">
                                        <div className="d-flex gap-1">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <span>4.5 (143 ratings)</span>
                                    </div>
                                </div>
                            </div>
                            <br /><br />
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex justify-content-start gap-2 flex-column">
                                    <span>Check-in</span>
                                    <div className="title">Sun 26 2025</div>
                                </div>
                                <div className="d-flex justify-content-end gap-2 flex-column">
                                    <span>Check-in</span>
                                    <div className="title">Sun 26 2025</div>
                                </div>
                            </div>
                            <br />
                            <span>Borad type rooms only</span>
                        </div>
                        <br />
                        <div className="flight-card">
                            <div className="card-headers">
                                <h5>Flight Details</h5>
                                <a href="#">Details</a>
                            </div>

                            <div className="flight-entry">
                                <div className="d-flex align-items-center">
                                    <img src="/assets/image.jpg" className="airline-logo" />
                                    <div className="flight-info">
                                        <div className="flight-time">17:10 - 19:50</div>
                                        <div className="flight-route">DEL → DXB · 26 Nov</div>
                                    </div>
                                </div>
                                <div className="flight-meta text-end">
                                    <div>Direct</div>
                                    <div>4h 05m</div>
                                </div>
                            </div>
                            <hr />
                            <div className="flight-entry">
                                <div className="d-flex align-items-center">
                                    <img src="/assets/image.jpg" className="airline-logo" />
                                    <div className="flight-info">
                                        <div className="flight-time">12:15 - 17:05</div>
                                        <div className="flight-route">DXB → DEL · 29 Jan</div>
                                    </div>
                                </div>
                                <div className="flight-meta text-end">
                                    <div>Direct</div>
                                    <div>4h 05m</div>
                                </div>
                            </div>

                        </div>
                        <br />
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
                </div >
            </div >
        </>
    )
}

export default page