import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    const { t } = useTranslation("news");

    const slides = [
        { title: t("slider.t1"), description: t("slider.d1") },
        { title: t("slider.t2"), description: t("slider.d2") },
        { title: t("slider.t3"), description: t("slider.d3") },
        { title: t("slider.t4"), description: t("slider.d4") },
        { title: t("slider.t5"), description: t("slider.d5") },
    ];

    return (
        <div className="bg-white py-16">
            {/* Enhanced Carousel */}
            <div className="container mx-auto px-4">
                <Carousel
                    showThumbs={false}
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    interval={5000}
                    transitionTime={700}
                    className="shadow-sm hover:shadow-xl transition-all duration-200 rounded-2xl overflow-hidden"
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="text-center p-12 bg-white">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 transform hover:scale-105 transition-transform duration-300">
                                {slide.title}
                            </h1>
                            <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-lg leading-relaxed">
                                {slide.description}
                            </p>
                            <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                                {t("readmore")}
                            </button>
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* Donation Card - Enhanced */}
            <div className="container mx-auto px-4 mt-16">
                <div className="bg-white shadow-sm p-8 rounded-2xl max-w-2xl mx-auto transform hover:scale-[1.01] transition-transform duration-300">
                    <h4 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        {t("donation")}
                    </h4>
                    <div className="mt-4 space-y-4">
                        <input
                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
                            placeholder={t("yourname")}
                        />
                        <input
                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
                            placeholder={t("email")}
                            type="email"
                        />
                        <input
                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
                            placeholder={t("phone")}
                            type="tel"
                        />
                        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mt-2">
                            {t("send")}
                        </button>
                    </div>
                </div>
            </div>

            {/* Cards Grid - Enhanced */}
            <div className="container mx-auto px-4 mt-16 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[t("volo"), t("group"), t("dnt")].map((title, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 shadow-sm p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
                        >
                            <div className="bg-blue-100 p-4 rounded-full mb-6">
                                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 text-center">{title}</h4>
                            <p className="text-gray-600 mt-3 text-center">
                                {t("joinus")}
                            </p>
                            <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:shadow-md transition-all duration-300">
                                {t("joinnow")}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;