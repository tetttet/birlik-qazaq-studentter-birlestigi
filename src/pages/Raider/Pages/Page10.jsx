import React from 'react'
import { PageHeaderSection } from './Page4'
import { FAQSection, HeroSectionTextImg, ReturnButtonTop, VerticalTimeline } from './Component';

const taxiTypesInIstanbul = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-blue-950">
                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
            </svg>
        ),
        title: "Желтое",
        description: "Стандартное такси с обычным тарифом."
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-blue-950">
                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
            </svg>
        ),
        title: "Синее",
        description: "Более комфортное такси с немного повышенным тарифом."
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-blue-950">
                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
            </svg>
        ),
        title: "Черное",
        description: "Предназначено для нескольких пассажиров, тариф выше чем у синего такси."
    }
];

const faqs = [
    {
        question: "Как заранее рассчитать стоимость поездки на такси?",
        answer: (
            <>
                Существует удобный сайт, где вы можете рассчитать стоимость поездки заранее. Для этого необходимо ввести предполагаемое расстояние:{" "}
                <a href="https://taksi-ucreti.hesaplama.net/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline font-bold">
                    taksi-ucreti.hesaplama.net
                </a>.
            </>
        ),
    },
    {
        question: "Какие приложения для вызова такси действуют в Турции?",
        answer: "В Турции можно воспользоваться Uber, InDrive и Bitaksi для вызова такси.",
    },
    {
        question: "Какова минимальная стоимость поездки на такси?",
        answer: "Минимальная стоимость поездки составляет около 100 лир, даже если вы проехали всего одну улицу. Следите за новостями о текущих тарифах.",
    },
    {
        question: "Есть ли дополнительные сборы при поездке на такси?",
        answer: "Да, дополнительные сборы взимаются за пересечение мостов, автобанов и подземных туннелей.",
    },
];


const Page10 = () => {
    return (
        <>
        <ReturnButtonTop />
            <PageHeaderSection
                title="СПОСОБЫ ПЕРЕДВИЖЕНИЯ ПО СТАМБУЛУ"
                text="В Стамбуле много способов передвижения: метро, автобусы, трамваи, маршрутки, такси, фуникулеры, мосты, паромы и даже вертолеты. Все они имеют свои плюсы и минусы, и выбор зависит от вашего маршрута, времени и бюджета. В этом разделе мы расскажем о самых популярных способах передвижения по городу."
            />

            <div>
                <h1 className="text-3xl font-bold text-center"><span>Основы поездок</span> на такси</h1>
                <p className="text-center mt-4 text-lg"><span className='font-bold'>Такси</span> – один из лучших способов добраться домой с багажом.
                    В Стамбуле существует три типа такси</p>
            </div>

            <VerticalTimeline timelineItems={taxiTypesInIstanbul} />
            <HeroSectionTextImg
                title="СПОСОБЫ ПЕРЕДВИЖЕНИЯ"
                subtitle="ПО СТАМБУЛУ"
                pretitle="ТАКСИ И ТРАНСПОРТ"
                text="В КАЖДОМ ТАКСИ УСТАНОВЛЕН ТАКСОМЕТР, КОТОРЫЙ РАССЧИТЫВАЕТ СТОИМОСТЬ ПОЕЗДКИ ПО КИЛОМЕТРАЖУ. ОБЯЗАТЕЛЬНО ПОЛЬЗУЙТЕСЬ ИМ! НИКОГДА НЕ СОГЛАШАЙТЕСЬ НА ПОЕЗДКУ БЕЗ ИСПОЛЬЗОВАНИЯ ТАКСОМЕТРА."
                src="https://media4.giphy.com/media/GmSLgDjaTzx17CatN5/source.gif"
            />

            <FAQSection
                faqs={faqs}
                title="Часто задаваемые вопросы"
                subtitle="Ответы на вопросы о такси в Стамбуле"
                readmore="Read more"
            />
        </>
    )
}

export default Page10