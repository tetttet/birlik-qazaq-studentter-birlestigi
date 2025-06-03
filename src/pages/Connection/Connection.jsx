import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const connection = () => {

  const items = [
    {
      title: "⁠Birlik IT-club",
      description:
        "Бағдарламалау мен жаңа технологияларды сүйетін жастар клубы.",
      imgSrc: "/assets/images/aiti.jpeg", 
    },
    {
      title: "Birlik Sport-club ",
      description:
        "Дене шынықтыру мен спортты қолдайтын белсенді қатысушылар қауымы.",
      imgSrc: "https://plus.unsplash.com/premium_photo-1685366454253-cb705836c5a8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNwb3J0fGVufDB8fDB8fHww",
    },
    {
      title: "⁠⁠Birlik Design-club",
      description:
        "Дизайн мен көркемдік шешімдерге қызығатын шығармашыл орта.",
      imgSrc: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGVzaWdufGVufDB8fDB8fHww",
    },
    {
      title: "Birlik Architecture-club ",
      description:
        "Қала құрылысы мен сәулетке қызығатын болашақ мамандар клубы.",
      imgSrc: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww",
    },
    {
      title: "Birlik Shabyt-club",
      description:
        "Шабыт пен өнерді бағалайтын шығармашылық тұлғалар клубы.",
      imgSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Birlik TedTalks-club",
      description:
        "Ой бөлісу мен шабыттандырушы баяндамаларға арналған алаң.",
      imgSrc: "/assets/images/ted.jpeg",
    },
    {
      title: "Birlik Speaking-club",
      description:
        "Ағылшын тілінде сөйлеу дағдыларын дамытуға арналған клуб.",
      imgSrc: "/assets/images/tedlacks.jpeg",
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
                Birlik Qazaq Studentter Birlestigi клубтары
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                <strong>Birlik Qazaq Studentter Birlestigi</strong> клубтары - бұл жастардың шығармашылық, спорттық және ғылыми әлеуетін дамытуға арналған алаң. Әр клуб өз бағыты бойынша белсенді жұмыс істеп, қатысушыларға жаңа мүмкіндіктер мен тәжірибе алмасу мүмкіндігін ұсынады. Клубтарымызға қосылып, өзіңізді қызықтыратын салада дамыңыз!
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
                  Толығырақ
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