import React from 'react'

const Crousel = () => {
  return (
    <div>
         <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false"
            data-bs-interval="false">
            <div className="d-flex justify-content-between align-items-center">
                <div className="heading-container mt-3">
                    <p>Trending <span className="bold-text">Holidays</span></p>
                    <div className="underline"></div>
                </div>
                <br /><br /><br />
                <div className="mt-4">
                    <button className="carousel-control-prev" type="button"
                        data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button"
                        data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="carousel-inner mt-4">
                <div className="carousel-item active">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="card w-100">
                                <img src="/assets/image.jpg" className="card-img-top" alt="/assets/image.jpg" />
                                <div className="card-body">
                                    <h5 className="card-title">EstradaA de Ferreiras, Alpouvar, 8200-397 Albufeira,
                                        Algarve, Albufeira, Portugal</h5>
                                    <p className="card-text">Clube Albufeira Garden Village</p>
                                    <div className="d-flex gap-2 mt-2">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <div className="d-flex gap-2 mt-4 align-items-center">
                                        <i className="fa-solid fa-utensils"></i>
                                        <p>All inclusive</p>
                                    </div>
                                </div>
                            </div>
                            <div className="price-card">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p>Price per night from:<br />
                                        <span>$23</span>(per person)
                                    </p>
                                    <button className="view">View</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="card w-100">
                                <img src="/assets/image.jpg" className="card-img-top" alt="/assets/image.jpg" />
                                <div className="card-body">
                                    <h5 className="card-title">EstradaA de Ferreiras, Alpouvar, 8200-397 Albufeira,
                                        Algarve, Albufeira, Portugal</h5>
                                    <p className="card-text">Clube Albufeira Garden Village</p>
                                    <div className="d-flex gap-2 mt-2">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <div className="d-flex gap-2 mt-4 align-items-center">
                                        <i className="fa-solid fa-utensils"></i>
                                        <p>All inclusive</p>
                                    </div>
                                </div>
                            </div>
                            <div className="price-card">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p>Price per night from:<br />
                                        <span>$23</span>(per person)
                                    </p>
                                    <button className="view">View</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="card w-100">
                                <img src="/assets/image.jpg" className="card-img-top" alt="/assets/image.jpg" />
                                <div className="card-body">
                                    <h5 className="card-title">EstradaA de Ferreiras, Alpouvar, 8200-397 Albufeira,
                                        Algarve, Albufeira, Portugal</h5>
                                    <p className="card-text">Clube Albufeira Garden Village</p>
                                    <div className="d-flex gap-2 mt-2">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <div className="d-flex gap-2 mt-4 align-items-center">
                                        <i className="fa-solid fa-utensils"></i>
                                        <p>All inclusive</p>
                                    </div>
                                </div>
                            </div>
                            <div className="price-card">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p>Price per night from:<br />
                                        <span>$23</span>(per person)
                                    </p>
                                    <button className="view">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="card w-100">
                                <img src="/assets/image.jpg" className="card-img-top" alt="/assets/image.jpg" />
                                <div className="card-body">
                                    <h5 className="card-title">EstradaA de Ferreiras, Alpouvar, 8200-397 Albufeira,
                                        Algarve, Albufeira, Portugal</h5>
                                    <p className="card-text">Clube Albufeira Garden Village</p>
                                    <div className="d-flex gap-2 mt-2">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <div className="d-flex gap-2 mt-4 align-items-center">
                                        <i className="fa-solid fa-utensils"></i>
                                        <p>All inclusive</p>
                                    </div>
                                </div>
                            </div>
                            <div className="price-card">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p>Price per night from:<br />
                                        <span>$23</span>(per person)
                                    </p>
                                    <button className="view">View</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="card w-100">
                                <img src="/assets/image.jpg" className="card-img-top" alt="/assets/image.jpg" />
                                <div className="card-body">
                                    <h5 className="card-title">EstradaA de Ferreiras, Alpouvar, 8200-397 Albufeira,
                                        Algarve, Albufeira, Portugal</h5>
                                    <p className="card-text">Clube Albufeira Garden Village</p>
                                    <div className="d-flex gap-2 mt-2">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <div className="d-flex gap-2 mt-4 align-items-center">
                                        <i className="fa-solid fa-utensils"></i>
                                        <p>All inclusive</p>
                                    </div>
                                </div>
                            </div>
                            <div className="price-card">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p>Price per night from:<br />
                                        <span>$23</span>(per person)
                                    </p>
                                    <button className="view">View</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="card w-100">
                                <img src="/assets/image.jpg" className="card-img-top" alt="/assets/image.jpg" />
                                <div className="card-body">
                                    <h5 className="card-title">EstradaA de Ferreiras, Alpouvar, 8200-397 Albufeira,
                                        Algarve, Albufeira, Portugal</h5>
                                    <p className="card-text">Clube Albufeira Garden Village</p>
                                    <div className="d-flex gap-2 mt-2">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <div className="d-flex gap-2 mt-4 align-items-center">
                                        <i className="fa-solid fa-utensils"></i>
                                        <p>All inclusive</p>
                                    </div>
                                </div>
                            </div>
                            <div className="price-card">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p>Price per night from:<br />
                                        <span>$23</span>(per person)
                                    </p>
                                    <button className="view">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="card w-100">
                                <img src="/assets/image.jpg" className="card-img-top" alt="/assets/image.jpg" />
                                <div className="card-body">
                                    <h5 className="card-title">EstradaA de Ferreiras, Alpouvar, 8200-397 Albufeira,
                                        Algarve, Albufeira, Portugal</h5>
                                    <p className="card-text">Clube Albufeira Garden Village</p>
                                    <div className="d-flex gap-2 mt-2">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <div className="d-flex gap-2 mt-4 align-items-center">
                                        <i className="fa-solid fa-utensils"></i>
                                        <p>All inclusive</p>
                                    </div>
                                </div>
                            </div>
                            <div className="price-card">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p>Price per night from:<br />
                                        <span>$23</span>(per person)
                                    </p>
                                    <button className="view">View</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="card w-100">
                                <img src="/assets/image.jpg" className="card-img-top" alt="/assets/image.jpg" />
                                <div className="card-body">
                                    <h5 className="card-title">EstradaA de Ferreiras, Alpouvar, 8200-397 Albufeira,
                                        Algarve, Albufeira, Portugal</h5>
                                    <p className="card-text">Clube Albufeira Garden Village</p>
                                    <div className="d-flex gap-2 mt-2">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <div className="d-flex gap-2 mt-4 align-items-center">
                                        <i className="fa-solid fa-utensils"></i>
                                        <p>All inclusive</p>
                                    </div>
                                </div>
                            </div>
                            <div className="price-card">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p>Price per night from:<br />
                                        <span>$23</span>(per person)
                                    </p>
                                    <button className="view">View</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="card w-100">
                                <img src="/assets/image.jpg" className="card-img-top" alt="/assets/image.jpg" />
                                <div className="card-body">
                                    <h5 className="card-title">EstradaA de Ferreiras, Alpouvar, 8200-397 Albufeira,
                                        Algarve, Albufeira, Portugal</h5>
                                    <p className="card-text">Clube Albufeira Garden Village</p>
                                    <div className="d-flex gap-2 mt-2">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <div className="d-flex gap-2 mt-4 align-items-center">
                                        <i className="fa-solid fa-utensils"></i>
                                        <p>All inclusive</p>
                                    </div>
                                </div>
                            </div>
                            <div className="price-card">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p>Price per night from:<br />
                                        <span>$23</span>(per person)
                                    </p>
                                    <button className="view">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br /> <br /><br /><br /><br /><br />
            <div className="d-flex justify-content-between align-items-center">
                <div className="heading-container mt-3">
                    <p>Top <span className="bold-text">Expert Inspiration</span></p>
                    <div className="underline"></div>
                </div>
                <button>See All</button>
            </div>
            <div className="row mt-4">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                    <div className="expert-insipiration">
                        <img src="/assets/image.jpg" alt="images" />
                        <div className="d-flex flex-column justify-content-start align-items-start gap-3" style={{width:"270px"}}>
                            <div className="heading">Unveiling Krabi: A Traveler's Guide to Thailand's Hidden Paradise
                            </div>
                            <div className="text">Nestled on the stunning And...</div>
                            <div className="read-more">Read More</div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                    <div className="expert-insipiration">
                        <img src="/assets/image.jpg" alt="images" />
                        <div className="d-flex flex-column justify-content-start align-items-start gap-3" style={{width:"270px"}}>
                            <div className="heading">Unveiling Krabi: A Traveler's Guide to Thailand's Hidden Paradise
                            </div>
                            <div className="text">Nestled on the stunning And...</div>
                            <div className="read-more">Read More</div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                    <div className="expert-insipiration">
                        <img src="/assets/image.jpg" alt="images" />
                        <div className="d-flex flex-column justify-content-start align-items-start gap-3" style={{width:"270px"}}>
                            <div className="heading">Unveiling Krabi: A Traveler's Guide to Thailand's Hidden Paradise
                            </div>
                            <div className="text">Nestled on the stunning And...</div>
                            <div className="read-more">Read More</div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                    <div className="expert-insipiration">
                        <img src="/assets/image.jpg" alt="images" />
                        <div className="d-flex flex-column justify-content-start align-items-start gap-3" style={{width:"270px"}}>
                            <div className="heading">Unveiling Krabi: A Traveler's Guide to Thailand's Hidden Paradise
                            </div>
                            <div className="text">Nestled on the stunning And...</div>
                            <div className="read-more">Read More</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Crousel