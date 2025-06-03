import React from "react";
import { useTranslation } from "react-i18next";

const TeamComponent = () => {
    const { t } = useTranslation("about");

    const img = "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Download-Image.png";
    const teamMembers = new Array(15).fill(img);

    return (
        <div>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-center items-center py-12 mx-4 md:mx-6">
                    <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 text-center lg:text-left">
                            {t("team.meet")}
                        </h1>
                        <p className="text-base leading-normal text-gray-600 mt-4 md:w-8/12 lg:w-11/12 text-center lg:text-left">
                            {t("team.desc")}
                        </p>
                        <div className="w-full flex justify-center lg:justify-start">
                            <button className="bg-primary-default text-base font-medium text-white rounded text-center py-4 px-9 mt-8 lg:mt-12 hover:bg-blue-600 leading-4 focus:outline-none focus:ring-2 focus:ring-offset-2 w-full sm:w-auto">
                                {t("team.viewall")}
                            </button>
                        </div>
                    </div>

                    <div role="list" aria-label="Team members" className="lg:w-1/2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-12 gap-y-12 md:gap-x-12 mt-10 lg:mt-0 sm:w-auto w-full">
                        {teamMembers.map((member, index) => (
                            <div key={index} role="listitem" className="flex justify-center items-center">
                                <img src={member} className="w-20" alt="display avatar" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamComponent;
