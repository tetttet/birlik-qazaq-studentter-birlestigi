import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import History from '../../components/About/History'
import TopGrid, { TopGridVideo } from '../../components/Sliders/Blog/TopGrid'

const Team = () => {
    return (
        <>
            <Header />
            <TopGrid />
            <TopGridVideo />
            {/* <div className='mt-56 lg:mt-0'>
                <History />
            </div> */}
            
            <Footer />
        </>
    )
}

export default Team