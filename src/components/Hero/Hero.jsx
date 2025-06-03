import React from 'react'
import { useTranslation } from 'react-i18next'

import img1 from "../../assets/mission/7.jpg"
import img3 from "../../assets/mission/9.jpg"

import { RiProgress7Line } from "react-icons/ri";
import { HiCheckCircle } from "react-icons/hi";
import { HiMail } from "react-icons/hi";

const Hero = () => {
    const { t } = useTranslation("news")

    return (
        <>
            <div className="relative pt-16 pb-32 h-96 mb-10 flex content-center items-center justify-center min-h-screen-75">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: `url(${img1})`,
                    }}
                >
                    <span
                        id="blackOverlay"
                        className="w-full h-full absolute opacity-75 bg-black"
                    ></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div className="pr-12">
                                <h1 className="text-white font-semibold text-5xl">
                                    {t("story")}
                                </h1>
                                <p className="mt-4 text-lg text-white">
                                    {t("storydesc")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="pb-20 bg-blueGray-200 -mt-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                        <RiProgress7Line className='w-8 h-8' />
                                    </div>
                                    <h6 className="text-xl font-semibold">
                                        {t("hero.t1")}
                                    </h6>
                                    <p className="mt-2 mb-4 text-blueGray-500">
                                        {t("hero.d1")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-4/12 px-4 text-center">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                        <HiCheckCircle className='text-black w-8 h-8' />
                                    </div>
                                    <h6 className="text-xl font-semibold">
                                        {t("hero.t2")}
                                    </h6>
                                    <p className="mt-2 mb-4 text-blueGray-500">
                                        {t("hero.d2")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                        <HiMail className='w-8 h-8' />
                                    </div>
                                    <h6 className="text-xl font-semibold">
                                        {t("hero.t3")}
                                    </h6>
                                    <p className="mt-2 mb-4 text-blueGray-500">
                                        {t("hero.d3")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center mt-32">
                        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                <i className="fas fa-user-friends text-xl"></i>
                            </div>
                            <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                {t("workwithus")}
                            </h3>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                {t("workdesc")}
                            </p>
                        </div>

                        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                <img
                                    alt="..."
                                    src={img3}
                                    className="w-full align-middle rounded-t-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero