import React from 'react';
import { useTranslation } from 'react-i18next';

import Image1 from "../../../assets/relation/1.png";
import Image2 from "../../../assets/relation/2.png";
import Image3 from "../../../assets/relation/3.png";
import Image4 from "../../../assets/relation/4.png";
import Image5 from "../../../assets/relation/5.png";
import Image6 from "../../../assets/relation/6.png";
import Image7 from "../../../assets/relation/7.png";
import Image8 from "../../../assets/relation/8.png";
import Image9 from "../../../assets/relation/9.png";
import Image10 from "../../../assets/relation/10.png";
import Image11 from "../../../assets/relation/11.png";
import Image12 from "../../../assets/relation/12.png";

const Relation = () => {
    const logos = [
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image8,
        Image9,
        Image10,
        Image11,
        Image12
    ];

    const Logo = ({ src, isHidden }) => (
        <div className={isHidden ? "hidden lg:block" : ""}>
            <img
                className="object-fill w-full h-40 mx-auto"
                src={src}
                alt="Company logo"
            />
        </div>
    );

    const { t } = useTranslation();

    return (
        <div className='py-10 mt-10 bg-gray-100 sm:py-16 lg:py-24'>
            <section className="py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-12 gap-y-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">
                                {t("relations.title3")}.<br />
                                {t("relations.title1")}.<br />
                                {t("relations.title2")}.<br />
                            </h2>
                            <p className="mt-6 text-base text-gray-600">
                                {t("relations.description1")}
                                <br /> <br />
                                {t("relations.description2")}
                            </p>
                        </div>

                        <div className="lg:col-span-3 xl:col-span-4">
                            <div className="grid items-center grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-5">
                                {logos.map((logo, index) => (
                                    <Logo key={index} src={logo} isHidden={index >= 4} />
                                ))}
                            </div>

                            {/* Dots for navigation on smaller screens */}
                            <div className="flex items-center justify-start mt-10 space-x-3 lg:hidden">
                                <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Relation;
