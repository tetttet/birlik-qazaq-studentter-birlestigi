import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Questions = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const { t } = useTranslation();

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{t('questions.title')}</h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">{t('questions.subtitle')}</p>
                    </div>

                    <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                        {[
                            { question: t("faq.question1"), answer: t("faq.answer1") },
                            { question: t("faq.question2"), answer: t("faq.answer2") },
                            { question: t("faq.question3"), answer: t("faq.answer3") },
                            { question: t("faq.question4"), answer: t("faq.answer4") },
                        ].map((item, index) => (
                            <div key={index} className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                    onClick={() => toggleOpen(index)}
                                >
                                    <span className="flex text-lg font-semibold text-black">{item.question}</span>
                                    <svg
                                        className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {openIndex === index && (
                                    <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                        <p>
                                            {item.answer}
                                        </p>
                                        <Link to="" className="text-blue-600 transition-all duration-200 hover:underline">
                                            {t('questions.learnMore')}
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-gray-600 text-base mt-9">
                        {t("questions.didn'tFind")}{' '}
                        <Link to="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
                            {t('questions.contactUs')}
                        </Link>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Questions;
