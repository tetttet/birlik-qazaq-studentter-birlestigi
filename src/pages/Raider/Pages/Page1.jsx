import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReturnButtonTop } from './Component';

const leaders = [
    { title: 'Лидеры', names: ['Нурасыл Балташ', 'Дильназ Нурмаганбетова'] },
    { title: 'Вице-лидеры', names: ['Алихан Керей', 'Альтемир Женисбек', 'Алина Мизамбаева', 'Жасулан Нияткул', 'Нурдин Айтмырза', 'Аружан Кайырбек', 'Данаел Кама'] },
    { title: 'Координатор', names: ['Аружан Нурмаганбетова'] }
];

const universities = [
    { university: "Istanbul Haliç Üniversitesi", name: "Мейірлан Аманбек", phone: "+7 707 303 20 05" },
    { university: "Istanbul Topkapi Üniversitesi", name: "Касиет Баймудинова", phone: "+90 501 400 00 00" },
    { university: "Istanbul Kadir Has Üniversitesi", name: "Жулдыз Гусман", phone: "+90 531 439 3427" },
    { university: "Istanbul Arel Universitesi", name: "Айкерім Сарбопеева", phone: "+7 707 284 82 42" },
    { university: "Istanbul Yeni Yüzyil Üniversitesi", name: "Дарига Каженова", phone: "+90 501 092 68 04" },
    { university: "Kocaeli Üniversitesi", name: "Нурлан Усенов", phone: "+90 505 698 3579" },
    { university: "Gebze Teknik Üniversitesi", name: "Тожан Эскербек", phone: "+7 705 427 55 57" },
    { university: "Manisa Celal Bayar Üniversitesi", name: "Жулдыз Сарманова", phone: "+90 534 633 37 95" },
    { university: "Balikesir Universitesi", name: "Нурайым Искакова", phone: "+7 707 240 49 36" },
    { university: "Çanakkale 18 Mart Üniversitesi", name: "Акикат Димагамбетов", phone: "+90 552 556 79 34" },
    { university: "Bandirma Onyedi Eylül Üniversitesi", name: "Нурислам Мынтере", phone: "+7 775 156 24 80" },
    { university: "Yalova Üniversitesi", name: "Эбжан Мейіржан", phone: "+7705 176 99 76" },
    { university: "Namik Kemal Üniversitesi", name: "Санат Идеят", phone: "+7 707 872 91 82" },
    { university: "Trakya Üniversitesi", name: "Алихан Султан", phone: "+90 552 877 53 29" },
    { university: "Kirklareli Universitesi", name: "Айнур Каршыгаева", phone: "+7 700 216 18 12" },
    { university: "Ankara Universiteleri", name: "Айдана Кыдырова", phone: "+7 778 950 38 38" },
    { university: "Karabük Universitesi", name: "Агзам Кабай", phone: "+90 555 161 90 78" },
    { university: "Çorum Hitit Universitesi", name: "Асылзат Балтабеккызы", phone: "+7 708 381 28 08" },
    { university: "Eskisehir Universiteleri", name: "Самал Бердибекова", phone: "+7 702 789 29 43" },
    { university: "Kirsehir Ahi Evran Üniversitesi", name: "Алибек Баймерек", phone: "+7 776 632 70 13" },
    { university: "Kayseri Üniversiteleri", name: "Ерасыл Жапар", phone: "+90 554 186 92 28" },
    { university: "Konya Universiteleri", name: "Абдулмалик Али-Айдаров", phone: "+90 505 716 47 40" },
    { university: "Dokuz Eylüt Üniversitesi", name: "Жасулан Нияткул", phone: "+7 747 270 51 41" },
    { university: "Ege Üniversitesi", name: "Диана Кайниденова", phone: "+90 554 879 2585" }
];

const Page1 = () => {
    const { t } = useTranslation("raider");
    return (
        <>
            <ReturnButtonTop />
            <div className="container mt-20 mx-auto p-6 bg-white rounded-lg shadow-sm max-w-4xl">
                <h2 className="text-4xl font-extrabold text-center mb-8 text-indigo-700 leading-tight">
                    «Birlik» Qazaq Studentter Birlestigi
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-800">
                    {t('Page1.description')}
                </p>
                <p className="mb-6 text-lg leading-relaxed text-gray-800">
                    {t('Page1.events')}
                </p>
                <p className="mb-6 text-lg font-semibold text-gray-800">
                    {t('Page1.development')}
                </p>
                <p className="mb-6 text-lg leading-relaxed text-gray-800">
                    {t('Page1.housing')}
                </p>
            </div>

            <div className="mt-10 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
                <h3 className="text-3xl font-semibold text-center mb-6 text-indigo-700">Лидеры и координаторы</h3>
                <div className="space-y-4 text-lg text-gray-800">
                    {leaders.map((leaderGroup, index) => (
                        <div key={index}>
                            <p><span className="font-semibold text-indigo-700">{leaderGroup.title}:</span> {leaderGroup.names.join(', ')}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-10 p-6  rounded-lg shadow-sm max-w-4xl mx-auto">
                <h3 className="text-3xl font-semibold text-center mb-6 text-indigo-700">
                    Лидеры университетов в Турции
                </h3>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse">
                        <thead>
                            <tr className="bg-indigo-100">
                                <th className="border border-gray-300 px-4 py-2 text-left text-indigo-700">Университет</th>
                                <th className="border border-gray-300 px-4 py-2 text-left text-indigo-700">Имена</th>
                                <th className="border border-gray-300 px-4 py-2 text-left text-indigo-700">Контакт</th>
                            </tr>
                        </thead>
                        <tbody>
                            {universities.map((university, index) => (
                                <tr key={index} className="odd:bg-white even:bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-2">{university.university}</td>
                                    <td className="border border-gray-300 px-4 py-2">{university.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{university.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );

};

export default Page1;
