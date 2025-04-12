import React from 'react'
import BigHeadingPara from './BigHeadingPara'
import PrevSelectedCard from './card/PrevSelectedCard'

const PreSelectedFlight = () => {
  return (
    <div>
        <BigHeadingPara  heading='Preselected flights' span='You can change flights after choosing your accommodation'/>
        <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                <PrevSelectedCard />
            </div>
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                <PrevSelectedCard />
            </div>
        </div>
    </div>
  )
}

export default PreSelectedFlight