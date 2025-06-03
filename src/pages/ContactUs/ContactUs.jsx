import React, { Fragment } from 'react';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ReviewCard from '../../components/UI/Review/ReviewCard.jsx';

const contactUs = () => {
    return (
        <Fragment>
            {/* Header */}
            <Header />

            {/* Review Card */}
            <ReviewCard />

            {/* Footer */}
            <Footer />
        </Fragment>
    )
}

export default contactUs