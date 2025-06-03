import React, { Fragment, useEffect, useRef } from 'react';

import Header from '../../components/Header/Header.jsx';
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from '../../components/Footer/Footer.jsx';
import Home from '../../components/Events/Home/Index.jsx';
import Craft from '../../components/Events/Craft/Index.jsx';
import Real from '../../components/Events/Real/Index.jsx';
import Team from '../../components/Events/Team/Index.jsx';
import Capsule from '../../components/Events/Capsule/Index.jsx';
import FooterBanner from '../../components/Events/FooterBanner/Index.jsx';

const Events = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true, 
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  useEffect(() => {
    const list = document.querySelectorAll('.section')
    list.forEach(function(e) {
      ScrollTrigger.create({
        trigger: e,
        start: "top 90%",
        end: "bottom 90%",
        onEnter: function(){
          document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: function() {
          document.body.setAttribute("theme", e.dataset.color);
        }
      })
    })
  })

  return (
    <Fragment>
      <div className='section main w-full '>
      {/* Header */}
      <Header />
      <div className='mt-1'>
        <Home />
      </div>
      {/* <div className='-mt-36 mb-56'>
        <Craft />
      </div> */}
      <Real />
      <Team />
      <Capsule />
      <FooterBanner />

      {/* Footer */}
      <Footer />
      </div>
    </Fragment>
  )
}

export default Events