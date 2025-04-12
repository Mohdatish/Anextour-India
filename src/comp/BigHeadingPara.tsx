import React from 'react'


interface BigHeadingInterface {
    heading?: string,
    span?: string
}


const BigHeadingPara: React.FC<BigHeadingInterface> = ({ heading, span }) => {
    return (
        <div className='main-heading-para'>
            <h4>{heading}</h4>
            <span>{span}</span>
        </div>
    )
}

export default BigHeadingPara
 

