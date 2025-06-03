import React from "react";
import { useTranslation } from "react-i18next";

import Img1 from "../../assets/about/1.jpg";

import { LuAirplay, LuAppWindow, LuAlignCenter } from "react-icons/lu";
import { GiTeamIdea } from "react-icons/gi";
import { FaAddressBook } from "react-icons/fa6";
import { SiDevexpress } from "react-icons/si";

const AboutComponent = () => {
    const { t } = useTranslation("about");

    const iconCards = [
        { icon: <LuAirplay className="text-white" />, bgColor: "bg-blue-700" },
        { icon: <LuAppWindow className="text-white" />, bgColor: "bg-blue-700" },
        { icon: <LuAlignCenter className="text-white" />, bgColor: "bg-blue-700" }
    ];

    const helpCards = [
        { title: t('help.title1'), description: t('help.desc2') },
        { title: t('help.title2'), description: t('help.desc3') },
        { title: t('help.title3'), description: t('help.desc4') }
    ];

    const teamCards = [
        { icon: <FaAddressBook className="text-blue-700 w-12 h-8" />, title: t('teamCards.title1'), description: t('teamCards.description1') },
        { icon: <GiTeamIdea className="text-blue-700 w-12 h-8" />, title: t('teamCards.title2'), description: t('teamCards.description2') },
        { icon: <SiDevexpress className="text-blue-700 w-12 h-8" />, title: t('teamCards.title3'), description: t('teamCards.description3')  }
    ];

    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <p className="leading-3 font-bold lg:text-4xl text-3xl text-blue-600 cursor-pointer pb-2">
                {t("title")}
            </p>
            <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                <div className="w-full lg:w-6/12">
                    <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
                        {t("subtitle")}
                    </h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                        {t("desc")}
                    </p>
                </div>
                <div className="w-full lg:w-6/12">
                    <img className="lg:block hidden w-full" src={Img1} alt="people discussing on board" />
                    <img className="lg:hidden sm:block hidden w-full" src={Img1} alt="people discussing on board" />
                    <img className="sm:hidden block w-full" src={Img1} alt="people discussing on board" />
                </div>
            </div>

            <div className="relative mt-24">
                <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                    {iconCards.map((card, index) => (
                        <div key={index} className={`z-20 w-12 h-12 ${card.bgColor} rounded-full flex justify-center items-center`}>
                            {card.icon}
                        </div>
                    ))}
                </div>
                <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
            </div>

            <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                {helpCards.map((card, index) => (
                    <div key={index}>
                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
                            {card.title}
                        </p>
                        <p className="font-normal text-base leading-6 text-gray-600 mt-6">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
                <div className="w-full lg:w-6/12">
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
                        {t('mission.title')}
                    </h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12">
                        {t('mission.desc1')}
                    </p>
                    <p className="font-normal text-base leading-6 text-gray-600 w-full lg:w-10/12 xl:w-9/12 mt-10">
                        {t('mission.desc2')}
                    </p>
                </div>
                <div className="w-full lg:w-6/12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                        {teamCards.map((card, index) => (
                            <div key={index} className="flex p-4 shadow-md">
                                <div className="mr-6">
                                    {card.icon}
                                </div>
                                <div>
                                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">{card.title}</p>
                                    <p className="mt-2 font-normal text-base leading-6 text-gray-600">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutComponent;
