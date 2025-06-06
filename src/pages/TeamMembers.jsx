import React from 'react'
import History from '../components/About/History'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import GraphComponent from '../components/Sliders/Blog/GraphComponent'
import TableComponent from '../components/Sliders/Blog/TableComponent'

const TeamMembers = () => {
    return (
        <div>
            <Header />
            <GraphComponent />
            <TableComponent />
            <div className='mt-56 lg:mt-0'>
                <History />
            </div>
            <Footer />
        </div>
    )
}

export default TeamMembers