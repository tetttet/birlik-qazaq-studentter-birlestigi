import React from 'react'
import { Link } from 'react-router-dom'

import { BsSaveFill } from "react-icons/bs";
import { FaPassport } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { VscSyncIgnored } from "react-icons/vsc";
import { BgPrimary, ReturnButtonTop } from './Component';

const content = {
    title: "Консульство Республики Казахстан",
    description: "Цель консульского учета граждан Республики Казахстан за границей заключается в обеспечении их законных прав и интересов, поддержке связи с государственными органами, а также в предоставлении различных консульских услуг.",
    tipsTitle: "КАК НЕ ПОПАСТЬ В НЕПРИЯТНОСТИ?",
    tips: [
        {
            icon: <BsSaveFill className="mt-1 size-5 flex-none text-indigo-600" />,
            title: "ХРАНИТЕ ВСЕ ДОГОВОРЫ!",
            description: "Договоры и все документы должны быть сохранены. Не выбрасывайте даже чеки, которые могут пригодиться в будущем."
        },
        {
            icon: <FaPassport className="mt-1 size-5 flex-none text-indigo-600" />,
            title: "НОСИТЕ С СОБОЙ ВАШ ПАСПОРТ / КИМЛИК!",
            description: "Существует такое понятие, как проверка личности и проверка законного пребывания в Турции. Проверке подлежат граждане всех иностранных государств."
        },
        {
            icon: <FaAddressCard className="mt-1 size-5 flex-none text-indigo-600" />,
            title: "ПОДАВАЙТЕ НА ВНЖ (ВИД НА ЖИТЕЛЬСТВО) В УСТАНОВЛЕННЫЙ СРОК!",
            description: "После пересечения границы у вас начинается безвизовый 90-дневный период, в течение которого вам нужно будет подать документы на ВНЖ. Если подача и регистрация начались хотя бы на один день позже, то это считается нарушением законодательства."
        },
        {
            icon: <MdHelpCenter className="mt-1 size-5 flex-none text-indigo-600" />,
            title: "ОБРАЩАЙТЕСЬ ЗА ПОМОЩЬЮ",
            description: "Если против вас или Ваших друзей совершено правонарушение, вы имеете право обратиться в полицию. Желательно также иметь контакты адвоката."
        }
    ],
    finalText: "Консульство Республики Казахстан предоставляет широкий спектр услуг для граждан, находящихся за рубежом, направленных на защиту их прав и интересов. Важной частью этих услуг является помощь в экстренных ситуациях, таких как утрата документов, а также поддержка в решении различных юридических и административных вопросов.",
    legalReminder: "При этом важно соблюдать все местные законы и правила.",
    conclusion: "Необходимость своевременно подавать документы на вид на жительство, хранить важные документы и иметь при себе удостоверение личности является ключевым фактором, способствующим избеганию неприятных ситуаций."
};

const features = [
    {
        title: "1. Не игнорировать местные законы и обычай",
        description: "Не игнорировать местные законы и обычай. Каждый студент должен понимать, что может быть приемлемо в Казахстане - может быть запрещено в Турции. Недооценивать важность исследования местных правил, норм и особенностей местного менталитета. Незнание законов не освобождает от ответственности. За нарушение местных правил можно получить штраф, депортацию или даже тюремное заключение.",
        icon: (
            <VscSyncIgnored className="mt-1 size-5 flex-none text-indigo-600" />
        )
    },
    {
        title: "2. Вопросы личной безопасности",
        description: "Не игнорировать безопасность жилья. Не оставляйте двери и окна открытыми, даже если вы находитесь дома или в комнате общежития. Не носите с собой крупные суммы наличных денег. Лучше использовать банковские карты или хранить деньги в безопасных местах. Не пренебрегайте безопасностью в Интернете. He делитесь конфиденциальной информацией с незнакомыми людьми.",
        icon: (
            <MdHelpCenter className="mt-1 size-5 flex-none text-indigo-600" />
        )
    },
    {
        title: "3. Опасное поведение в общественных местах",
        description: "Всегда информируйте своих близких людей и друзей о своем местоположении при посещении различных мероприятий, заселении в отели, общежития, во время выездов в новые или незнакомые места. Не злоупотребляйте алкоголем в публичных местах. Это может сделать вас уязвимым к правонарушениям. Не оставляйте свои вещи без присмотра. В частности, личные документы и телефон. В Турции осуществляются проверки с целью борьбы с нелегальной миграцией, поэтому всегда и везде носите с собой паспорт/кимлик. Если получили ВНЖ/икамет, а также студенческий билет, то эти документы тоже нужно брать всегда с собой. При этом никому не отдавайте в руки свои личные документы, кроме проверок со стороны полиции. После получения ВНЖ зарегистрируйтесь в системе e-devlet (казахстанский аналог e-Gov). Это приложение можно предъявлять при проверках. Возьмите в своем университете дополнительно справки (2-3 экземпляра) о том, что Вы являетесь их студентом. Храните эти справки в разных местах - в общежитии, в личной сумке, у друзей. Это поможет вам в случае форс-мажора воспользоваться этими справками.",
        icon: (
            <FaAddressCard className="mt-1 size-5 flex-none text-indigo-600" />
        )
    },
    {
        title: "4. Приобретение SIM-карт",
        description: "Приобретайте SIM-карты строго на свое имя и только в официальных офисах связи - Тюрксел, Тюрктелеком и Водафон, с официальной регистрацией номера в базе данных мобильных операторов. Не используйте SIM-карты, которые не зарегистрированы на Ваше имя.",
        icon: (
            <BsSaveFill className="mt-1 size-5 flex-none text-indigo-600" />
        )
    },
    {
        title: "5. Недопустимость использования фиктивных документов",
        description: "При получении ВНЖ не оформляйте и не покупайте фиктивные документы/справки о регистрации по месту жительства, договора аренды и прописку, так как после получения ВНЖ полиция приходит по адресу и проверяет. Если Вы отсутствуете по адресу проживания (полиция посещает непосредственно Вашу квартиру, спрашивает о Вас у соседей, охраны и технического персонала), то Вам аннулируют ВНЖ. Никому не скидывайте свои паспортные данные и фото икамета/ВНЖ, так как с вашими данными могут воспользоваться мошенники, представляясь вами.",
        icon: (
            <FaPassport className="mt-1 size-5 flex-none text-indigo-600" />
        )
    }
];

const WorkflowSection = () => {
    return (
        <>
            <ReturnButtonTop />
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <BgPrimary />
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base/7 font-semibold text-indigo-600">Birlik</p>
                                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                    {content.title}
                                </h1>
                                <p className="mt-6 text-xl/8 text-gray-700">{content.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            className="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
                            src="/assets/Turkey/consulate.jpg"
                            alt="Consulate"
                        />
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">{content.tipsTitle}</h2>
                                <ul className="mt-8 space-y-8 text-gray-600">
                                    {content.tips.map((tip, index) => (
                                        <li key={index} className="flex gap-x-3">
                                            {tip.icon}
                                            <span>
                                                <strong className="font-semibold text-gray-900">{tip.title}</strong>
                                                <p>{tip.description}</p>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-8">{content.finalText}</p>
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">{content.legalReminder}</h2>
                                <p className="mt-6">{content.conclusion}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const LawyersAndEmergencySection = () => {
    const lawyers = [
        { name: "Asım Aydın", phone: "+90 551 985 19 51" },
        { name: "Aigerim Bıkmaz", phone: "+90 533 616 61 99" },
        { name: "Batuhan Kunar", phone: "+90 532 301 40 17" },
    ];

    const emergencyNumbers = [
        { number: "112", description: "Используется для вызова экстренных служб, включая полицию, скорую помощь и пожарную службу" },
        { number: "110", description: "Номер пожарной службы" },
        { number: "155", description: "Номер полицейской службы" },
        { number: "157", description: "Номер сервиса, предоставляющий поддержку иностранцам на нескольких языках" },
    ];

    return (
        <div className="bg-white py-0 px-6 sm:py-24 sm:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                <Section title="АДВОКАТЫ">
                    <ul className="mt-8 space-y-6">
                        {lawyers.map(({ name, phone }) => (
                            <li key={name} className="flex items-center space-x-6">
                                <p className="w-44 font-semibold text-gray-900">{name}</p>
                                <span className="text-gray-600">Tel: {phone}</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section title="ТЕЛЕФОНЫ ЭКСТРЕННЫХ СЛУЖБ">
                    <ul className="mt-8 space-y-6">
                        {emergencyNumbers.map(({ number, description }) => (
                            <li key={number} className="flex items-center space-x-4">
                                <p className="font-semibold text-gray-900">{number}</p>
                                <span className="text-gray-600">{description}</span>
                            </li>
                        ))}
                    </ul>
                </Section>
            </div>
        </div>
    );
};

const Section = ({ title, children }) => (
    <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {children}
    </div>
);

const ContactSection = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        title="map"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                        style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                    ></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">Şenlikköy, Yeşilyurt Cd. No:7/9, 34153 Bakırköy/İstanbul</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a href="mailto:example@email.com" className="text-indigo-500 leading-relaxed">
                                example@email.com
                            </a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed">123-456-7890</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">

                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Button
                    </button>
                    <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                </div>
            </div>
        </section>
    );
};

const TestimonialSection = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 mx-auto">
                <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="inline-block w-8 h-8 text-gray-400 mb-8"
                        viewBox="0 0 975.036 975.036"
                    >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className="leading-relaxed text-lg">
                        ВАЖНЫЕ СОВЕТЫ:
                    </p>
                    <span className="inline-block h-1 w-24 rounded bg-indigo-500 mt-8 mb-6"></span>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
                        <div>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Janna Nurmagambetova</h2>
                            <p className="text-gray-500">Tel: +90 554 792 98 07</p>
                        </div>
                        <div>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Fettah Polat</h2>
                            <p className="text-gray-500">Tel: +90 532 498 12 14</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-gray-600 body-font container px-5 py-24 mx-auto flex flex-wrap">
                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                {feature.icon}
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{feature.title}</h2>
                                <p className="leading-relaxed text-base">{feature.description}</p>
                                <Link className="mt-3 text-indigo-500 inline-flex items-center" to="#">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const Page2 = () => {
    return (
        <>
            <WorkflowSection />
            <LawyersAndEmergencySection />
            <ContactSection />
            <TestimonialSection />
        </>
    )
}

export default Page2