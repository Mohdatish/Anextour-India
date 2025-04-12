import React from 'react'
import MainSearchBar from './MainSearchBar'
import BlueHeading from './BlueHeading'
import TopDestination from './TopDestination'
import FindEscape from './FindEscape'
import Crousel from './Crousel'

const HomePage = () => {
    return (
        <div>
            <div className="home-section"></div>
            <div className="home-text">
                <h1>Book Hotels and Homestays</h1>
                <MainSearchBar />
            </div>
            <br />
            <div className='container'>
                <BlueHeading heading='Our' span='Top Destination' />
                <br/>
                <br/>
                <TopDestination />
                <br/>
                <br/>
                <FindEscape />
                <br>
                </br>
                <Crousel />
            </div>
        </div>
    )
}

export default HomePage