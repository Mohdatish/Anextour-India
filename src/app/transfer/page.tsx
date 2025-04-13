import React from 'react'
import '../styles/transfer.css'
import Title from '@/comp/Title'
import LeftFilter from '@/comp/LeftFilter'
import TransferCard from '@/comp/card/TransferCard'
import Link from 'next/link'


const page = () => {
    return (
        <div className='container mt-3'>
            <Title heading='Cars from Mumbai to Pune:' span='76 Cars Found' />
            <br />
            <br />
            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                    <LeftFilter />
                </div>
                <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8'>
                    <Link href="/transfer/details">
                        <TransferCard />
                    </Link>
                    <Link href="/transfer/details">
                        <TransferCard />
                    </Link>
                    <Link href="/transfer/details">
                        <TransferCard />
                    </Link>
                    <Link href="/transfer/details">
                        <TransferCard />
                    </Link>
                    <Link href="/transfer/details">
                        <TransferCard />
                    </Link>
                    <Link href="/transfer/details">
                        <TransferCard />
                    </Link>
                    <Link href="/transfer/details">
                        <TransferCard />
                    </Link>
                    <Link href="/transfer/details">
                        <TransferCard />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page