import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Testimonial = () => {
    const { t } = useTranslation();
    const testimonials = [
        {
            category: 'Сұрақтар',
            title: t('testimonial.itemt2'),
            description: t('testimonial.itemd2'),
            author: '',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQyw0r1V9DmyYAGrQxhyD-FjKZOHkcJuDlTA&s',
        },
        {
            category: 'Көмек',
            title: t('testimonial.itemt1'),
            description: t('testimonial.itemd1'),
            author: '',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6HeMsmAZac2mPBRihwVT1vQ52RJaT6YwMHQ&s',
        },
        {
            category: 'Жауаптар',
            title: t('testimonial.itemt3'),
            description: t('testimonial.itemd3'),
            author: '',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwaZyRlUhTukFXVCqFC9OdfZYJV6JR21FPsA&s',
        },
    ];

    return (
        <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                        Birlik Qazaq Studentter Birlestigi
                    </h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-200">
                        {t('testimonial.subtitle')}
                    </p>
                </div>

                <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full lg:gap-14">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex flex-col overflow-hidden bg-white shadow-md rounded-xl"
                        >
                            <div className="flex flex-col justify-between flex-1 px-5 py-6">
                                <div className="flex-shrink-0">
                                    <span className="block text-xs font-semibold tracking-widest text-orange-500 uppercase">
                                        {testimonial.category}
                                    </span>
                                </div>

                                <div className="flex-1 mt-6">
                                    <p className="text-2xl font-semibold">
                                        <Link to="" className="text-black">
                                            {testimonial.title}
                                        </Link>
                                    </p>
                                    <p className="mt-4 text-base text-gray-600">
                                        {testimonial.description}
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-gray-200">
                                <div className="flex">
                                    <div className="flex items-center flex-1 px-6 py-5">
                                        <img
                                            className="object-cover w-8 h-8 rounded-full"
                                            src={testimonial.avatar}
                                            alt={testimonial.author}
                                        />
                                        <span className="flex-1 block min-w-0 ml-3 text-base font-semibold text-gray-900 truncate">
                                            {testimonial.author}
                                        </span>
                                    </div>

                                    <Link
                                        to=""
                                        className="inline-flex items-center flex-shrink-0 px-4 py-5 text-base font-semibold transition-all duration-200 bg-white border-l border-gray-200 hover:bg-blue-600 hover:text-white"
                                    >
                                        {t('readmore')}
                                        <svg
                                            className="w-5 h-5 ml-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
