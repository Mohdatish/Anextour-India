import React from 'react'


interface BlueHeadingInterface {
    heading?: string,
    span?: string
}


const BlueHeading: React.FC<BlueHeadingInterface> = ({ heading, span }) => {
    return (
        <div className="heading-container">
            <p>{heading} <span className="bold-text">{span}</span></p>
            <div className="underline"></div>
        </div>
    )
}


export default BlueHeading



