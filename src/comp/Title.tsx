import React from 'react'


interface TitleInterface {
    heading?: string,
    span?: string
}


const Title: React.FC<TitleInterface> = ({ heading, span }) => {
    return (
        <div className='big-title'>
            {heading} (All Resorts):
            <span>{span}</span>
        </div>
    )
}

export default Title