import React from 'react';
import { useTranslation } from 'react-i18next';

const Numbers = () => {
    const { t } = useTranslation();
    const stats = [
        { value: "38", description: t("number.description1"), icon: "M13 10V3L4 14h7v7l9-11h-7z" },
        { value: "471+", description: t("number.description2"), icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
        { value: "1846", description: t("number.description3"), icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" },
        { value: "97%", description: t("number.description4"), icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" }
    ];

    return (
        <div className="py-10 bg-primary-default sm:py-16 lg:py-24 mb-8">
            <section className="py-10  sm:py-16 lg:py-24">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl sm:leading-tight">
                            {t("number.title")}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-8 lg:mt-16 sm:grid-cols-2 md:gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="overflow-hidden bg-white rounded-lg">
                                <div className="px-7 py-9">
                                    <div className="flex items-center">
                                        <svg
                                            className="flex-shrink-0 w-16 h-16 text-gray-300"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d={stat.icon} />
                                        </svg>
                                        <h3 className="ml-2 text-6xl font-bold text-gray-900">{stat.value}</h3>
                                    </div>
                                    <p className="mt-6 text-base text-gray-600 md:max-w-xs">{stat.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Numbers;
