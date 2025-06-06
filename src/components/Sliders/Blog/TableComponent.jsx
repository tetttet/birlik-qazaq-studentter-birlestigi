import React from 'react';

const students = [
    {
        image: '1.jpeg',
        name: 'Asset Akzhol',
        university: 'Nişantaşı Üniversitesi ',
        description: '2019-2022 белсенді студент | 2022-2024 орынбасар',
    },
    {
        image: '2.jpeg',
        name: 'Aizada Zhakiyanova',
        university: 'İstanbul 29 Mayıs Üniversitesi ',
        description: '2019-2023 белсенді студент | 2023-2024 орынбасар',
    },
    {
        image: '3.jpeg',
        name: 'Togzhan Askerbek',
        university: '',
        description: '',
    },
    {
        image: '4.jpeg',
        name: 'Bekbergen Ilesbek ',
        university: '',
        description: '2021-2023 белсенді студент | 2023-2024 лидер',
    },
    {
        image: '5.jpeg',
        name: 'Dinara Turgimbayeva ',
        university: 'Haliç Üniversitesi ',
        description: '2022-2023 белсенді студент | 2024-2025 университет көшбасшысы',
    },
    {
        image: '6.jpeg',
        name: 'Ayazhan Satarkul ',
        university: 'Haliç Üniversitesi ',
        description: '2022-2024 белсенді студент | 2024 орынбасар',
    },
    {
        image: '7.jpeg',
        name: 'Adel Zhiyenbekova',
        university: 'Haliç üniversitesi ',
        description: '2022-2024 белсенді студент',
    },
    {
        image: '8.jpeg',
        name: 'Zhenis Kitebay ',
        university: 'İstanbul Ticaret üniversitesi',
        description: '2023-2024 белсенді студент | 2024-2025 Ticaret университетінің көшбасшысы',
    }, {
        image: '9.jpeg',
        name: 'Begassyl Serikbay',
        university: 'Medipol üniversitesi',
        description: '2023-2024 белсенді студент | 2024-2025 Medipol университетінің көшбасшысы',
    }, {
        image: '10.jpeg',
        name: 'Alakhysh Talgat',
        university: 'Istanbul Medipol University',
        description: '2023-2024 белсенді студент | 2025 Medipol университетінің жаңа көшбасшысы',
    }, {
        image: '11.jpeg',
        name: 'Eldar Sembin',
        university: 'Nişantaşı University ',
        description: '2023-2024 белсенді студент | 2024-2025 университет көшбасшысы',
    }, {
        image: '12.jpeg',
        name: 'Zhassulan Bazarbay ',
        university: 'Medipol University ',
        description: '2023-2024 белсенді студент | 2025 университет жаңа көшбасшысы',
    }, {
        image: '13.jpeg',
        name: 'Aikerim Sarbopeyva ',
        university: 'Arel Üniversitesi ',
        description: '2023-2024 белсенді студент | 2024-2025 университет көшбасшысы',
    },
    {
        image: '14.jpeg',
        name: 'Ayaulym Askarbaeva',
        university: '29 Mayıs Ünivesitesi ',
        description: '2023-2024 белсенді студент | 2024-2025 университет көшбасшысы',
    },
    {
        image: '15.jpeg',
        name: 'Amina Shakhmanova',
        university: 'Gebze teknik üniversitesi',
        description: '2022-2024 белсенді студент',
    },
    {
        image: '16.jpeg',
        name: 'Nurassyl Duisenbek',
        university: 'Altınbaş Üniversitesi ',
        description: '2022-2023 белсенді студент',
    },
];

const TableComponent = () => {
    return (
        <div className="bg-gray-100 py-12 px-4">
            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {students.map((student, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-105"
                    >
                        <img
                            src={`/b/list/${student.image}`}
                            alt={student.name}
                            className="w-full h-96 object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-gray-800">{student.name}</h3>
                            <p className="text-sm text-blue-600 mt-1">{student.university}</p>
                            <p className="text-gray-600 mt-3 text-sm">{student.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TableComponent;
