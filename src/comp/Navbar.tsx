'use client'

import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="#"><Image width={10} height={10} src="/assets/image.jpg" alt="logo" className="nav-logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav ms-auto my-2 gap-3 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Agent Login</a>
                            </li>
                            <li className="nav-item mobile">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            <li className="nav-item  web-login">
                                <button type="button">Login </button>
                            </li>
                            <li className="nav-item">
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar