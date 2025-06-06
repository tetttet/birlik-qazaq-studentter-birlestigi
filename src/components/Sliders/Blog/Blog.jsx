import React, { useState, useEffect, useCallback } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from "react-router-dom";

export const currentPosts = [
    {
        id: 1,
        image_url: "/img/IMG_3389.JPG",
        date: "2025 жылы",
        title: "Кония қаласының қазақ жастарының",
        description: "Кония қаласының қазақ жастарының Анкараға барып, референдумға қатысқан сәтінен естелік фото. Бұл маңызды күнде жастар азаматтық белсенділік танытып, ел болашағына бейжай қарамайтындықтарын көрсетті.",
    },
    {
        id: 2,
        image_url: "/img/IMG_3390.JPG",
        date: "2025 жылы",
        title: "Ушак қаласында өткен іс-шарасына",
        description: "Ушак қаласында өткен “Uluslararası Öğrenci Buluşması” (Халықаралық студенттер кездесуі) іс-шарасына түрлі елдерден келген студенттер қатысты. Бұл шара аясында қатысушылар өз мәдениеттерін таныстырып, ұлттық өнерлерін паш етті.",
    },
    {
        id: 3,
        image_url: "/img/IMG_3385.JPG",
        date: "2024 жылы ",
        title: "Анталья қаласында өткен Футбол фестивалі",
        description: "Анталья қаласында өткен Футбол фестиваліне Бурдур қаласының жастары қатысып, белсенді өнер көрсетті. Бұл шара спорттық шеберлікті шыңдап қана қоймай, жастар арасындағы достық пен ынтымақтастықты арттыруға ерекше мүмкіндік берді.",
    },
];

const Blog = () => {
    const { t, i18n } = useTranslation();
    const [currentPage, setCurrentPage] = useState(1); // Страница по умолчанию
    const postsPerPage = 3; // Количество постов на страницу
    const [posts, setPosts] = useState([]);
    const [translations, setTranslations] = useState({});
    const navigate = useNavigate(); // Хук для навигации

    // При клике на пост переходим на страницу подробной информации
    const handlePostClick = (postId) => {
        navigate(`/blog/${postId}`);
    };

    // Функция для получения данных с сервера
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/past_posts`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, []);

    const fetchTranslations = useCallback(async (postId) => {
        try {
            const language_code = i18n.language; // Получаем текущий язык
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/translation_post?post_id=${postId}&language_code=${language_code}`);

            if (!response.ok) {
                throw new Error(`Error fetching translation data: ${response.statusText}`);
            }

            return await response.json();
        } catch (err) {
            console.error("Error fetching translation data:", err);
            return {};
        }
    }, [i18n.language]); // Указываем зависимости

    useEffect(() => {
        const loadTranslations = async () => {
            const translationsData = await Promise.all(posts.map(async (post) => {
                const translationsForPost = await fetchTranslations(post.id);
                return { [post.id]: translationsForPost };
            }));

            const translationsObject = translationsData.reduce((acc, translation) => ({ ...acc, ...translation }), {});
            setTranslations(translationsObject);
        };

        if (posts.length > 0) {
            loadTranslations();
        }
    }, [posts, i18n.language, fetchTranslations]);



    const totalPages = Math.ceil(posts.length / postsPerPage); // Общее количество страниц

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };


    return (
        <div>
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-end justify-between">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{t('blog.title')}</h2>
                            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">{t('blog.subtitle')}</p>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:space-x-3">
                            <button onClick={handlePrev} type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button onClick={handleNext} type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                        {/* {currentPosts.map((post, index) => {
                            const translation = translations[post.id]; // Перевод для текущего поста
                            return (
                                <div key={index} className="overflow-hidden bg-white rounded shadow flex flex-col">
                                    <div className="relative">
                                        <Link to="#" title="" className="block aspect-w-4 aspect-h-3">
                                            <img className="object-cover w-full h-full" src={post.image_url} alt="" />
                                        </Link>
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-sm font-semibold tracking-widest text-gray-500 uppercase">{post.date}</span>
                                        <p className="mt-5 text-2xl font-semibold">
                                            <Link to="#" title="" className="text-black">
                                                {translation?.title || post.title}
                                            </Link>
                                        </p>
                                        <p className="mt-4 text-base text-gray-600 flex-grow">
                                            {translation?.description || post.description}
                                        </p>
                                        <Link to="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                                            {t('header.readmore')}
                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })} */}
                        {currentPosts.map((post, index) => {
                            const translation = translations[post.id]; // Перевод для текущего поста
                            return (
                                <div
                                    key={index}
                                    className="overflow-hidden bg-white rounded shadow flex flex-col"
                                    onClick={() => handlePostClick(post.id)}
                                >
                                    <div className="relative">
                                        <Link to="#" title="" className="block aspect-w-4 aspect-h-3">
                                            <img className="object-cover w-full h-[450px]" src={post.image_url} alt="" />
                                        </Link>
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <span className="text-sm font-semibold tracking-widest text-gray-500 uppercase">{post.date}</span>
                                        <p className="mt-5 text-2xl font-semibold">
                                            <Link to="#" title="" className="text-black">
                                                {translation?.title || post.title}
                                            </Link>
                                        </p>
                                        <p className="mt-4 text-base text-gray-600 flex-grow">
                                            {translation?.description || post.description}
                                        </p>
                                        <Link to="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                                            {t('header.readmore')}
                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
                        <button onClick={handlePrev} type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button onClick={handleNext} type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
