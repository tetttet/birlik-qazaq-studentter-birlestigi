import React from 'react'
import { PageHeaderSection } from './Page4'
import { BgPrimary, Element, ReturnButtonTop, Services } from './Component'

const markets = [
    {
        title: "Migros",
        description:
            "Один из самых распространенных супермаркетов. Бывает разного формата: Migros Jet (маленькие магазины у дома), 2M, 3M, 4M, 5M (большие супермаркеты). Есть карта лояльности.",
        bgColor: "bg-amber-100",
        link: "#",
    },
    {
        title: "Şok",
        description:
            "Сетевой дискаунтер с низкими ценами на местные продукты. Есть расширенные варианты магазинов — Golden ŞOK.",
        bgColor: "bg-emerald-100",
        link: "#",
    },
    {
        title: "Bim",
        description:
            "Популярный бюджетный магазин с акцентом на турецкие продукты. Встречаются расширенные варианты Big Bim.",
        bgColor: "bg-red-100",
        link: "#",
    },
    {
        title: "A-101",
        description:
            "Еще одна сеть магазинов с низкими ценами. Здесь можно найти широкий ассортимент местных товаров.",
        bgColor: "bg-amber-100",
        link: "#",
    },
    {
        title: "CarrefourSA",
        description:
            "Сеть супермаркетов с большим выбором импортных товаров. Можно найти пломбир, сгущенку, гречку, пельмени и даже квас. Есть карта лояльности.",
        bgColor: "bg-emerald-100",
        link: "#",
    },
]

const VerticalTimeline = ({ markets }) => {
    return (
        <section className="relative min-h-screen flex flex-col overflow-hidden antialiased">
            <BgPrimary />
            <div className="w-full max-w-6xl py-40 mx-auto px-4 md:px-6 ">
                <div className="flex flex-col justify-center divide-y divide-slate-200 ">
                    <div className="w-full max-w-3xl mx-auto">
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                            {markets.map((service, index) => (
                                <Element key={index} type={service.type} description={service.description} />
                            )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const marketsInTurkey = [
    {
        type: "Размер рынка",
        description: "Могут быть как небольшими, так и занимать целые улицы и районы."
    },
    {
        type: "Что продают",
        description: "Чаще всего на рынках продаются продукты, но есть уникальные рынки для антиквариата и товаров с вторых рук."
    },
    {
        type: "Что лучше покупать",
        description: "Сезонные фрукты и овощи, а также рыба, выловленная в тот же день, что делает её самой свежей."
    },
    {
        type: "Как найти рынок",
        description: "Ищите в интернете запросом: «Semt Pazars [Ваш район и город]»."
    }
];


const Page9 = () => {
    return (
        <>
        <ReturnButtonTop />
            <PageHeaderSection
                title="МАГАЗИНЫ И РЫНКИ"
                text=" В Турции множество магазинов и рынков, где можно купить все, что душе угодно."
            />
            <Services
                services={markets}
                title="ПОЛЕЗНЫE ПРИЛОЖЕНИЙ"
                subtitle="Полезные приложения для вашего удобства и комфорта."
            />
            <VerticalTimeline markets={marketsInTurkey} />
        </>
    )
}

export default Page9