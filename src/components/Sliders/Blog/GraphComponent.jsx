import React from 'react';

const leaders = [
    {
        image: '1.jpeg',
        title: 'Akerke Kirbayeva',
        description: '2018-2021 Негізін қалаушы <br /> 2021-2023 көшбасшы',
    },
    {
        image: '2.jpeg',
        title: 'Aslan Serik ',
        description: '2021-2023 көшбасшы',
    },
    {
        image: '3.jpeg',
        title: 'Maksat Kypshak',
        description: '2021-2023 кеңесші',
    },
    {
        image: '4.jpeg',
        title: 'Zhansaya Chusbekova',
        description: '2021-2022 лидер',
    },
    {
        image: '5.jpeg',
        title: 'Bota Makhmutkyzy',
        description: '2021-2022 лидер',
    },
    {
        image: '6.jpeg',
        title: 'Kaussar Yesmaganbet ',
        description: '2021-2022 лидер',
    },
    {
        image: '7.jpeg',
        title: 'Onerbek Shaihaden',
        description: '2019-2021 лидер',
    },
    {
        image: '',
        title: "Didar Okas",
        description: '2021-2023 Birlik Qazaq Jastary | Көшбасшыларының кеңесшісі | 2023-2024 Көшбасшысы',
    },
    {
        image: '9.jpeg',
        title: "Нұрасыл Балташ",
        description: '<strong>2022-2024</strong>: Istanbul Medipol University президенті <br /> <strong>2024-2025</strong>: Бірлік Қазақ Студенттер Бірлестігінің Басшысы',
    }
];

const GraphComponent = () => (
    <div className="bg-gray-100 py-20 px-4">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-center text-gray-900 mb-16">
            Көшбасшылар
        </h1>

        <div className="max-w-5xl mx-auto">
            {leaders.map((leader, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                        } items-center gap-8`}
                >
                    <img
                        src={`/b/${leader.image}`}
                        alt={leader.title}
                        className="w-48 h-48 object-cover rounded-full shadow-lg"
                    />
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold text-gray-800">{leader.title}</h2>
                        <p
                            className="mt-2 text-gray-600 text-md"
                            dangerouslySetInnerHTML={{ __html: leader.description }}
                        ></p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default GraphComponent;
