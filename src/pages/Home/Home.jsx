import React, { Fragment } from 'react';
import './Home.css';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import Slider from '../../components/Sliders/SliderNew.jsx';
import Banner from '../../components/Sliders/Banner/Banner.jsx';
import Blog from '../../components/Sliders/Blog/Blog.jsx';
import Testimonial from '../../components/Sliders/Testimonial/Testimonial.jsx';

import About from '../../components/About/About.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import MissionSection from '../../components/Mission/Mission.jsx';

import Relation from '../../components/Contact/Relations/Relation.jsx';
import ContactCard from '../../components/Contact/ContactCard/ContactCard.jsx';
import Questions from '../../components/AskQuestions/Questions.jsx';

const Home = () => {
  return (
    <Fragment>
      {/* Header */}
      <Header />

      {/* Main Sections */}
      <Slider />
      <Blog />
      {/* <Banner /> */}
      <About />
      <Hero />
      <MissionSection />

      {/* Testimonials */}
      <Testimonial />

      {/* Contact Sections */}
      <Relation />
      <ContactCard />

      {/* FAQ */}
      <Questions />

      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default Home;