import React from "react";
import { useTranslation } from "react-i18next";

const MapComponent = () => {
    const { t } = useTranslation("about");

    return (
        <>
            <div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container">
                <h1 className="xl:text-3xl md:text-2xl text-xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
                    {t("map.title")} <br className="md:block hidden" />
                    {t("map.subtitle")}
                </h1>
                <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                    <img src="https://i.ibb.co/KjrPCyW/map.png" alt="world map" className="w-full xl:h-full h-96 sm:block hidden" />
                    <img src="https://i.ibb.co/SXKj9Mf/map-bg.png" alt="background map" className="sm:hidden -mt-10 block w-full h-96 object-fill absolute z-0" />
                </div>
            </div>
        </>
    );
}

export default MapComponent;
