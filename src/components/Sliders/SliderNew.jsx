import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


const Slider = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(1);
    const images = [
        "/img/123.jpeg",
        "/img/s1.png",
        "/img/s2.png",
        "/img/s3.png",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 5000); // Autoplay every 5 seconds

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, [currentIndex]);

    const back = () => {
        if (currentIndex > 1) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const next = () => {
        if (currentIndex < images.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(1); // Loop back to the first image
        }
    };

    return (
        <div className="relative mt-1 max-h-[50%] lg:min-h-screen md:min-h-[20vh] flex flex-shrink-0 shadow-lg">
            <div className="rounded-full bg-gray-600 text-white absolute top-5 right-5 text-sm px-2 text-center z-10">
                <span>{currentIndex}</span>/{images.length}
            </div>

            {images.map((image, index) => (
                <figure
                    key={index}
                    className={`h-96 transition-opacity duration-300 ${currentIndex === index + 1 ? "opacity-100" : "opacity-0"}`}
                >
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="absolute inset-0 z-10 h-full w-full object-cover opacity-90"
                    />
                    <figcaption className="absolute inset-x-0 bottom-1 z-20 w-96 mx-auto p-4 font-light text-sm text-center tracking-widest leading-snug bg-gray-300 bg-opacity-90">
                        {t('img_alt')}
                    </figcaption>
                </figure>
            ))}

            <button
                onClick={back}
                className="absolute left-5 top-1/2 transform -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
            >
                <FaAngleLeft />
            </button>

            <button
                onClick={next}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
            >
                <FaAngleRight />
            </button>

        </div>
    );
};

export default Slider;
