import React from 'react'
import "../styles/profile.css"


const page = () => {
    return (
        <div>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-3">
                        <div className="profile-card">
                            <div className="padding">
                                <div className="d-flex flex-column justify-content-center align-items-center gap-3">
                                    <img src="images/user.jpg" alt="user" />
                                    <h5>Rajkumar</h5>
                                </div>
                            </div>
                            <hr />
                            <div className="padding">
                                <ul>
                                    <li>
                                        <div className="d-flex gap-3 justify-content-start align-items-center">
                                            <i className="fa-solid fa-user"></i>
                                            <span>My Profile</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex gap-3 justify-content-start align-items-center">
                                            <i className="fa-solid fa-users"></i>
                                            <span>Co Travellers</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex gap-3 justify-content-start align-items-center">
                                            <i className="fa-solid fa-right-from-bracket"></i>
                                            <span>Logout</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 mt-3">
                        <div className="profile-card">
                            <div className="padding">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="detail-heading">Profile Details</div>
                                    <button className="profile-btn">Edit</button>
                                </div>
                                <div className="details-overview row mt-3">
                                    <div className="col-4">Name:</div>
                                    <div className="col-8"><span>Rajkumar</span></div>

                                    <div className="col-4">Birthday:</div>
                                    <div className="col-8"><span>2001-04-29</span></div>

                                    <div className="col-4">Gender:</div>
                                    <div className="col-8"><span>Male</span></div>

                                    <div className="col-4">Marital Status:</div>
                                    <div className="col-8"><span>Single</span></div>

                                    <div className="col-4">Address:</div>
                                    <div className="col-8"><span>Prabhat Market</span></div>

                                    <div className="col-4">State:</div>
                                    <div className="col-8"><span>Uttar Pradesh</span></div>

                                    <div className="col-4">Pincode:</div>
                                    <div className="col-8"><span>244001</span></div>
                                </div>


                            </div>
                        </div>
                        <div className="profile-card mt-4">
                            <div className="padding">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="detail-heading">Co Travellers  </div>
                                    <button className="profile-btn">Edit</button>
                                </div>
                                <div className="details-overview row mt-3">
                                    <div className="col-4">Name:</div>
                                    <div className="col-8"><span>Rajkumar</span></div>

                                    <div className="col-4">Birthday:</div>
                                    <div className="col-8"><span>2001-04-29</span></div>

                                    <div className="col-4">Gender:</div>
                                    <div className="col-8"><span>Male</span></div>

                                    <div className="col-4">Marital Status:</div>
                                    <div className="col-8"><span>Single</span></div>

                                    <div className="col-4">Address:</div>
                                    <div className="col-8"><span>Prabhat Market</span></div>

                                    <div className="col-4">State:</div>
                                    <div className="col-8"><span>Uttar Pradesh</span></div>

                                    <div className="col-4">Pincode:</div>
                                    <div className="col-8"><span>244001</span></div>
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