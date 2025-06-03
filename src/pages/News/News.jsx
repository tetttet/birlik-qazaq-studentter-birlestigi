import React, { Fragment } from 'react';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ExecutiveTeam from '../../components/Team/Members/Members.jsx';
import NewsSlider from '../../components/Sliders/NewsSlider/NewsSlider.jsx';

const news = () => {
  return (
    <Fragment>
      {/* Header */}
      <Header />

      <NewsSlider />

      {/* News */}
      <ExecutiveTeam />

      {/* Footer */}
      <Footer />
    </Fragment>
  )
}

export default news