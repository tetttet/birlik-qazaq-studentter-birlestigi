import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./ImageSlider.module.css";
import { Link } from "react-router-dom";

const ImageSlider = () => {
    const [banners, setBanners] = useState([]);
    const [active, setActive] = useState(0);
    const sliderRef = useRef(null);
    const intervalRef = useRef(null);

    const lengthItems = banners.length;

    // Функция для получения данных с сервера
    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/banners`, {
                    // Add fetch options if needed
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setBanners(data);
            } catch (error) {
                console.error("Error fetching banners:", error);
            }
        };
        fetchBanners();
    }, []);

    const nextSlide = useCallback(() => {
        setActive((prev) => (prev + 1) % lengthItems);
    }, [lengthItems]); //

    const prevSlide = useCallback(() => {
        setActive((prev) => (prev - 1 + lengthItems) % lengthItems);
    }, [lengthItems]); //

    useEffect(() => {
        intervalRef.current = setInterval(nextSlide, 5000);
        return () => clearInterval(intervalRef.current);
    }, [nextSlide]); //


    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.left = `-${active * 100}%`;
        }
    }, [active]);

    const handleDotClick = (index) => {
        setActive(index);
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(nextSlide, 5000);
    };

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderList} ref={sliderRef}>
                {banners.map((banner, index) => (
                    <div className={styles.sliderItem} key={banner.id}>
                        <Link to={banner.link}>
                            <img className="" src={banner.image_url} alt={`Slide ${index + 1}`} />
                        </Link>
                    </div>
                ))}
            </div>
            <div className={styles.sliderButtons}>
                <button
                    className={styles.sliderButton}
                    id="prev"
                    onClick={prevSlide}
                >
                    {"<<"}
                </button>
                <button
                    className={styles.sliderButton}
                    id="next"
                    onClick={nextSlide}
                >
                    {">"}
                </button>
            </div>
            <ul className={styles.sliderDots}>
                {banners.map((_, index) => (
                    <li
                        key={index}
                        className={
                            index === active
                                ? `${styles.sliderDot} ${styles.sliderDotActive}`
                                : styles.sliderDot
                        }
                        onClick={() => handleDotClick(index)}
                    ></li>
                ))}
            </ul>
        </div>
    );
};

export default ImageSlider;
