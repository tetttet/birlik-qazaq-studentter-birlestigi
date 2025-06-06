import React from 'react';

const data = [
    {
        name: "Жанбырбай Нұрдаулет Асхатұлы",
        desc: "Alanya Alaaddin Keykubat Üniversitesi көшбасшы болып тағайындалды",
        date: "2024",
        status: "Көшбасшы",
        img: "1.jpeg"
    },
    {
        name: "Akhmetali Omarov",
        desc: "Ankara көшбасшысы",
        date: "2024-2025",
        status: "Көшбасшы",
        img: "2.jpeg"
    },
    {
        name: "Akhmetbek Yersultan",
        desc: "Akdeniz Üniversitesi (Анталия) көшбасшысы",
        date: "2024-2025",
        status: "Көшбасшы",
        img: "3.jpeg"
    },
    {
        name: "⁠Raikhan Vilyamis ",
        desc: "Akdeniz University (Анталия) көшбасшысы",
        date: "2025",
        status: "Көшбасшы",
        img: "4.jpeg"
    },
    {
        name: "⁠Kadyr Ayazhan",
        desc: "Akdeniz Üniversitesi (Анталия) көшбасшысы",
        date: "2025",
        status: "Көшбасшы",
        img: "5.jpeg"
    },
    {
        name: "Еділ Жақсыбай",
        desc: "Akdeniz Üniversitesi (Анталия) көшбасшысы",
        date: "2024-2025",
        status: "Экс-Көшбасшы",
        img: "6.jpeg"
    },
    {
        name: "Жармуханов Азат Қайратұлы",
        desc: "Afyon Kocatepe Üniversitesi көшбасшысы",
        date: "2021-2023",
        status: "Экс-Көшбасшы",
        img: "7.jpeg"
    },
    {
        name: "Алаш Нуртлеп",
        desc: "Afyon Kocatepe Üniversitesi көшбасшысы",
        date: "2025",
        status: "Көшбасшы",
        img: "8.jpeg"
    },
    {
        name: "Vokzal Temirlan",
        desc: "Aksaray Üniversitesi (Аксарай) көшбасшысы",
        date: "2019-2023",
        status: "Экс-Көшбасшы",
        img: "9.jpeg"
    },
    {
        name: "Dilnaz Dauletova",
        desc: "Aksaray Üniversitesi (Аксарай) көшбасшысы",
        date: "2025",
        status: "Көшбасшы",
        img: "10.jpeg"
    },
    {
        name: "Nurislam Myntore",
        desc: "Bandırma Onyedi Eylül Üniversitesi ",
        date: "2022-2025",
        status: "Көшбасшы",
        img: "11.jpeg"
    },
    {
        name: "Arailym Bzaubekova",
        desc: "Bartın Üniversitesi",
        date: "2021-2025",
        status: "пост сдал",
        img: "12.jpeg"
    },
    {
        name: "Ayaulym Amirkhan",
        desc: "Bartın Üniversitesi",
        date: "2025",
        status: "Көшбасшы",
        img: "13.jpeg"
    },
    {
        name: "Iskakova Nuraiym ",
        desc: "Balıkesir Üniversitesi",
        date: "2023-2025",
        status: "Экс-Көшбасшы",
        img: "14.jpeg"
    },
    {
        name: "Gaukhar Jalisheva ",
        desc: "Balıkesir Üniversitesi",
        date: "2025",
        status: "Көшбасшы",
        img: "15.jpeg"
    },
    {
        name: "Аблай Беқарыс Қайратұлы",
        desc: "Bilecik Şeyh Edebali Üniversitesi (Биледжик) ",
        date: "2025",
        status: "Көшбасшы",
        img: "16.jpeg"
    },
    {
        name: "Sultan Beibarys",
        desc: "Bolu İzzet Baysal Üniversitesi",
        date: "2025",
        status: "Көшбасшы",
        img: "17.jpeg"
    },
    {
        name: "Kaiyrbek Kenessarin",
        desc: "Бурдур қаласы",
        date: "2024-2025",
        status: "Көшбасшы",
        img: "18.jpeg"
    },
    {
        name: "Dinmukhamed Moldagalim",
        desc: "Çanakkale On Sekiz Mart Üniversitesi (Чанаккале) ",
        date: "2024-2025",
        status: "Экс-Көшбасшы",
        img: "19.jpeg"
    },
    {
        name: "Yerdaulet Ospan",
        desc: "Çanakkale Universitesi (Чанаккале) ",
        date: "2025-26",
        status: "Көшбасшы",
        img: "20.jpeg"
    },
    {
        name: "Akerke Kenzhebek",
        desc: "Düzce Üniversitesi",
        date: "2025",
        status: "Көшбасшы",
        img: "21.jpeg"
    },
    {
        name: "Alihan Sultan",
        desc: "Edirne Trakya University",
        date: "2024 - 2025",
        status: "Көшбасшы",
        img: "22.jpeg"
    },
    {
        name: "Bogenbay Ismailov",
        desc: "Eskişehir - Anadolu Üniversitesi",
        date: "2024-2025",
        status: "Көшбасшы",
        img: "23.jpeg"
    },
    {
        name: "Досбаева Анжела Нурлыбековна",
        desc: "Süleyman Demirel Üniversitesi( Isparta)",
        date: "2024",
        status: "Көшбасшы",
        img: "24.jpeg"
    },
    // {
    //     name: "",
    //     desc: "",
    //     date: "",
    //     status: "Көшбасшы",
    //     img: ".jpeg"
    // },
];

const Card = ({ name, desc, date, status, img }) => {
    const statusColor = status === "Көшбасшы" ? "bg-green-500 text-white" : "bg-gray-400 text-white";

    return (
        <div className='mb-10 flex'>
            <div className="bg-white rounded-t-3xl shadow-lg w-[350px] mx-4 rounded-3xl overflow-hidden shadow-sm transform transition-all hover:scale-105 flex flex-col">

                {/* Image container with fixed height */}
                <div className="h-72 overflow-hidden">
                    <img
                        src={`/assets/people/${img}`}
                        alt={name}
                        className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-300"
                    />
                </div>

                {/* Content with fixed height */}
                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-800 line-clamp-2">{name}</h3>
                        <span className={`${statusColor} white-text-pr text-xs px-2 py-1 rounded-full flex-shrink-0 ml-2`}>
                            {status}
                        </span>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{desc}</p>

                    <div className="flex justify-between items-center mt-auto">
                        <span className="text-sm text-gray-500">{date}</span>
                        <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                            Толық ақпарат →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const History = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto ml-5 md:ml-56 lg:ml-48">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">Көшбасшылар</h1>

                <div className="flex flex-nowrap overflow-x-auto pb-4 -mx-2 lg:overflow-visible lg:flex-wrap lg:justify-center">
                    {data.map((item, index) => (
                        <div key={index} className="flex-none w-full sm:w-1/2 lg:w-1/4 mb-4">
                            <Card
                                name={item.name}
                                desc={item.desc}
                                date={item.date}
                                status={item.status}
                                img={item.img}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default History;