import React from 'react'

const MainSearchBar = () => {
  return (
    <div className="container">
    <div className="search-bar">
        <ul className="nav nav-pills gap-4" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills1-tab" data-bs-toggle="pill" data-bs-target="#pills1"
                    type="button" role="tab" aria-controls="pills1" aria-selected="true"><i
                        className="fa-solid fa-hotel"></i>&nbsp;Hotel</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills2-tab" data-bs-toggle="pill" data-bs-target="#pills2"
                    type="button" role="tab" aria-controls="pills2" aria-selected="false"><i
                        className="fa-solid fa-plane"></i>&nbsp;Flights</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills3-tab" data-bs-toggle="pill" data-bs-target="#pills3"
                    type="button" role="tab" aria-controls="pills3" aria-selected="false"><i
                        className="fa-solid fa-suitcase-rolling"></i>&nbsp;Hotel &
                    Flights</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills4-tab" data-bs-toggle="pill" data-bs-target="#pills4"
                    type="button" role="tab" aria-controls="pills4" aria-selected="false"><i
                        className="fa-solid fa-car"></i>&nbsp;Transfer</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills5-tab" data-bs-toggle="pill" data-bs-target="#pills5"
                    type="button" role="tab" aria-controls="pills5" aria-selected="false"><i
                        className="fa-solid fa-truck-fast"></i>&nbsp;Packages</button>
            </li>
        </ul>
        <hr className="line" />
        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills1" role="tabpanel" aria-labelledby="pills1-tab">
                <div className="row mb-2">

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                        <div className="filter-set">
                            <p>Destination</p>
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-location-dot"></i>
                                <select name="cars" default-value="">
                                    <option value="">Country, City, Hotel </option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                        <div className="filter-set">
                            <p>Check-In / Check-Out </p>
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-calendar"></i>
                                <input type="text" id="daterange" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                        <div className="filter-set">
                            <p>Rooms & Guests </p>
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-user-group"></i>
                                <div className="dropdown">
                                    <div className="custom-dropdown" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <span>1 room, 2 guests</span>
                                    </div>
                                    <ul className="dropdown-menu">
                                        <li><strong>Room 1</strong></li>
                                        <li className="mb-2">
                                            <div
                                                className="dark-text d-flex justify-content-between number-dropdown align-items-center">
                                                <label className="form-label">Adults</label>
                                                <select className="number">
                                                    <option>1</option>
                                                    <option >2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                className="dark-text d-flex justify-content-between number-dropdown align-items-center">
                                                <label className="form-label">Children</label>
                                                <select className="number">
                                                    <option >0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li className="small-text mt-4">
                                            <p>
                                                Please provide the right number of children along with their
                                                age
                                                for best options and prices.
                                            </p>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li className="small-text mt-3">
                                            <p>
                                                Age of children
                                            </p>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <button className="addmore">+ Add more room</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 ml-2 mt-2">
                        <button className="main-btn">Search</button>
                    </div>
                </div>
            </div>

            <div className="tab-pane fade show" id="pills2" role="tabpanel" aria-labelledby="pills2-tab">
                <ul className="nav nav-radio radio-set" id="radio-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="radio-home-tab" data-bs-toggle="pill"
                            data-bs-target="#radio-home" type="button" role="tab" aria-controls="radio-home"
                            aria-selected="true">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="radioTab" id="radio1"
                                    value="tab1" defaultChecked />
                                <label className="form-check-label" htmlFor="radio1">One Way</label>
                            </div>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="radio-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#radio-profile" type="button" role="tab"
                            aria-controls="radio-profile" aria-selected="false">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="radioTab" id="radio2"
                                    value="tab2" />
                                <label className="form-check-label" htmlFor="radio2">Round Trip</label>
                            </div>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="radio-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#radio-contact" type="button" role="tab"
                            aria-controls="radio-contact" aria-selected="false">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="radioTab" id="radio3"
                                    value="tab3" />
                                <label className="form-check-label" htmlFor="radio3">Multi City</label>
                            </div>
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="radio-tabContent">
                    <div className="tab-pane fade show active" id="radio-home" role="tabpanel"
                        aria-labelledby="radio-home-tab">
                        <div className="radio-onway mb-2 p-3">
                            <div>
                                <div className="filter-set-radio">
                                    <p>Departure Airport</p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <select name="cars" default-value="">
                                            <option value="">Search Airport </option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="filter-set-radio">
                                    <p>Arrival Airport</p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <select name="cars" default-value="">
                                            <option value="">Search Airport </option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="filter-set-radio">
                                    <p>Add date </p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-calendar"></i>
                                        <input type="text" placeholder="Add date" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="filter-set-radio">
                                    <p>Rooms & Guests </p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-user-group"></i>
                                        <div className="dropdown">
                                            <div className="custom-dropdown" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                <span>1 room, 2 guests</span>
                                            </div>
                                            <ul className="dropdown-menu">
                                                <li className="mb-2">
                                                    <div
                                                        className="dark-text d-flex justify-content-between number-dropdown align-items-center">
                                                        <label className="form-label">Adults</label>
                                                        <select className="number">
                                                            <option>1</option>
                                                            <option >2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                        </select>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div
                                                        className="dark-text d-flex justify-content-between number-dropdown align-items-center">
                                                        <label className="form-label">Children</label>
                                                        <select className="number">
                                                            <option >0</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                        </select>
                                                    </div>
                                                </li>
                                                <li className="mb-2">
                                                    <div
                                                        className="dark-text d-flex justify-content-between number-dropdown align-items-center">
                                                        <label className="form-label">Adults</label>
                                                        <select className="number">
                                                            <option>1</option>
                                                            <option >2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                        </select>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div
                                                        className="dark-text d-flex justify-content-between number-dropdown align-items-center">
                                                        <label className="form-label">Children</label>
                                                        <select className="number">
                                                            <option >0</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                        </select>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className="main-btn">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="radio-profile" role="tabpanel"
                        aria-labelledby="radio-profile-tab">
                        <div className="row mb-2 mt-2 p-3">
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2 p-2">
                                <div className="filter-set" style={{padding:'0px'}}>
                                    <p>Departure Airport</p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <select name="cars" default-value="">
                                            <option value="">Search Airport </option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2 p-2">
                                <div className="filter-set"  style={{padding:'0px'}}>
                                    <p>Arrival Airport</p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <select name="cars" default-value="">
                                            <option value="">Country, City, Hotel </option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2 p-2">
                                <div className="filter-set"  style={{padding:'0px'}}>
                                    <p>Add date </p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-calendar"></i>
                                        <input type="text" placeholder="Add-date" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2 p-2">
                                <div className="filter-set"  style={{padding:'0px'}}>
                                    <p>Add date </p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-calendar"></i>
                                        <input type="text" placeholder="Add-date" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2 p-2">
                                <div className="filter-set"  style={{padding:'0px'}}>
                                    <p>Rooms & Guests </p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-user-group"></i>
                                        <div className="dropdown">
                                            <div className="custom-dropdown" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                <span>1 room, 2 guests</span>
                                            </div>
                                            <ul className="dropdown-menu">
                                                <li className="mb-2">
                                                    <div
                                                        className="dark-text d-flex justify-content-between number-dropdown align-items-center">
                                                        <label className="form-label">Adults</label>
                                                        <select className="number">
                                                            <option>1</option>
                                                            <option >2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                        </select>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div
                                                        className="dark-text d-flex justify-content-between number-dropdown align-items-center">
                                                        <label className="form-label">Children</label>
                                                        <select className="number">
                                                            <option >0</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                        </select>
                                                    </div>
                                                </li>
                                                <li className="mb-2">
                                                    <div
                                                        className="dark-text d-flex justify-content-between number-dropdown align-items-center">
                                                        <label className="form-label">Adults</label>
                                                        <select className="number">
                                                            <option>1</option>
                                                            <option >2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                        </select>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div
                                                        className="dark-text d-flex justify-content-between number-dropdown align-items-center">
                                                        <label className="form-label">Children</label>
                                                        <select className="number">
                                                            <option >0</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                        </select>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2 p-2">
                                <button className="main-btn mt-2" style={{minWidth:"0px"}}>Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="radio-contact" role="tabpanel"
                        aria-labelledby="radio-contact-tab">
                        <div className="row mb-2">

                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                                <div className="filter-set">
                                    <p>Destination</p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <select name="cars" default-value="">
                                            <option value="">Country, City, Hotel </option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                                <div className="filter-set">
                                    <p>Check-In / Check-Out </p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-calendar"></i>
                                        <input type="text" id="daterange" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                                <div className="filter-set">
                                    <p>Rooms & Guests </p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-user-group"></i>
                                        <div className="dropdown">
                                            <div className="custom-dropdown" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                <span>1 room, 2 guests</span>
                                            </div>
                                            <ul className="dropdown-menu">
                                                <li><strong>Room 1</strong></li>
                                                <li className="mb-2">
                                                    <div
                                                        className="dark-text d-flex justify-content-between number-dropdown align-items-center">
                                                        <label className="form-label">Adults</label>
                                                        <select className="number">
                                                            <option>1</option>
                                                            <option >2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                        </select>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div
                                                        className="dark-text d-flex justify-content-between number-dropdown align-items-center">
                                                        <label className="form-label">Children</label>
                                                        <select className="number">
                                                            <option >0</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                        </select>
                                                    </div>
                                                </li>
                                                <li className="small-text mt-3">
                                                    <p>
                                                        Please provide the right number of children along
                                                        with their
                                                        age
                                                        for best options and prices.
                                                    </p>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li className="small-text mt-3">
                                                    <p>
                                                        Age of children
                                                    </p>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                    <button className="addmore">+ Add more room</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 ml-2 mt-2">
                                <button className="main-btn">Search</button>
                            </div>
                        </div>
                        <div className="row mb-2 p-3">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                                <div className="filter-set">
                                    <p>Departure Airport</p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <select name="cars" default-value="">
                                            <option value="">Search Airport</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                                <div className="filter-set">
                                    <p>Arrival Airport</p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <select name="cars" default-value="">
                                            <option value="">Search Airport</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                                <div className="filter-set">
                                    <p>Check-In / Check-Out </p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-calendar"></i>
                                        <input type="text" id="daterange" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 ml-2 mt-2">
                                <button className="main-btn">Add another city</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tab-pane fade show" id="pills3" role="tabpanel" aria-labelledby="pills3-tab">
                <div className="radio-onway mb-2 p-3">
                    <div>
                        <div className="filter-set-radio">
                            <p>Departure Airport</p>
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-location-dot"></i>
                                <select name="cars" default-value="">
                                    <option value="">Search Airport </option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="filter-set-radio">
                            <p>Destination</p>
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-location-dot"></i>
                                <select name="cars" default-value="">
                                    <option value="">Country, city, Hotel </option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="filter-set-radio">
                            <p>Check-In / Check-Out </p>
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-calendar"></i>
                                <input type="text" id="daterange" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="filter-set-radio">
                            <p>Rooms & Guests </p>
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-user-group"></i>
                                <div className="dropdown">
                                    <div className="custom-dropdown" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <span>1 room, 2 guests</span>
                                    </div>
                                    <ul className="dropdown-menu">
                                        <li className="mb-2">
                                            <div
                                                className="dark-text d-flex justify-content-between number-dropdown align-items-center">
                                                <label className="form-label">Adults</label>
                                                <select className="number">
                                                    <option>1</option>
                                                    <option >2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                className="dark-text d-flex justify-content-between number-dropdown align-items-center">
                                                <label className="form-label">Children</label>
                                                <select className="number">
                                                    <option >0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li className="mb-2">
                                            <div
                                                className="dark-text d-flex justify-content-between number-dropdown align-items-center">
                                                <label className="form-label">Adults</label>
                                                <select className="number">
                                                    <option>1</option>
                                                    <option >2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                className="dark-text d-flex justify-content-between number-dropdown align-items-center">
                                                <label className="form-label">Children</label>
                                                <select className="number">
                                                    <option >0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="main-btn">Search</button>
                    </div>
                </div>
            </div>

            <div className="tab-pane fade show" id="pills4" role="tabpanel" aria-labelledby="pills4-tab">
                <ul className="nav nav-radio radio-set" id="radio-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="radio2-home-tab" data-bs-toggle="pill"
                            data-bs-target="#radio2-home" type="button" role="tab" aria-controls="radio2-home"
                            aria-selected="true">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="radioTab" id="radio1"
                                    value="tab1" defaultChecked />
                                <label className="form-check-label" htmlFor="radio1">Point to Point</label>
                            </div>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="radio2-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#radio2-profile" type="button" role="tab"
                            aria-controls="radio2-profile" aria-selected="false">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="radioTab" id="radio2"
                                    value="tab2" />
                                <label className="form-check-label" htmlFor="radio2">Airport pickup</label>
                            </div>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="radio2-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#radio2-contact" type="button" role="tab"
                            aria-controls="radio2-contact" aria-selected="false">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="radioTab" id="radio3"
                                    value="tab3" />
                                <label className="form-check-label" htmlFor="radio3">Airport drop off</label>
                            </div>
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="radio-tabContent">
                    <div className="tab-pane fade show active" id="radio2-home" role="tabpanel"
                        aria-labelledby="radio2-home-tab">
                        <div className="radio-onway mb-2 p-3">
                            <div>
                                <div className="filter-set-radio">
                                    <p>From</p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <select name="cars" default-value="">
                                            <option value="">Search Airport </option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="filter-set-radio">
                                    <p>To</p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <select name="cars" default-value="">
                                            <option value="">Search Airport </option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="filter-set-radio">
                                    <p>Departure Date
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-calendar"></i>
                                        <input type="text" placeholder="Add date" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="filter-set-radio">
                                    <p>Pickup time </p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <select name="cars" default-value="">
                                            <option value="">Choose time </option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className="main-btn">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="radio2-profile" role="tabpanel"
                        aria-labelledby="radio2-profile-tab">
                        <div className="radio-onway mb-2 p-3">
                            <div>
                                <div className="filter-set-radio">
                                    <p>From</p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <select name="cars" default-value="">
                                            <option value="">Search Airport </option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="filter-set-radio">
                                    <p>To</p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <select name="cars" default-value="">
                                            <option value="">Search HOtel </option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="filter-set-radio">
                                    <p>Departure Date
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-calendar"></i>
                                        <input type="text" placeholder="Add date" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="filter-set-radio">
                                    <p>Pickup time </p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <select name="cars" default-value="">
                                            <option value="">Choose time </option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className="main-btn">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="radio2-contact" role="tabpanel"
                        aria-labelledby="radio2-contact-tab">
                        <div className="radio-onway mb-2 p-3">
                            <div>
                                <div className="filter-set-radio">
                                    <p>From</p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <select name="cars" default-value="">
                                            <option value="">Search Airport </option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="filter-set-radio">
                                    <p>To</p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <select name="cars" default-value="">
                                            <option value="">Search Hotel </option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="filter-set-radio">
                                    <p>Departure Date
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-calendar"></i>
                                        <input type="text" placeholder="Add date" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="filter-set-radio">
                                    <p>Pickup time </p>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <select name="cars" default-value="">
                                            <option value="">Choose time </option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className="main-btn">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tab-pane fade show" id="pills5" role="tabpanel" aria-labelledby="pills5-tab">
                <div className="p-3">
                    Comming soon
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default MainSearchBar