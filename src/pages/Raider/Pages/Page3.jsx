import React from 'react';
import { Link } from 'react-router-dom';
import { ReturnButtonTop } from './Component';

const Section = ({ title, text }) => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-12 mx-auto text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{title}</h1>
      <p>{text}</p>
    </div>
  </section>
);

const ImageGrid = ({ images }) => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 flex flex-wrap -mx-4 -mb-10 text-center">
      {images.map((src, index) => (
        <div key={index} className="sm:w-1/2 mb-10 px-4">
          <div className="rounded-lg h-64 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src={src} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

const FeatureList = ({ title, items }) => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-12 mx-auto text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">{title}</h1>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        {items.map((item, index) => (
          <div key={index} className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium text-gray-800">{item}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const StepSection = ({ steps }) => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 mx-auto">
      {steps.map(({ title, description, icon }, index) => (
        <div key={index} className={`flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col ${index % 2 !== 0 ? 'sm:flex-row-reverse' : ''}`}>
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 overflow-hidden">
            <img src={icon} alt="icon" className="w-full h-full object-cover" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{title}</h2>
            <p className="leading-relaxed text-base">{description}</p>
            <Link className="mt-3 text-indigo-500 inline-flex items-center" to="#">
              Learn More
              <svg fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Page3 = () => {
  return (
    <>
    <ReturnButtonTop />
      <Section
        title="Для начала рассмотрим важные различия между кимликом, ВНЖ и студенческой визой."
        text="Турции, который используется для идентификации и подтверждения легального пребывания в стране. Икамет/Вид на жительство (ВНЖ) - это разрешение на долгосрочное пребывание в стране и предоставляется лицам, которые прибыли в Турцию с целью учебы, работы, воссоединения с семьей, а также инвесторам. В Казахстане турецкую студенческую визу можно получить в Посольстве Турции в г.Астана, а также в Генеральных консульствах в гг. Алматы и Актау."
      />
      <ImageGrid images={["/assets/Turkey/flag.jpg", "/assets/Turkey/flag1.jpg"]} />
      <FeatureList
        title="КАКИЕ СРОКИ НА ПОДАЧИ НА ВНЖ?"
        items={[
          "После пересечения государственной границы Турции у вас начинается 90-дневный безвизовый период, в течение которого необходимо подать заявление на получение ВНЖ.",
          "Вашим главным сайтом для всей этой процедуры является e-ikamet.goc.gov.tr На данном сайте также можно отслеживать процесс одобрения или отказа получения внж.",
          "Если подача заявления и регистрация началась хотя бы на один день позже, это будет считаться правонарушением.",
          "Внимательно заполняйте все поля в форме. После заполнения электронного заявление нужно его распечатать, подписать и приложить к другим документам. Примечание: необходимо завершить регистрацию в течение 30 дней, иначе Ваша форма будет удалена.",
          "Студенты, подающее заявление на получение студенческого ВНЖ должны в возможно кратчайшие сроки подать полный пакет документов вместе с регистрационной формой студенческого ВНЖ B соответствующее подразделение университета.",
          "Перечень необходимых документов можно найти после заполнения и получения регистрационной формы на сайте https://e-ikamet.goc.gov.tr/."
        ]}
      />
      <StepSection
        steps={[
          { title: "КАК ПОЛУЧИТЬ ИНН", description: "В процессе подачи заявки система e-ikamet предоставит специальный налоговый номер (vergi numarasi).", icon: "/assets/Turkey/flag.jpg" },
          { title: "Оффлайн", description: "Обратитесь в налоговый отдел с паспортом и копией страниц.", icon: "/assets/Turkey/flag1.jpg" },
          { title: "Онлайн", description: "Необходимо зайти на официальный сайт налоговой службы.", icon: "/assets/Turkey/flag2.jpg" },
          { title: "КАК ОПЛАТИТЬ?", description: "На сайте Налоговой службы. После получения квитанции оцифруйте все документы и загрузите их в e-ikamet: https://dijital.gib.gov.tr/ После обработки заявления, принятия положительного решения и выдачи ВНЖ, сотрудники миграционной службы обеспечат выпуск карты и ее отправку заявителю через государственную почту РТТ. Доставку карты можно отслеживать по трек-номеру на сайте РТТ.", icon: "/assets/Turkey/flag2.jpg" },
        ]}
      />
    </>
  );
};

export default Page3;
