import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import HeaderBar from "./HeaderBar/HeaderBar";
import './Header.css';

const Header = () => {
    const [scrolling, setScrolling] = useState(false);

    // Обработчик для изменения состояния при прокрутке
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll); // Добавляем слушатель события прокрутки

        return () => {
            window.removeEventListener("scroll", handleScroll); // Убираем слушатель, когда компонент размонтирован
        };
    }, []);

    return (
        <Fragment>
            <header className={`header ${scrolling ? "scrolled" : ""}`}>
                <CreditBanner />
                <Navbar />
            </header>
            <div className="mt-20">
                <HeaderBar />
            </div>
        </Fragment>
    );
};


const CreditBanner = () => {
    return (
        <div className="w-full text-center text-sm text-gray-600 bg-white">
            Сайт разработан
            {' '}
            <a
                href="https://www.linkedin.com/in/turan-yahya-gazizuly-b21056261/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-gray-800 hover:text-black"
            >
                Turan-Yahya Gazizuly
            </a>{' '}
            |{' '}
            <a
                href="https://www.instagram.com/yahyagazizuly/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-600"
            >
                Instagram
            </a>
        </div>
    );
};

export default Header;
