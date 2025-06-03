import { useState, useMemo } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link, useLocation } from "react-router-dom"; // Импортируем Link для переходов

import Introduction from "../Pages/Introduction";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";
import Page3 from "../Pages/Page3";
import { Page4 } from "../Pages/Page4";
import Page5 from "../Pages/Page5";
import Page6 from "../Pages/Page6";
import Page7 from "../Pages/Page7";
import Page8 from "../Pages/Page8";
import Page9 from "../Pages/Page9";
import Page10 from "../Pages/Page10";
import Page11 from "../Pages/Page11";
import Page12 from "../Pages/Page12";
import Page13 from "../Pages/Page13";
import Page14 from "../Pages/Page14";

const pageContents = {
    "introduction": <Introduction />,
    "kazakh-students-union": <Page1 />,
    "consular-registration": <Page2 />,
    "student-residence-permit": <Page3 />,
    "student-istanbulkart": <Page4 />,
    "how-to-open-bank-account": <Page5 />,
    "housing-in-turkey": <Page6 />,
    "pharmacies": <Page7 />,
    "top-10-useful-apps": <Page8 />,
    "shops-and-markets": <Page9 />,
    "transportation-methods": <Page10 />,
    "fast-ways-to-travel": <Page11 />,
    "istanbul-museum-card": <Page12 />,
    "additional-information": <Page13 />,
    "conclusion": <Page14 />,
};


const MenuItem = ({ children, isButton, onClick, to }) => (
    <button
        className={`w-full flex justify-between items-center p-2 hover:bg-gray-200 rounded text-black ${isButton ? "" : "block"}`}
        onClick={onClick}
    >
        <span className="flex items-center space-x-2 text-black">{children}</span>
        {isButton && <GoArrowRight size={20} className="text-black" />}
        {to && <Link to={to}></Link>}
    </button>
);

const Sidebar = () => {
    const [currentPage, setCurrentPage] = useState("introduction");
    const location = useLocation();

    const mainMenuItems = useMemo(() => [
        { label: "ВСТУПЛЕНИЕ", page: "introduction", path: "/introduction" },
        { label: "QAZAQ STUDENTTER BIRLESTIGI", page: "kazakh-students-union", path: "/kazakh-students-union" },
        { label: "КОНСУЛЬСКИЙ УЧЕТ", page: "consular-registration", path: "/consular-registration" },
        { label: "СТУДЕНЧЕСКИЙ ВНЖ", page: "student-residence-permit", path: "/student-residence-permit" },
        { label: "ÖĞRENCI ISTANBULKART", page: "student-istanbulkart", path: "/student-istanbulkart" },
        { label: "КАК ОТКРЫТЬ БАНКОВСКИЙ СЧЕТ?", page: "how-to-open-bank-account", path: "/how-to-open-bank-account" },
        { label: "ЖИЛЬЕ В ТУРЦИИ", page: "housing-in-turkey", path: "/housing-in-turkey" },
        { label: "АПТЕКИ", page: "pharmacies", path: "/pharmacies" },
        { label: "TOП-10 ПОЛЕЗНЫХ ПРИЛОЖЕНИЙ", page: "top-10-useful-apps", path: "/top-10-useful-apps" },
        { label: "МАГАЗИНЫ И РЫНКИ", page: "shops-and-markets", path: "/shops-and-markets" },
        { label: "СПОСОБЫ ПЕРЕДВИЖЕНИЯ", page: "transportation-methods", path: "/transportation-methods" },
        { label: "СПОСОБЫ БЫСТРО ДОБРАТЬСЯ", page: "fast-ways-to-travel", path: "/fast-ways-to-travel" },
        { label: "ISTANBUL MUSEUM CARD", page: "istanbul-museum-card", path: "/istanbul-museum-card" },
        { label: "ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ", page: "additional-information", path: "/additional-information" },
        { label: "ЗАКЛЮЧЕНИЕ", page: "conclusion", path: "/conclusion" },
    ], []);

    const isMobile = window.innerWidth <= 768; // проверяем, если устройство мобильное

    return (
        <div className="flex h-full text-black p-4 lg:px-20">
            {/* Если мобильное устройство, то показываем только список */}
            {isMobile ? (
                <div className="w-full pt-20">
                    <ul className="space-y-1">
                        {mainMenuItems.map((item) => (
                            <div key={item.page}>
                                <Link to={item.path}>
                                    <MenuItem>{item.label}</MenuItem>
                                </Link>
                                <hr className="border-t border-gray-300" />
                            </div>
                        ))}
                    </ul>
                </div>
            ) : (
                // Если не мобильное устройство, показываем боковую панель
                <nav className="w-1/4">
                    <ul className="space-y-1 pt-20">
                        {mainMenuItems.map((item) => (
                            <div key={item.page}>
                                <MenuItem onClick={() => setCurrentPage(item.page)}>{item.label}</MenuItem>
                                <hr className="border-t border-gray-300" />
                            </div>
                        ))}
                    </ul>
                </nav>
            )}

            {/* Для мобильных устройств скрываем контент страницы */}
            <div className={`w-full ml-8 text-justify ${isMobile ? "hidden" : ""}`}>
                {pageContents[location.pathname.replace("/", "")] || pageContents[currentPage]}
            </div>
        </div>
    );
};

export default Sidebar;
