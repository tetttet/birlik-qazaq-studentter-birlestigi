import React from 'react'
import { HeroRealEstate, ReturnButtonTop, Services, VerticalTimeline } from './Component'


const timelineItems = [
    {
        title: 'МузейКарт (MüzeKart)',
        description: 'ISTANBUL MUSEUMCARD МОЖНО ПРИОБРЕСТИ',
    },
    {
        title: 'В музеях и исторических местах',
        description: 'Hа стойках продаж в крупных музеях Стамбула (Айя-София, Топкапы И Долмабахче).',
    },
    {
        title: 'В туристических информационных центрах,',
        description:
            <>
                расположенных в популярных районах города. Онлайн на сайте {" "} <span> https://muze.gov.tr/MuseumPass </span>
            </>,
    },
];

const museums = [
    {
        title: "Topkapi Palace Museum",
        description:
            "Главная резиденция османских султанов на протяжении 400 лет. Включает сокровищницу, гарем и реликвии пророка.",
        bgColor: "bg-amber-100",
        link: "#",
    },
    {
        title: "Hagia Irene Museum",
        description:
            "Одна из старейших церквей Константинополя, сохранившаяся в оригинальном виде. Сейчас музей и концертная площадка.",
        bgColor: "bg-emerald-100",
        link: "#",
    },
    {
        title: "Archaeological Museum",
        description:
            "Коллекция древних артефактов из разных эпох, включая саркофаг Александра Македонского.",
        bgColor: "bg-red-100",
        link: "#",
    },
    {
        title: "Museum of Turkish and Islamic Arts",
        description:
            "Богатая коллекция исламского искусства, ковров, каллиграфии и предметов быта с XIV века.",
        bgColor: "bg-amber-100",
        link: "#",
    },
    {
        title: "Mosaic Museum",
        description:
            "Мозаики византийского периода, найденные во дворце Большого дворца Константинополя.",
        bgColor: "bg-emerald-100",
        link: "#",
    },
    {
        title: "Museum of the Technology of Islam",
        description:
            "Экспозиция, посвященная научным достижениям исламского мира: астрономии, медицине, механике и навигации.",
        bgColor: "bg-red-100",
        link: "#",
    },
    {
        title: "Galata Tower",
        description:
            "Средневековая башня с панорамным видом на Стамбул. Один из символов города.",
        bgColor: "bg-amber-100",
        link: "#",
    },
    {
        title: "Galata Mevlevi House",
        description:
            "Музей, посвященный суфийскому ордену Мевлеви, известному своими церемониями дервишей.",
        bgColor: "bg-emerald-100",
        link: "#",
    },
    {
        title: "Rumeli Hisari",
        description:
            "Крепость, построенная султаном Мехмедом II перед захватом Константинополя. Отличный вид на Босфор.",
        bgColor: "bg-red-100",
        link: "#",
    },
    {
        title: "Kiz Kulesi",
        description:
            "Девичья башня, расположенная на маленьком острове в Босфоре. Легендарное место с кафе и музеем.",
        bgColor: "bg-amber-100",
        link: "#",
    },
];


const Page12 = () => {
    return (
        <>
        <ReturnButtonTop />
            <div className='mt-20'></div>
            <HeroRealEstate
                title="ISTANBUL MUSEUM CARD"
                subtitle="МузейКарт (MüzeKart) предоставляет доступ к множеству музеев и исторических мест в Стамбуле."
                description="МузейКарт позволяет избежать очередей сэкономить деньги на входных билетах, а так же предоставляет скидки и другие преимущества."
                image="/assets/Turkey/img1.jpg"
            />
            <VerticalTimeline timelineItems={timelineItems} />
            <Services
                services={museums}
                title="КАКИЕ МУЗЕИ ВХОДЯТ В MUSEUM PASS"
                subtitle="МузейКарт дает право посещения более 300 музеев и исторических мест по всей Турции."
            />
        </>
    )
}

export default Page12