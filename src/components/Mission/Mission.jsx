import React from "react";
import { useTranslation } from "react-i18next";

import img1 from "../../assets/mission/1.jpg";
import img2 from "../../assets/mission/2.jpg";
import img3 from "../../assets/mission/3.jpg";
import img4 from "../../assets/mission/4.jpg";
import img5 from "../../assets/mission/5.jpg";
import img6 from "../../assets/mission/6.jpg";

const MissionSection = () => {
    const { t } = useTranslation("news");

    const missions = [
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
        { img: img5 },
        { img: img6 },
    ];

    return (
        <div className="mission_section py-16">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold">
                    {t("mission.title")}
                </h1>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    {t("mission.desc")}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mx-auto max-w-5xl">
                {missions.map((mission, index) => (
                    <div key={index} className="relative group">
                        <img src={mission.img} alt="Mission" className="w-full h-auto rounded-lg" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h4 className="text-white text-lg font-bold">

                            </h4>
                            <p className="text-white text-sm text-center mt-2 px-4">
                                {t("mission.subdesc")}
                            </p>
                            <div className="mt-4 flex space-x-4">
                                <p className="bg-blue-500 text-white px-4 py-2 rounded">
                                    {t("readmore")}
                                </p>
                                <p className="bg-green-500 text-white px-4 py-2 rounded">
                                    {t("donate")}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MissionSection;
