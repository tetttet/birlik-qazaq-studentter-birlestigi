import React from "react"
import { useTranslation } from "react-i18next";

import img1 from "../../../assets/mission/5.jpg"
import img2 from "../../../assets/mission/8.jpg"
import img3 from "../../../assets/mission/9.jpg"

const BlogComponent = () => {
    const { t } = useTranslation("about");

    return (
        <>
            <div className="2xl:mx-auto xl:px-20 lg:px-10 px-6 py-20">
                <div className="lg:flex justify-center">
                    <div className="2xl:w-7/12 lg:w-8/12 md:w-10/12">
                        <img src={img1} alt="fingerprint recognition" className="lg:w-full w-auto rounded-lg" />
                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <svg width={64} height={2} viewBox="0 0 64 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M64 1H0" stroke="#6B7280" />
                                    </svg>
                                    <p className="text-base leading-none text-gray-500 ml-2">
                                        {t("blog.blog")}
                                    </p>
                                </div>
                            </div>
                            <h1 className="lg:text-3xl text-2xl font-semibold mt-4 text-gray-800">
                                {t("blog.title1")}
                            </h1>
                            <p className="text-base leading-6 text-gray-600 mt-2">
                                {t("blog.text1")}
                            </p>
                        </div>
                    </div>
                    <div className="lg:ml-6 lg:mt-0 mt-7 2xl:w-3/12 lg:w-4/12 w-full flex lg:flex-col sm:flex-row flex-col items-center justify-between">
                        <div className="lg:w-auto sm:w-1/2">
                            <img src={img2} alt="flying letters" className="rounded-lg w-full" />
                            <div className="mt-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <svg width={64} height={2} viewBox="0 0 64 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M64 1H0" stroke="#6B7280" />
                                        </svg>
                                        <p className="text-base leading-none text-gray-500 ml-2">
                                            {t("blog.blog")}
                                        </p>
                                    </div>
                                </div>
                                <h1 className="text-2xl font-semibold leading-6 mt-4 text-gray-800">
                                    {t("blog.title2")}
                                </h1>
                                <p className="text-base leading-6 text-gray-600 mt-2">
                                    {t("blog.text2")}
                                </p>
                            </div>
                        </div>
                        <div className="lg:mt-6 sm:mt-0 mt-6 lg:ml-0 sm:ml-6 lg:w-auto sm:w-1/2">
                            <img src={img3} alt="robotic arm" className="rounded-lg w-full" />
                            <div className="mt-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <svg width={64} height={2} viewBox="0 0 64 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M64 1H0" stroke="#6B7280" />
                                        </svg>
                                        <p className="text-base leading-none text-gray-500 ml-2">
                                            {t("blog.blog")}
                                        </p>
                                    </div>
                                </div>
                                <h1 className="text-2xl font-semibold leading-6 mt-4 text-gray-800">
                                    {t("blog.title2")}
                                </h1>
                                <p className="text-base leading-6 text-gray-600 mt-2">
                                    {t("blog.text3")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogComponent;