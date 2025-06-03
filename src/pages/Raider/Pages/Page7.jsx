import React from 'react'
import { Link } from 'react-router-dom'

import { PageHeaderSection } from './Page4'
import { ReturnButtonTop } from './Component';

const WisdomSection = ({ src }) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-x-8 gap-y-16 sm:gap-y-24">
        {/* Image & Quote Section */}
        <div className="lg:pr-4 relative overflow-hidden rounded-3xl  p-8 shadow-xl">
          <img
            className="absolute inset-0 w-full h-full object-cover brightness-125 saturate-0"
            src={src}
            alt=""
          />
          <div className="absolute inset-0  mix-blend-multiply"></div>
        </div>

        {/* Content Section */}
        <div>
          <p className="text-yellow-700 text-base font-semibold">Аптеки в Турций</p>
          <h4 className="mt-2 font-bold text-gray-900 sm:text-4xl">
            УХУДШИЛОСЬ САМОЧУВСТВИЕ И СРОЧНО НУЖНО В АПТЕКУ?
          </h4>
          <div className="mt-6 text-gray-700 max-w-xl space-y-8">
            <p>
              Особенность местных аптек заключается в том, что не все из них работают круглосуточно, а также в выходные и праздничные дни.
            </p>
            <p>
              В Турции функционируют дежурные аптеки, называемые Nöbetçi Eczane (Нобетчи Еджзане).
              Они работают в каждом районе и на главных улицах Cadde (Джадде).
              Каждые две недели дежурные аптеки меняются.
            </p>
            <p>
              Самый удобный способ - найти через интернет.
              https://Eczaneler.gen.tr - сайт на котором указаны все адреса аптек.
              (QR) - сканируйте код и сразу перейдите на сайт.
            </p>
          </div>

          {/* Learn More Link */}
          <div className="mt-10">
            <Link to="#" className="text-yellow-500 text-base font-semibold">
              Learn more about our company &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Page7 = () => {
  return (
    <>
    <ReturnButtonTop />
      <PageHeaderSection
        title="В Турции аптеки называются Eczane (Эджзане)."
        text="Особенность местных аптек заключается в том, что не все из них работают круглосуточно, а также в выходные и праздничные дни."
      />
      <WisdomSection src="/assets/Turkey/qr-pharmacy.png" />
    </>
  )
}

export default Page7