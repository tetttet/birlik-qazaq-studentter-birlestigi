import React from 'react';
import { ReturnButtonTop } from './Component';

const stepsData = {
  offline: [
    {
      title: "Посетить центр обслуживания",
      description: `ИстанбулКарт (Istanbul Kart basvuru merkezi) - 
      адреса можно найти по ссылке: https://www.istanbulkart.istanbul/`,
      icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    },
    {
      title: "Необходимые документы:",
      description: `Одна фотография, вид на жительство в турции, студенческая справка с университета и оплата за карту (производится на месте)`,
      icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    },
    {
      title: "",
      description: "Получите свою персональную карту",
      icon: (
        <>
          <circle cx="12" cy="5" r="3" />
          <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
        </>
      )
    }
  ],
  online: [
    {
      title: "Пройдите по ссылке",
      description: `https://bireysel.istanbulkart.istanbul`,
      icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    },
    {
      title: "",
      description: "Загрузите в систему свои личные данные и фотографию",
      icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    },
    {
      title: "",
      description: "Карту можно получить доставкой за дополнительную плату, либо в центре обслуживания ИстанбулКарт",
      icon: (
        <>
          <circle cx="12" cy="5" r="3" />
          <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
        </>
      )
    }
  ]
};

const StepCard = ({ step, isLast }) => (
  <div className={`flex relative ${!isLast ? 'pb-12' : ''}`}>
    {!isLast && (
      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
    )}
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
        {step.icon}
      </svg>
    </div>
    <div className="flex-grow pl-4">
      {step.title && <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">{step.title}</h2>}
      <p className="leading-relaxed">{step.description}</p>
    </div>
  </div>
);

const StepTimeline = ({ steps, src, title }) => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-10 mx-auto flex flex-wrap">
      <h1>{title}</h1>
      <div className="flex flex-wrap w-full">
        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} isLast={index === steps.length - 1} />
          ))}
        </div>
        <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src={src} alt="step" />
      </div>
    </div>
  </section>
);

const PageHeaderSection = ({ title, text }) => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-24 h-full bg-indigo-500"></div>
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6">
          <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">{title}</h1>
          <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">{text}</p>
        </div>
      </div>
    </div>
  </section>
);

const Page4 = () => (
  <>
    <ReturnButtonTop />
    <PageHeaderSection
      title="ÖGRENCI ISTANBULKART"
      text="Студенческий проездной билет, который используется для получения скидок на общественном транспорте IETT (Metro, Metrobüs, Otobüs, Tramvay, Marmaray, Vapur). Позволяет совершить 200 поездок в течение 30 дней."
    />

    <StepTimeline
      steps={stepsData.offline}
      src="/assets/Turkey/istanbulkart.webp"
      title="OFFLINE ОБРАЩЕНИЕ"
    />
    <StepTimeline
      steps={stepsData.online}
      src="/assets/Turkey/istanbulkart1.webp"
      title="ONLINE ОБРАЩЕНИЕ"
    />
  </>
);

export { Page4, PageHeaderSection };
