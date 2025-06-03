import React from 'react'

import { PageHeaderSection } from "./Page4"
import { Link } from 'react-router-dom'
import { GridSection, ReturnButtonTop } from './Component';


const Section = ({ title, text, src }) => (
    <section className="text-gray-600 body-font">
        <div className="bg-white">
            <div className="mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    >
                        <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="#7775D6" />
                                <stop offset={1} stopColor="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                            {title}
                        </h2>
                        <p className="mt-6 text-lg/8 text-pretty text-gray-300">
                            {text}
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <Link
                                to="#"
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Get started
                            </Link>
                            <Link to="#" className="text-sm font-semibold text-white flex items-center">
                                Learn more
                                <span aria-hidden="true" className="ml-2 text-2xl">→</span>
                            </Link>

                        </div>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8">
                        <img
                            alt="App screenshot"
                            src={src}
                            width={1824}
                            height={1080}
                            className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const sectionData = [
    { title: "STEP 1", description: `Заявление на открытие счета (заполняется онлайн на сайте или в ближайшем отделении банка);` },
    { title: "STEP 2", description: `Справка о зачислении в учебное заведение;` },
    { title: "STEP 3", description: `Паспорт, студенческая виза или вид на жительство;` },
    { title: "STEP 4", description: `Турецкий контактный номер;` },
    { title: "STEP 5", description: `Документ, подтверждающий адрес проживания (например, договор аренды с указанным адресом проживания).` },
];

const SectionComponent = () => (
    <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
            <div className="flex flex-wrap">
                {sectionData.map(({ title, description }, index) => (
                    <div key={index} className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 flex flex-col justify-between h-full">
                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{title}</h2>
                        <p className="leading-relaxed text-base mb-4 flex-grow">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const posts = [
    {
        title: 'Скачайте мобильное приложение',
        description: 'Скачайте мобильное приложение вашего банка, чтобы легко пополнять баланс istanbulkart и оплачивать различные услуги.',
    },
    {
        title: 'Вы можете пополнять свой счет',
        description: 'Вы можете пополнять свой турецкий счет через казахстанские банки. Это избавляет от необходимости искать банкомат на улице, что очень удобно и безопасно.',
    },
    {
        title: 'Открыв счет в турецком банке',
        description: 'Открыв счет в турецком банке, Вы получите личный IBAN - международно-признанную систему номера счета, которая позволяет безошибочно идентифицировать счет получателя. Используя IBAN Вы сможете переводить деньги в другие банки.',
    },
]



const Page5 = () => {
    return (
        <>
        <ReturnButtonTop />
            <PageHeaderSection
                title="КАК ОТКРЫТЬ БАНКОВСКИЙ СЧЕТ?"
                text="Для иностранных студентов очень важно иметь банковский счет в турецких банках в целях осуществления денежных переводов, онлайн пополнения проездного баланса, покупок в интернет-магазинах и других нужд. Вы можете снять наличные с Каспи карты без комиссии через банкомат Halk Bank. Банкоматы предоставляют обслуживание на турецком и английском языках. Самые удобные банки для использования - Halk Bank, Ziraat Bank, Enpara, Papara."
            />
            <GridSection
                posts={posts}
                title="Полезные советы:"
                text="При открытии банковского счета в Турции, вам необходимо учитывать следующие моменты:"
            />
            <Section
                title="КАКИЕ ДОКУМЕНТЫ ТРЕБУЮТСЯ КАКИЕ ДОКУМЕНТЫ ТРЕБУЮТСЯ ДЛЯ ОТКРЫТИЯ СЧЕТА?ДЛЯ ОТКРЫТИЯ СЧЕТА?"
                text="Примечание: банк по своему усмотрению может запросить дополнительные документы. Изготовленную банковскую карту могут доставить по указанному в заявлении адресу либо Вы можете получить ее в отделении банка."
                src="/assets/Turkey/bank.jpg"
            />
            <SectionComponent />
        </>
    )
}

export default Page5