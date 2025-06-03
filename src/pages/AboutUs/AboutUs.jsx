import React, { Fragment } from 'react';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import AboutComponent from '../../components/About/AboutComponent.jsx';
import BlogComponent from '../../components/Sliders/Blog/BlogComponent.jsx';
import Content from '../../components/Sliders/Blog/Content.jsx';
import GraphComponent from '../../components/Sliders/Blog/GraphComponent.jsx';
import TeamComponent from '../../components/Sliders/Blog/TeamComponent.jsx';
import MapComponent from '../../components/Map/MapComponent.jsx';
import ChatBot from '../../components/ChatBot/ChatBot.jsx';
import History from '../../components/About/History.jsx';

const aboutUs = () => {
    return (
        <Fragment>
            {/* Header */}
            <Header />

            {/* About Component */}
            <AboutComponent />

            {/* Blog Component */}
            <BlogComponent />

            {/* Content */}
            {/* <Content /> */}

            {/* Team Component */}
            <TeamComponent />

            {/* Graph Component */}
            {/* <GraphComponent /> */}

            {/* Map Component */}
            <MapComponent />

            <div className='mt-56 lg:mt-0'>
                <History />
            </div>

            {/* ChatBot */}
            <ChatBot />

            {/* Footer */}
            <Footer />
        </Fragment>
    )
}

export default aboutUs