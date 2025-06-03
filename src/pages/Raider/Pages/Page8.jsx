import React from 'react'

import { PageHeaderSection } from './Page4'
import { ReturnButtonTop, Services } from './Component';

const services = [
    {
        title: "Sahibinden",
        description:
            "Поиск объявлении о недвижимости и покупки различных товаров и продукции.",
        bgColor: "bg-amber-100",
        link: "#",
    },
    {
        title: "Yemeksepeti",
        description:
            "Доставка еды и продуктов питания.",
        bgColor: "bg-emerald-100",
        link: "#",
    },
    {
        title: "Otobüsüm",
        description:
            "Расписание общественного транспорта.",
        bgColor: "bg-red-100",
        link: "#",
    },
    {
        title: "BiTaksi, Uber, InDrive",
        description:
            "The ability to independently value an enterprise is an essential tool for making business and strategic decisions.",
        bgColor: "bg-red-100",
        link: "#",
    },
    {
        title: "Business English Writing Skills",
        description:
            "Услуги такси.",
        bgColor: "bg-amber-100",
        link: "#",
    },
    {
        title: "Obilet",
        description:
            "Покупка и бронирование билетов на автобусы, поезда и самолеты.",
        bgColor: "bg-emerald-100",
        link: "#",
    },
    {
        title: "Google Maps, Yandex Navigator",
        description:
            "Онлайн карта для подборки маршрутов.",
        bgColor: "bg-amber-100",
        link: "#",
    },
    {
        title: "Maps.me",
        description:
            "Оффлайн карта для подборки маршрутов.",
        bgColor: "bg-emerald-100",
        link: "#",
    },
    {
        title: "Otelz",
        description:
            "Бронирование отелей и других видов проживания.",
        bgColor: "bg-red-100",
        link: "#",
    },
];

const Page8 = () => {
    return (
        <>
        <ReturnButtonTop />
            <PageHeaderSection
                title="TOП-10 ПОЛЕЗНЫХ ПРИЛОЖЕНИЙ"
                text=""
            />
            <Services services={services} />
        </>
    )
}

export default Page8