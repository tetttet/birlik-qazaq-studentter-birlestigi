import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import History from '../../components/About/History'

const Team = () => {
    return (
        <>
            <Header />
            <div className='mt-56 lg:mt-0'>
                <History />
            </div>
            <Footer />
        </>
    )
}

export default Team