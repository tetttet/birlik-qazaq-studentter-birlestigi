import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const connection = () => {

  const items = [
    {
      title: "Группа Программистов",
      description:
        "Энтузиасты программирования, создающие инновационные решения. Разрабатываем веб-приложения, мобильные сервисы и автоматизируем процессы. Любим чистый код, новые технологии и совместную разработку.",
      imgSrc: "https://dummyimage.com/1203x503",
    },
    {
      title: "Группа Дизайнеров",
      description:
        "Творческое сообщество, где рождаются яркие идеи! Мы занимаемся графическим дизайном, UI/UX, анимацией и брендингом. Здесь стиль встречается с функциональностью, а искусство — с технологиями.",
      imgSrc: "https://dummyimage.com/1204x504",
    },
    {
      title: "Группа Архитекторов",
      description:
        "Профессионалы, создающие гармоничную среду. Проектируем современные здания, разрабатываем урбанистические решения и внедряем устойчивые технологии. Форма, удобство и эстетика — наш главный фокус.",
      imgSrc: "https://dummyimage.com/1205x505",
    },
    {
      title: "Группа Архитекторов",
      description:
        "Профессионалы, создающие гармоничную среду. Проектируем современные здания, разрабатываем урбанистические решения и внедряем устойчивые технологии. Форма, удобство и эстетика — наш главный фокус.",
      imgSrc: "https://dummyimage.com/1205x505",
    },
    {
      title: "Группа Архитекторов",
      description:
        "Профессионалы, создающие гармоничную среду. Проектируем современные здания, разрабатываем урбанистические решения и внедряем устойчивые технологии. Форма, удобство и эстетика — наш главный фокус.",
      imgSrc: "https://dummyimage.com/1205x505",
    },
  ];


  return (
    <Fragment>
      {/* Header */}
      <Header />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Space The Final Frontier
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {items.map((item, index) => (
              <div key={index} className="p-4 md:w-1/3">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  {item.title}
                </h2>
                <p className="text-base leading-relaxed mt-2">{item.description}</p>
                <Link to="" className="text-indigo-500 inline-flex items-center mt-3" >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </Fragment>
  )
}

export default connection