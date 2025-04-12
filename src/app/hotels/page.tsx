import React from 'react'
import "../styles/hotel.css"
import BreadCrumb from '@/comp/BreadCrumb'
import Title from '@/comp/Title'
import PreSelectedFlight from '@/comp/PreSelectedFlight'
import LeftFilter from '@/comp/LeftFilter'
import HotelCard from '@/comp/card/HotelCard'
import Link from 'next/link'


const page = () => {
    return (
        <div className='container'>
            <BreadCrumb />
            <Title heading='Hotel packages to Dubai' span='76 Holidays Found' />
            <br />
            <br />
            <PreSelectedFlight />
            <br />
            <br />
            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                    <LeftFilter />
                </div>
                <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8'>
                    <Link href="/hotels/hotel-details">
                        <HotelCard />
                    </Link>
                    <br />
                    <Link href="/hotels/hotel-details">
                        <HotelCard />
                    </Link>
                    <br />
                    <Link href="/hotels/hotel-details">
                        <HotelCard />
                    </Link>
                    <br />
                    <Link href="/hotels/hotel-details">
                        <HotelCard />
                    </Link>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default page